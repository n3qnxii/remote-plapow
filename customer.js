(()=>{
  "use strict";
  const CHANNEL_NAME="fish-pos-customer-display-v1";
  const $=id=>document.getElementById(id);
  let ws=null,bc=null,lastMessageAt=0,reconnectTimer=null;
  let wakeLock=null;

  const money=n=>"฿"+Number(n||0).toLocaleString("th-TH",{maximumFractionDigits:2});
  const escapeHtml=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch]));
  const orderLabel=n=>"#"+String(Number(n)||1).padStart(3,"0");

  function setConnection(kind,text){
    $("connectionDot").className="connection-dot"+(kind?" "+kind:"");
    $("connectionText").textContent=text;
  }
  function showScreen(name){
    document.querySelectorAll(".screen").forEach(el=>el.classList.toggle("active",el.dataset.screen===name));
  }
  function renderItems(items=[]){
    $("customerItems").innerHTML=items.length?items.map(item=>`
      <div class="customer-item">
        <div class="customer-item-name"><b>${escapeHtml(item.name)}</b><small>${money(item.price)} × ${Number(item.qty||0)}</small></div>
        <div class="customer-item-price">${money(Number(item.price||0)*Number(item.qty||0))}</div>
      </div>`).join(""):'<div style="display:grid;place-items:center;height:100%;color:#7D6E63">ยังไม่มีสินค้า</div>';
    const qty=items.reduce((sum,item)=>sum+Number(item.qty||0),0);
    $("itemCount").textContent=`${qty} รายการ`;
  }
  function applyState(data){
    if(!data||data.type!=="display:update")return;
    lastMessageAt=Date.now();
    $("shopName").textContent=data.shopName||"ร้านทิพย์เกษรเมี่ยงปลาเผา";
    $("orderChip").textContent=orderLabel(data.orderNo);
    renderItems(data.items||[]);
    $("cartTotal").textContent=money(data.total);
    $("cartDiscount").textContent="-"+money(data.discount);
    $("cartDiscountRow").classList.toggle("hidden",!(Number(data.discount)>0));

    $("cashTotal").textContent=money(data.total);
    $("cashReceived").textContent=money(data.cashReceived);
    const received=Number(data.cashReceived||0),total=Number(data.total||0),change=Math.max(0,Number(data.change||0)),short=Math.max(0,total-received);
    if(received<=0){
      $("cashResultLabel").textContent="ยอดที่ต้องชำระ";$("cashChange").textContent=money(total);$("cashChange").style.color="";
      $("cashHint").className="cash-hint";$("cashHint").textContent="รอพนักงานกรอกจำนวนเงิน";
    }else if(short>0){
      $("cashResultLabel").textContent="ขาดอีก";$("cashChange").textContent=money(short);$("cashChange").style.color="var(--red)";
      $("cashHint").className="cash-hint short";$("cashHint").textContent="ยอดเงินยังไม่ครบ";
    }else{
      $("cashResultLabel").textContent=change>0?"เงินทอน":"ชำระพอดี";$("cashChange").textContent=money(change>0?change:total);$("cashChange").style.color="var(--green)";
      $("cashHint").className="cash-hint ready";$("cashHint").textContent=change>0?"กรุณารับเงินทอน":"รับเงินพอดี";
    }

    $("qrTotal").textContent=money(data.total);
    const qr=$("customerQr"),waiting=$("qrWaiting");
    if(data.qrDataUrl){qr.src=data.qrDataUrl;qr.classList.add("ready");waiting.classList.add("hidden")}else{qr.removeAttribute("src");qr.classList.remove("ready");waiting.classList.remove("hidden")}

    $("successTotalCustomer").textContent=money(data.total);
    $("successReceivedCustomer").textContent=money(data.cashReceived);
    $("successChangeCustomer").textContent=money(data.change);
    $("successCashCustomer").classList.toggle("hidden",data.paymentMethod!=="เงินสด");

    const screen=["idle","cart","cash","qr","success"].includes(data.screen)?data.screen:"idle";
    showScreen(screen);
  }

  async function requestDisplayWakeLock(){
    // Keep supported browsers awake while the customer display is open.
    // Raspberry Pi kiosk setup also disables OS screen blanking as a second layer.
    if(!("wakeLock" in navigator)||document.visibilityState!=="visible")return;
    try{
      if(wakeLock&&!wakeLock.released)return;
      wakeLock=await navigator.wakeLock.request("screen");
      wakeLock.addEventListener("release",()=>{wakeLock=null});
    }catch(e){wakeLock=null}
  }
  document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="visible")requestDisplayWakeLock();
  });
  ["pointerdown","keydown","touchstart"].forEach(type=>document.addEventListener(type,requestDisplayWakeLock,{passive:true}));

  function websocketUrl(){
    const params=new URLSearchParams(location.search);
    if(params.get("ws"))return params.get("ws");
    if(location.protocol==="http:"||location.protocol==="file:")return `ws://${location.hostname||"localhost"}:8787`;
    if(location.protocol==="https:")return null;
    return null;
  }
  function connectWebSocket(){
    const url=websocketUrl();
    if(!url){setConnection("preview","โหมดพรีวิวบน Browser เดียวกัน");return}
    clearTimeout(reconnectTimer);
    try{
      ws=new WebSocket(url);
      ws.addEventListener("open",()=>{setConnection("online","เชื่อมต่อ POS แล้ว");ws.send(JSON.stringify({type:"display:hello",role:"customer"}))});
      ws.addEventListener("message",event=>{try{applyState(JSON.parse(event.data))}catch(e){}});
      ws.addEventListener("close",()=>{setConnection("","กำลังเชื่อมต่อ POS ใหม่…");reconnectTimer=setTimeout(connectWebSocket,1800)});
      ws.addEventListener("error",()=>{try{ws.close()}catch(e){}});
    }catch(e){setConnection("","ยังเชื่อมต่อ POS ไม่ได้");reconnectTimer=setTimeout(connectWebSocket,1800)}
  }
  try{
    bc=new BroadcastChannel(CHANNEL_NAME);
    bc.onmessage=event=>{applyState(event.data);if(!ws||ws.readyState!==1)setConnection("preview","รับข้อมูลจาก POS บนเครื่องนี้")};
  }catch(e){}

  setInterval(()=>{$("clockText").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})},1000);
  $("clockText").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"});
  requestDisplayWakeLock();
  connectWebSocket();
})();
