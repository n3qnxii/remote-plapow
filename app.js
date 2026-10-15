const STORAGE_KEY="fishPOS_figma_v3";
const STAFF_LIST=[
  {id:1,name:"คุณทองสุข",pin:"1234",role:"owner"},
  {id:2,name:"คุณเกษร",pin:"1111",role:"staff"},
  {id:3,name:"น้องนิดหน่อย",pin:"2222",role:"staff"},
  {id:4,name:"น้องบีม",pin:"3333",role:"staff"},
  {id:5,name:"น้องไนท์",pin:"4444",role:"staff"},
  {id:6,name:"STAFF",pin:"5555",role:"staff"}
];
const demoState={settings:{shopName:"ร้านทิพย์เกษรเมี่ยงปลาเผา",nextOrder:1,qrImage:"",promptPayId:"",dailyOrderCounters:{},remoteSyncUrl:"",remoteShopKey:"",remoteDashboardUrl:"",publicDashboardUrl:"",printerIpHistory:[],printerEnabled:false,printerIp:"",printerDeviceId:"local_printer",autoPrintReceipt:true,autoPrintQueue:true,customCategories:[],categoryOrder:["ปลาชุดใหญ่","ปลาชุดเล็ก","ปลาตัว","ของเพิ่ม","เครื่องดื่ม"]},staff:STAFF_LIST,products:[
  {id:1,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:160,cost:110,stock:50,unit:"ตัว",active:true},
  {id:2,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:170,cost:110,stock:50,unit:"ตัว",active:true},
  {id:3,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:180,cost:110,stock:50,unit:"ตัว",active:true},
  {id:4,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:190,cost:110,stock:50,unit:"ตัว",active:true},
  {id:5,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:200,cost:110,stock:50,unit:"ตัว",active:true},
  {id:6,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:220,cost:110,stock:50,unit:"ตัว",active:true},
  {id:7,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:230,cost:110,stock:50,unit:"ตัว",active:true},
  {id:8,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:240,cost:110,stock:50,unit:"ตัว",active:true},
  {id:9,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:250,cost:110,stock:50,unit:"ตัว",active:true},
  {id:10,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:260,cost:110,stock:50,unit:"ตัว",active:true},
  {id:11,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:270,cost:110,stock:50,unit:"ตัว",active:true},
  {id:12,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:280,cost:110,stock:50,unit:"ตัว",active:true},
  {id:13,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:80,cost:80,stock:40,unit:"ตัว",active:true},
  {id:14,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:90,cost:80,stock:40,unit:"ตัว",active:true},
  {id:15,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:100,cost:80,stock:40,unit:"ตัว",active:true},
  {id:16,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:120,cost:80,stock:40,unit:"ตัว",active:true},
  {id:17,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:130,cost:80,stock:40,unit:"ตัว",active:true},
  {id:18,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:140,cost:80,stock:40,unit:"ตัว",active:true},
  {id:19,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:150,cost:80,stock:40,unit:"ตัว",active:true},
  {id:20,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:70,cost:70,stock:40,unit:"ตัว",active:true},
  {id:21,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:80,cost:70,stock:40,unit:"ตัว",active:true},
  {id:22,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:90,cost:70,stock:40,unit:"ตัว",active:true},
  {id:23,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:100,cost:70,stock:40,unit:"ตัว",active:true},
  {id:24,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:110,cost:70,stock:40,unit:"ตัว",active:true},
  {id:25,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:120,cost:70,stock:40,unit:"ตัว",active:true},
  {id:26,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:130,cost:70,stock:40,unit:"ตัว",active:true},
  {id:27,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:140,cost:70,stock:40,unit:"ตัว",active:true},
  {id:28,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:150,cost:70,stock:40,unit:"ตัว",active:true},
  {id:29,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:160,cost:70,stock:40,unit:"ตัว",active:true},
  {id:30,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:10,cost:8,stock:100,unit:"ถ้วย",active:true},
  {id:31,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:12,cost:8,stock:100,unit:"ถ้วย",active:true},
  {id:38,name:"ขนมจีนถุง",category:"ของเพิ่ม",price:5,cost:3,stock:100,unit:"ถุง",active:true},
  {id:32,name:"ชุดผัก",category:"ของเพิ่ม",price:60,cost:7,stock:100,unit:"ชุด",active:true},
  {id:33,name:"น้ำจิ้มซีฟู้ด",category:"ของเพิ่ม",price:10,cost:3,stock:100,unit:"ถุง",active:true},
  {id:34,name:"น้ำจิ้มหวาน",category:"ของเพิ่ม",price:10,cost:3,stock:100,unit:"ถุง",active:true},
  {id:35,name:"น้ำจิ้มปั่น",category:"ของเพิ่ม",price:10,cost:3,stock:100,unit:"ถุง",active:true},
  {id:36,name:"น้ำดื่ม",category:"เครื่องดื่ม",price:10,cost:5,stock:100,unit:"ขวด",active:true},
  {id:37,name:"ผัก",category:"ของเพิ่ม",price:20,cost:7,stock:100,unit:"ถุง",active:true}
],orders:[],preorders:[],heldOrders:[],auditLog:[],syncQueue:[]};
const $=id=>document.getElementById(id), clone=o=>JSON.parse(JSON.stringify(o));
const money=n=>"฿"+Number(n||0).toLocaleString("th-TH",{maximumFractionDigits:2});

const POS_UI_PATCH_ID="fish-pos-touch-sound-patch";

function ensurePosUiPatch(){
  if(document.getElementById(POS_UI_PATCH_ID))return;
  const style=document.createElement("style");
  style.id=POS_UI_PATCH_ID;
  style.textContent=`
    /* V7 touch/payment usability patch */
    .product .price{
      font-size:24px!important;
      line-height:1.05!important;
      font-weight:900!important;
      color:#d95f0b!important;
      margin-top:12px!important;
    }
    .product strong{font-size:17px!important}
    .product{transition:transform .09s ease,box-shadow .12s ease,background .12s ease,border-color .12s ease}
    .product.pos-tapped{
      transform:scale(.965);
      background:#fff0df!important;
      border-color:#e96813!important;
      box-shadow:0 0 0 3px rgba(233,104,19,.16)!important;
    }
    .qty b,.pre-controls strong{font-size:22px!important;min-width:30px;text-align:center}
    .qty button,.pre-controls button{transition:transform .08s ease,background .1s ease,color .1s ease}
    .qty button.pos-tapped,.pre-controls button.pos-tapped{
      transform:scale(.90);
      background:#e96512!important;
      color:#fff!important;
    }
    #total,#modalTotal,#successTotal{font-size:30px!important;font-weight:900!important}
    #cashReceived{
      font-size:30px!important;
      font-weight:900!important;
      text-align:center!important;
      min-height:58px!important;
    }
    #change{font-size:22px!important;font-weight:900!important}
    #cashPaymentStatus{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:12px 14px;
      margin-top:9px;
      border-radius:12px;
      font-weight:800;
      font-size:16px;
    }
    #cashPaymentStatus strong{font-size:22px}
    #cashPaymentStatus.short{
      background:#fff0ed;
      color:#b42318;
      border:1px solid #fecdca;
    }
    #cashPaymentStatus.enough{
      background:#ecfdf3;
      color:#067647;
      border:1px solid #abefc6;
    }
    #cashPaymentStatus.zero{
      background:#f7f3ed;
      color:#8a735e;
      border:1px solid #eadfce;
    }

    #cashReceived{
      caret-color:transparent!important;
      user-select:none;
      -webkit-user-select:none;
    }
    .payment-keypad{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:8px;
      margin-top:10px;
    }
    .payment-keypad button{
      min-height:52px;
      border:1px solid #eadfce;
      background:#fff;
      border-radius:12px;
      font-size:20px;
      font-weight:800;
      color:#2a2118;
      box-shadow:0 1px 2px rgba(70,45,20,.04);
      transition:transform .08s ease,background .1s ease,color .1s ease,border-color .1s ease;
    }
    .payment-keypad button:active,
    .payment-keypad button.pos-tapped{
      transform:scale(.96);
      background:#fff0df;
      color:#d95f0b;
      border-color:#e96813;
    }
    .payment-keypad .key-action{
      background:#f5eee5;
      color:#7c6650;
    }
    .payment-keypad .key-exact{
      background:#e96512;
      border-color:#e96512;
      color:#fff;
    }

    .payment-methods button,.cash-quick button,#confirmPay{
      transition:transform .08s ease,filter .1s ease;
    }
    .payment-methods button:active,.cash-quick button:active,#confirmPay:active{
      transform:scale(.98);
      filter:brightness(.96);
    }
  `;
  document.head.appendChild(style);
}

let posAudioContext=null;
function getPosAudioContext(){
  try{
    if(!posAudioContext){
      const Ctx=window.AudioContext||window.webkitAudioContext;
      if(Ctx)posAudioContext=new Ctx();
    }
    if(posAudioContext?.state==="suspended")posAudioContext.resume();
    return posAudioContext;
  }catch(e){return null}
}
function tone(freq=620,duration=.055,volume=.035,delay=0){
  const ctx=getPosAudioContext();if(!ctx)return;
  try{
    const osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.type="sine";osc.frequency.value=freq;
    gain.gain.setValueAtTime(volume,ctx.currentTime+delay);
    gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+delay+duration);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start(ctx.currentTime+delay);osc.stop(ctx.currentTime+delay+duration);
  }catch(e){}
}
function playTapSound(){tone(660,.045,.025)}
function playQtySound(up=true){tone(up?760:470,.05,.028)}
function playPaymentSuccessSound(){
  tone(660,.08,.045,0);
  tone(880,.10,.045,.09);
  tone(1100,.14,.05,.19);
}
function speakThai(text){
  if(!("speechSynthesis" in window))return;
  try{
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang="th-TH";
    u.rate=.92;
    u.pitch=1;
    u.volume=1;
    const voices=window.speechSynthesis.getVoices?.()||[];
    const th=voices.find(v=>String(v.lang||"").toLowerCase().startsWith("th"));
    if(th)u.voice=th;
    setTimeout(()=>window.speechSynthesis.speak(u),260);
  }catch(e){}
}
function announcePayment(order){
  if(!order)return;
  const totalAmount=Math.round(Number(order.total||0));
  if(order.payment==="QR"){
    speakThai(`รับเงินโอน ${totalAmount} บาทค่ะ`);
    return;
  }
  const received=Math.round(Number(order.cashReceived||0));
  const change=Math.round(Number(order.change||0));
  speakThai(change>0?`รับเงินสด ${received} บาท ทอน ${change} บาทค่ะ`:`รับเงินสด ${received} บาท ชำระพอดีค่ะ`);
}
function tapFeedback(el){
  if(!el)return;
  el.classList.add("pos-tapped");
  setTimeout(()=>el.classList.remove("pos-tapped"),150);
}
function currentTapElement(){
  try{return window.event?.currentTarget||null}catch(e){return null}
}
function escapeHtml(value){
  return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch]));
}

let genericNumericContext=null;
function numericDigitsOnly(value,maxDigits=8){
  return String(value??"").replace(/\D/g,"").slice(0,maxDigits);
}
function openNumericKeypad(options={}){
  const current=numericDigitsOnly(options.value??"",options.maxDigits||8);
  genericNumericContext={
    title:options.title||"กรอกตัวเลข",
    hint:options.hint||"ใช้เฉพาะตัวเลข",
    value:current,
    max:options.max??null,
    min:options.min??0,
    maxDigits:options.maxDigits||8,
    allowZero:options.allowZero!==false,
    allowLeadingZeros:options.allowLeadingZeros===true,
    returnAsString:options.returnAsString===true,
    onConfirm:typeof options.onConfirm==="function"?options.onConfirm:()=>{}
  };
  $("numericKeypadTitle").textContent=genericNumericContext.title;
  $("numericKeypadHint").textContent=genericNumericContext.hint;
  renderNumericKeypadValue();
  $("numericKeypadModal").classList.remove("hidden");
}
function renderNumericKeypadValue(){
  if(!genericNumericContext)return;
  $("numericKeypadValue").textContent=genericNumericContext.value||"0";
}
function appendNumericKey(digit){
  if(!genericNumericContext)return;
  let s=genericNumericContext.value||"";
  if(s.length>=genericNumericContext.maxDigits)return;
  if(s==="0"&&!genericNumericContext.allowLeadingZeros)s="";
  s+=String(digit);
  genericNumericContext.value=numericDigitsOnly(s,genericNumericContext.maxDigits);
  renderNumericKeypadValue();playTapSound();
}
function numericBackspace(){
  if(!genericNumericContext)return;
  genericNumericContext.value=(genericNumericContext.value||"").slice(0,-1);
  renderNumericKeypadValue();playQtySound(false);
}
function numericClear(){
  if(!genericNumericContext)return;
  genericNumericContext.value="";
  renderNumericKeypadValue();playQtySound(false);
}
function closeNumericKeypad(){
  $("numericKeypadModal").classList.add("hidden");
  genericNumericContext=null;
}
function confirmNumericKeypad(){
  if(!genericNumericContext)return;
  const ctx=genericNumericContext;
  const cb=ctx.onConfirm;
  if(ctx.returnAsString){
    const s=ctx.value||"";
    closeNumericKeypad();
    cb(s);
    return;
  }
  let n=Number(ctx.value||0);
  if(Number.isFinite(ctx.min))n=Math.max(Number(ctx.min),n);
  if(Number.isFinite(ctx.max))n=Math.min(Number(ctx.max),n);
  closeNumericKeypad();
  cb(n);
}
document.querySelectorAll("[data-num-key]").forEach(btn=>btn.onclick=()=>appendNumericKey(btn.dataset.numKey));
$("numericKeypadBack").onclick=numericBackspace;
$("numericKeypadClear").onclick=numericClear;
$("numericKeypadConfirm").onclick=confirmNumericKeypad;
$("closeNumericKeypad").onclick=closeNumericKeypad;
$("numericKeypadModal").addEventListener("click",e=>{if(e.target===$("numericKeypadModal"))closeNumericKeypad()});

function bindNumericInput(id,options={}){
  const el=$(id);if(!el)return;
  el.readOnly=true;
  el.setAttribute("inputmode","none");
  el.addEventListener("click",()=>{
    openNumericKeypad({
      title:options.title||"กรอกตัวเลข",
      hint:options.hint||"",
      value:el.value,
      max:options.max,
      min:options.min??0,
      maxDigits:options.maxDigits||8,
      allowLeadingZeros:options.allowLeadingZeros===true,
      returnAsString:options.returnAsString===true,
      onConfirm:n=>{
        el.value=String(n);
        el.dispatchEvent(new Event("input",{bubbles:true}));
        el.dispatchEvent(new Event("change",{bubbles:true}));
      }
    })
  });
}

const nowIso=()=>new Date().toISOString();

const localDateKey=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
function ensureDailyOrderCounter(){
  if(!state.settings.dailyOrderCounters||typeof state.settings.dailyOrderCounters!=="object")state.settings.dailyOrderCounters={};
  const key=localDateKey();
  if(!Number.isFinite(Number(state.settings.dailyOrderCounters[key]))||Number(state.settings.dailyOrderCounters[key])<1){
    const todays=state.orders.filter(o=>localDateKey(new Date(o.time))===key);
    const maxExisting=todays.reduce((m,o)=>Math.max(m,Number(o.number)||0),0);
    state.settings.dailyOrderCounters[key]=Math.max(todays.length+1,maxExisting+1,1);
  }
  state.settings.nextOrder=Number(state.settings.dailyOrderCounters[key])||1;
  return state.settings.nextOrder;
}
function currentDailyOrderNumber(){return String(ensureDailyOrderCounter()).padStart(3,"0")}
function advanceDailyOrderNumber(){
  const key=localDateKey();
  state.settings.dailyOrderCounters[key]=ensureDailyOrderCounter()+1;
  state.settings.nextOrder=state.settings.dailyOrderCounters[key];
}

function loadState(){try{const x=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null")||clone(demoState);if(!x.settings)x.settings=clone(demoState.settings);if(typeof x.settings.qrImage!=="string")x.settings.qrImage="";if(typeof x.settings.promptPayId!=="string")x.settings.promptPayId="";if(typeof x.settings.remoteSyncUrl!=="string")x.settings.remoteSyncUrl="";if(typeof x.settings.remoteShopKey!=="string")x.settings.remoteShopKey="";if(typeof x.settings.remoteDashboardUrl!=="string")x.settings.remoteDashboardUrl="";if(typeof x.settings.publicDashboardUrl!=="string")x.settings.publicDashboardUrl="";if(!Array.isArray(x.settings.printerIpHistory))x.settings.printerIpHistory=[];if(typeof x.settings.printerEnabled!=="boolean")x.settings.printerEnabled=false;if(typeof x.settings.printerIp!=="string")x.settings.printerIp="";if(typeof x.settings.printerDeviceId!=="string"||!x.settings.printerDeviceId)x.settings.printerDeviceId="local_printer";if(typeof x.settings.autoPrintReceipt!=="boolean")x.settings.autoPrintReceipt=true;if(typeof x.settings.autoPrintQueue!=="boolean")x.settings.autoPrintQueue=true;
if(!x.settings.dailyOrderCounters||typeof x.settings.dailyOrderCounters!=="object")x.settings.dailyOrderCounters={};
if(!Array.isArray(x.settings.customCategories))x.settings.customCategories=[];if(!Array.isArray(x.settings.categoryOrder))x.settings.categoryOrder=[];if(!Array.isArray(x.products))x.products=clone(demoState.products);if(!Array.isArray(x.orders))x.orders=[];if(!Array.isArray(x.preorders))x.preorders=[];if(!Array.isArray(x.heldOrders))x.heldOrders=[];if(!Array.isArray(x.auditLog))x.auditLog=[];if(!Array.isArray(x.syncQueue))x.syncQueue=[];x.staff=clone(STAFF_LIST);return x}catch(e){return clone(demoState)}}
let state=loadState(),currentUser=null,selectedStaffId=null,cart=[],selectedMethod=null,lastOrder=null,currentCategory="ปลาชุดใหญ่",dashboardRange="today",orderStatusFilter="today",lastCashReceived=0,lastChange=0,preorderCart=[],preorderStatusFilter="all",preorderCategory="all";

// V83 — recover historical sales from the Raspberry Pi if this browser ever loses
// its local storage. We only auto-restore when the local order history is empty,
// so a healthy iPad copy is never silently overwritten.
async function recoverFromRaspberryV83(){
  try{
    const r=await fetch("/api/live-state",{cache:"no-store"});
    if(!r.ok)return false;
    const remote=await r.json();
    const remoteOrders=Array.isArray(remote.orders)?remote.orders:[];
    if((!Array.isArray(state.orders)||state.orders.length===0) && remoteOrders.length>0){
      const localSettings=state.settings||{};
      state={...remote,settings:{...(remote.settings||{}),...localSettings}};
      if(!Array.isArray(state.preorders))state.preorders=[];
      if(!Array.isArray(state.heldOrders))state.heldOrders=[];
      if(!Array.isArray(state.auditLog))state.auditLog=[];
      if(!Array.isArray(state.syncQueue))state.syncQueue=[];
      state.staff=clone(STAFF_LIST);
      localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
      ensureDailyOrderCounter();
      return true;
    }
  }catch(e){}
  return false;
}
window.addEventListener("load",()=>recoverFromRaspberryV83().then(restored=>{if(restored){try{renderAll()}catch(e){location.reload()}}}));

let preorderPageViewV25="list";

// V24 consolidated migration
(function migrateV24Consolidated(){
  let changed=false;
  if(state.settings && state.settings.shopName!=="ร้านทิพย์เกษรเมี่ยงปลาเผา"){
    state.settings.shopName="ร้านทิพย์เกษรเมี่ยงปลาเผา";
    changed=true;
  }
  if(Array.isArray(state.preorders)){
    state.preorders.forEach(o=>{
      if(o.status==="waiting"){o.status="pending";changed=true}
      else if(!["pending","confirmed","preparing","ready","completed","cancelled"].includes(o.status)){
        o.status=o.status==="cancelled"?"cancelled":"pending";
        changed=true;
      }
    });
  }
  if(changed)saveState();
})();

// V54 — Simplified preorder status flow
// Old data is kept, but old workflow statuses are mapped to the new 3-state flow:
// pending/preparing -> confirmed, ready -> completed.
(function migratePreorderStatusV54(){
  let changed=false;
  if(Array.isArray(state.preorders)){
    state.preorders.forEach(o=>{
      if(o.status==="pending"||o.status==="preparing"||o.status==="waiting"){o.status="confirmed";changed=true}
      else if(o.status==="ready"){o.status="completed";changed=true}
      else if(!["confirmed","completed","cancelled"].includes(o.status)){o.status="confirmed";changed=true}
    });
  }
  if(changed)saveState();
})();

// V10.7 shop name migration for existing saved data
if(state.settings&&state.settings.shopName===("ร้านทิพย์เกษรเมี่ยงปลาเผา"+"ทิพย์เกษร")){state.settings.shopName="ร้านทิพย์เกษรเมี่ยงปลาเผา";saveState();}
function saveState(){
  state.staff=clone(STAFF_LIST);
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  // V74: mirror the POS state to Raspberry Pi so any device on the shop Wi-Fi
  // can open remote-dashboard.html and see the same live totals.
  fetch("/api/live-state",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(state),keepalive:true}).catch(()=>{});
}

function auditV65(action,detail="",meta={}){
  if(!Array.isArray(state.auditLog))state.auditLog=[];
  const row={id:Date.now()+Math.floor(Math.random()*1000),time:nowIso(),action:String(action),detail:String(detail||""),staffId:currentUser?.id||null,staffName:currentUser?.name||"ระบบ",role:currentUser?.role||"system",...meta};
  state.auditLog.unshift(row);
  state.auditLog=state.auditLog.slice(0,5000);
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(e){}
  queueSyncV65("audit",row);
  renderAuditV65();
  return row;
}
function queueSyncV65(type,payload){
  if(!Array.isArray(state.syncQueue))state.syncQueue=[];
  state.syncQueue.push({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,type,payload,createdAt:nowIso(),tries:0});
  state.syncQueue=state.syncQueue.slice(-3000);
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(e){}
  updateCloudStatusV65();
  setTimeout(flushSyncQueueV65,50);
}
function cloudBaseV65(){return String(state.settings.remoteSyncUrl||"").trim().replace(/\/+$/,"")}
function cloudHeadersV65(){return {"Content-Type":"application/json","X-Shop-Key":String(state.settings.remoteShopKey||"").trim()}}
async function flushSyncQueueV65(){
  if(window.__syncingV65)return;
  const base=cloudBaseV65(),key=String(state.settings.remoteShopKey||"").trim();
  if(!base||!key||!navigator.onLine){updateCloudStatusV65(false);return}
  window.__syncingV65=true;
  try{
    while(state.syncQueue.length){
      const job=state.syncQueue[0];job.tries=(job.tries||0)+1;
      let path=job.type==="audit"?"/api/audit/sync":"/api/orders/sync";
      const body=job.type==="audit"?{audit:job.payload,shopName:state.settings.shopName||""}:{order:job.payload,shopName:state.settings.shopName||""};
      let r;
      try{r=await fetch(base+path,{method:"POST",headers:cloudHeadersV65(),body:JSON.stringify(body)})}catch(e){break}
      if(!r.ok){if(job.tries>=5)job.lastError=`HTTP ${r.status}`;break}
      state.syncQueue.shift();state.settings.lastCloudSyncAt=nowIso();
      localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
    }
    updateCloudStatusV65(state.syncQueue.length===0);
  }finally{window.__syncingV65=false}
}
async function remoteSyncOrderV64(order){queueSyncV65("order",order);return true}
async function backupCloudV65(manual=false){
  const base=cloudBaseV65(),key=String(state.settings.remoteShopKey||"").trim();
  if(!base||!key){if(manual)alert("กรุณาตั้งค่า Cloud Server URL และ Shop Key ก่อน");return false}
  const payload={version:"V65",savedAt:nowIso(),shopName:state.settings.shopName||"",data:{settings:state.settings,products:state.products,orders:state.orders,preorders:state.preorders,heldOrders:state.heldOrders,auditLog:state.auditLog}};
  try{
    const r=await fetch(base+"/api/backup/snapshot",{method:"POST",headers:cloudHeadersV65(),body:JSON.stringify(payload)});
    if(!r.ok)throw new Error(`HTTP ${r.status}`);
    state.settings.lastCloudBackupAt=nowIso();localStorage.setItem(STORAGE_KEY,JSON.stringify(state));updateCloudStatusV65(true);
    if(manual)alert("สำรองข้อมูลขึ้น Cloud สำเร็จ");return true;
  }catch(e){updateCloudStatusV65(false);if(manual)alert("สำรองข้อมูลไม่สำเร็จ ระบบขายยังใช้งานได้ตามปกติ");return false}
}
function scheduleBackupV65(){
  clearInterval(window.__backupTimerV65);
  window.__backupTimerV65=setInterval(()=>{if(cloudBaseV65()&&state.settings.remoteShopKey)backupCloudV65(false)},15*60*1000);
}
function updateCloudStatusV65(ok){
  const el=$("cloudHealthV65");if(!el)return;
  const pending=Array.isArray(state.syncQueue)?state.syncQueue.length:0;
  const last=state.settings.lastCloudSyncAt?new Date(state.settings.lastCloudSyncAt).toLocaleString("th-TH"):'ยังไม่เคย Sync';
  const backup=state.settings.lastCloudBackupAt?new Date(state.settings.lastCloudBackupAt).toLocaleString("th-TH"):'ยังไม่เคย Backup';
  el.innerHTML=`<div><b>${navigator.onLine?'อินเทอร์เน็ต ✓':'ออฟไลน์'}</b><small>${navigator.onLine?'พร้อมส่งข้อมูล':'POS ยังขายต่อได้'}</small></div><div><b>${pending?`รอ Sync ${pending}`:'Sync ✓'}</b><small>${last}</small></div><div><b>${state.settings.lastCloudBackupAt?'Backup ✓':'Backup —'}</b><small>${backup}</small></div>`;
}
window.addEventListener("online",()=>{flushSyncQueueV65();backupCloudV65(false);updateCloudStatusV65(true)});
window.addEventListener("offline",()=>updateCloudStatusV65(false));


function enforceShopNameV24(){
  if(state.settings)state.settings.shopName="ร้านทิพย์เกษรเมี่ยงปลาเผา";
  if($("shopTitle"))$("shopTitle").textContent="ร้านทิพย์เกษรเมี่ยงปลาเผา";
}
enforceShopNameV24();
function migrateV104(){
  let changed=false;
  state.products.forEach(p=>{if(p.name==="ปลาเผาตัว"){p.name="ปลาเผา(เอาแต่ปลา)";changed=true}});
  if(changed)saveState();
}
migrateV104();
function migrateV114Staff(){state.staff=clone(STAFF_LIST);saveState()}
migrateV114Staff();

function migrateV120(){
  if(localStorage.getItem("fish_pos_v120_migrated")==="1"){ensureDailyOrderCounter();return}
  state.products.forEach(p=>{
    if(p.name==="ปลาเผาชุดใหญ่"||p.name==="ปลาเผาชุดเล็ก")p.name="ปลาเผาเป็นชุด";
    if(p.name==="ปลาเผา(เอาแต่ปลา)"||p.name==="ปลาเผาตัว")p.name="ปลาเผาเป็นตัว";
    if(p.category==="ปลา")p.category="ปลาตัว";
  });
  const noodleCups=state.products.filter(p=>p.name==="ขนมจีนถ้วย");
  const cup10=noodleCups.find(p=>Number(p.price)===10);
  const cup12=noodleCups.find(p=>Number(p.price)===12);
  if(!cup10){
    const base=noodleCups[0];
    if(base){base.price=10;base.unit="ถ้วย"}else state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:10,cost:8,stock:100,unit:"ถ้วย",active:true});
  }
  if(!cup12)state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:12,cost:8,stock:100,unit:"ถ้วย",active:true});
  const bag=state.products.find(p=>p.name==="ขนมจีนถุง");
  if(bag){bag.price=5;bag.unit="ถุง"}else state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถุง",category:"ของเพิ่ม",price:5,cost:3,stock:100,unit:"ถุง",active:true});
  if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];
  if(!state.settings.dailyOrderCounters||typeof state.settings.dailyOrderCounters!=="object")state.settings.dailyOrderCounters={};
  ensureDailyOrderCounter();
  localStorage.setItem("fish_pos_v120_migrated","1");
  saveState();
}
migrateV120();

function migrateV130(){
  let changed=false;
  if(!Array.isArray(state.settings.categoryOrder))state.settings.categoryOrder=[];
  const allCats=[...new Set(state.products.map(p=>p.category).filter(Boolean))];
  if(!state.settings.categoryOrder.length){
    const preferred=["ปลาชุดใหญ่","ปลาชุดเล็ก","ปลาตัว","ของเพิ่ม","เครื่องดื่ม"];
    state.settings.categoryOrder=[...preferred.filter(x=>allCats.includes(x)),...allCats.filter(x=>!preferred.includes(x))];
    changed=true;
  }else{
    allCats.forEach(x=>{if(!state.settings.categoryOrder.includes(x)){state.settings.categoryOrder.push(x);changed=true}});
    state.settings.categoryOrder=state.settings.categoryOrder.filter(x=>allCats.includes(x)||(state.settings.customCategories||[]).includes(x));
  }
  // Ensure both noodle cup prices exist even for devices that already ran older migration.
  const cups=state.products.filter(p=>p.name==="ขนมจีนถ้วย");
  for(const price of [10,12]){
    if(!cups.some(p=>Number(p.price)===price)){
      state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price,cost:8,stock:100,unit:"ถ้วย",active:true});
      changed=true;
    }
  }
  const bag=state.products.find(p=>p.name==="ขนมจีนถุง");
  if(bag&&Number(bag.price)!==5){bag.price=5;changed=true}
  localStorage.setItem("fish_pos_v130_migrated","1");
  if(changed)saveState();
}
migrateV130();



function initGenericNumericBindings(){
  bindNumericInput("discountInput",{title:"ส่วนลด (บาท)",hint:"ใส่จำนวนส่วนลด",max:999999,maxDigits:6});
  bindNumericInput("newPrice",{title:"ราคาขาย",hint:"ใส่ราคาขาย",max:999999,maxDigits:6});
  bindNumericInput("newCost",{title:"ต้นทุน",hint:"ใส่ต้นทุน",max:999999,maxDigits:6});
  bindNumericInput("newStock",{title:"สต๊อก",hint:"ใส่สต๊อกได้มากกว่า 200",max:999999,maxDigits:6});
  bindNumericInput("editPrice",{title:"ราคาขาย",hint:"ใส่ราคาขาย",max:999999,maxDigits:6});
  bindNumericInput("editCost",{title:"ต้นทุน",hint:"ใส่ต้นทุน",max:999999,maxDigits:6});
  bindNumericInput("editStock",{title:"สต๊อก",hint:"ใส่สต๊อกได้มากกว่า 200",max:999999,maxDigits:6});
  bindNumericInput("prePhone",{title:"เบอร์โทรลูกค้า",hint:"ใส่เฉพาะตัวเลข เช่น 0812345678",maxDigits:10,allowLeadingZeros:true,returnAsString:true});
  bindNumericInput("promptPayIdInput",{title:"PromptPay ID",hint:"เบอร์มือถือเริ่ม 0 ได้ เช่น 0812345678",maxDigits:15,allowLeadingZeros:true,returnAsString:true});
}
initGenericNumericBindings();

// Clock
let lastClockDate=localDateKey();
function updateClock(){const d=new Date();$("clockTime").textContent=d.toLocaleTimeString("th-TH",{hour12:false});$("todayText").textContent=d.toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"numeric"});$("liveChartNow").textContent="อัปเดต "+d.toLocaleTimeString("th-TH",{hour12:false});const k=localDateKey(d);if(k!==lastClockDate){lastClockDate=k;ensureDailyOrderCounter();if($("orderNo"))$("orderNo").textContent="#"+currentDailyOrderNumber();if(currentUser){renderDashboard();renderAdmin()}}}
setInterval(updateClock,1000);updateClock();

// Login + PIN keypad
function initLogin(){
  const select=$("staffSelect");
  select.innerHTML='<option value="">— เลือกชื่อพนักงาน —</option>'+STAFF_LIST.map(s=>`<option value="${s.id}">${s.name}${s.role==="owner"?" · เจ้าของร้าน":""}</option>`).join("");
  select.onchange=()=>{selectedStaffId=select.value?Number(select.value):null;clearPin();$("loginHint").textContent=selectedStaffId?"กรอก PIN 4 หลัก":"เลือกพนักงานก่อน แล้วกรอก PIN 4 หลัก"};
  document.querySelectorAll("[data-pin]").forEach(b=>b.onclick=()=>{if(!selectedStaffId){$("loginHint").textContent="กรุณาเลือกพนักงานก่อน";return}if($("pinInput").value.length<4){$("pinInput").value+=b.dataset.pin;renderPinDots();if($("pinInput").value.length===4)setTimeout(attemptLogin,120)}});
  $("pinBack").onclick=()=>{$("pinInput").value=$("pinInput").value.slice(0,-1);renderPinDots()};
  $("loginBtn").onclick=attemptLogin;
}
function clearPin(){$("pinInput").value="";renderPinDots();$("loginHint").textContent="กรอก PIN 4 หลัก"}
function renderPinDots(){[...$("pinDots").children].forEach((d,i)=>d.classList.toggle("filled",i<$("pinInput").value.length))}

function renderStaffAccountSwitcherV29(){
  const list=$("staffAccountListV29");
  if(!list||!currentUser)return;

  if($("staffAccountNameV29"))$("staffAccountNameV29").textContent=currentUser.name;
  if($("staffAccountRoleV29"))$("staffAccountRoleV29").textContent=currentUser.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน";

  list.innerHTML=STAFF_LIST.map(s=>`
    <button type="button" class="staff-account-option-v29 ${s.id===currentUser.id?"current":""}" data-staff-id-v29="${s.id}">
      <span class="staff-account-option-name-v29">${escapeHtml(s.name)}</span>
      <span class="staff-account-option-role-v29">${s.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน"}</span>
    </button>
  `).join("");
}

function closeStaffAccountPopoverV29(){
  if($("staffAccountPopoverV29"))$("staffAccountPopoverV29").classList.add("hidden");
}

function toggleStaffAccountPopoverV29(){
  const pop=$("staffAccountPopoverV29");
  if(!pop)return;
  renderStaffAccountSwitcherV29();
  pop.classList.toggle("hidden");
}

function applyCurrentUser(staff){
  const previousUserV65=currentUser;
  currentUser=staff;
  $("loginScreen").classList.add("hidden");$("app").classList.remove("hidden");
  $("staffBadge").textContent=`${staff.name} · ${staff.role==="owner"?"เจ้าของ":"พนักงาน"}`;
  document.querySelectorAll(".owner-only").forEach(el=>el.classList.toggle("hidden",staff.role!=="owner"));
  const quick=$("staffQuickSwitch");
  if(quick){
    quick.innerHTML=STAFF_LIST.map(s=>`<option value="${s.id}">${s.name}${s.role==="owner"?" · เจ้าของ":""}</option>`).join("");
    quick.value=String(staff.id);
  }
  if($("staffQuickName"))$("staffQuickName").textContent=staff.name;
  if($("staffQuickRole"))$("staffQuickRole").textContent=staff.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน";
  if($("staffQuickMenu"))$("staffQuickMenu").innerHTML=STAFF_LIST.map(s=>`<button type="button" class="${s.id===staff.id?"active":""}" data-quick-staff="${s.id}"><span>${s.name}</span><small>${s.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน"}</small></button>`).join("");
  if(staff.role!=="owner"&&!$("dashboard").classList.contains("hidden"))openPage("sale");
  if(staff.role!=="owner"&&!$("admin").classList.contains("hidden"))openPage("sale");
  renderStaffAccountSwitcherV29();
  renderAll();
  if(!previousUserV65||previousUserV65.id!==staff.id)auditV65(previousUserV65?"สลับผู้ใช้งาน":"เข้าสู่ระบบ",`${staff.name} (${staff.role==="owner"?"เจ้าของ":"พนักงาน"})`);
}
function attemptLogin(){if(!selectedStaffId){$("loginHint").textContent="กรุณาเลือกพนักงานก่อน";return}const staff=STAFF_LIST.find(s=>s.id===selectedStaffId);if(!staff||staff.pin!==$("pinInput").value){$("loginHint").textContent="PIN ไม่ถูกต้อง กรุณาลองใหม่";clearPin();return}applyCurrentUser(staff)}
$("logoutBtn").onclick=()=>location.reload();

let pendingSwitchStaffId=null;
function renderSwitchPinDots(){[...$("switchPinDots").children].forEach((d,i)=>d.classList.toggle("filled",i<$("switchPinInput").value.length))}
function clearSwitchPin(message="กรอก PIN 4 หลัก"){$("switchPinInput").value="";renderSwitchPinDots();$("switchPinHint").textContent=message}
function openStaffSwitch(id){
  const staff=STAFF_LIST.find(s=>s.id===Number(id));
  if(!staff)return;
  if(staff.id===currentUser?.id){
    return;
  }
  pendingSwitchStaffId=staff.id;
  $("switchStaffName").textContent=staff.name;
  clearSwitchPin("กรอก PIN 4 หลัก");
  $("staffSwitchModal").classList.remove("hidden");
}
function closeStaffSwitch(){
  $("staffSwitchModal").classList.add("hidden");
  pendingSwitchStaffId=null;
  clearSwitchPin();
}
function confirmStaffSwitch(){
  const staff=STAFF_LIST.find(s=>s.id===pendingSwitchStaffId);if(!staff)return;
  if($("switchPinInput").value!==staff.pin){clearSwitchPin("PIN ไม่ถูกต้อง กรุณาลองใหม่");return}
  $("staffSwitchModal").classList.add("hidden");pendingSwitchStaffId=null;clearSwitchPin();applyCurrentUser(staff);
}
$("closeStaffSwitch").onclick=closeStaffSwitch;
$("staffSwitchModal").addEventListener("click",e=>{if(e.target===$("staffSwitchModal"))closeStaffSwitch()});
document.querySelectorAll("[data-switch-pin]").forEach(b=>b.onclick=()=>{if($("switchPinInput").value.length<4){$("switchPinInput").value+=b.dataset.switchPin;renderSwitchPinDots();if($("switchPinInput").value.length===4)setTimeout(confirmStaffSwitch,100)}});
$("switchPinBack").onclick=()=>{$("switchPinInput").value=$("switchPinInput").value.slice(0,-1);renderSwitchPinDots()};

$("switchPinEnter").onclick=confirmStaffSwitch;

if($("staffAccountCardV29")){
  $("staffAccountCardV29").onclick=e=>{
    e.stopPropagation();
    toggleStaffAccountPopoverV29();
  };
}
if($("staffAccountListV29")){
  $("staffAccountListV29").onclick=e=>{
    const btn=e.target.closest("[data-staff-id-v29]");
    if(!btn)return;
    const id=Number(btn.dataset.staffIdV29);
    closeStaffAccountPopoverV29();
    openStaffSwitch(id);
  };
}
document.addEventListener("click",e=>{
  if(!e.target.closest(".staff-switch-v29"))closeStaffAccountPopoverV29();
});



function ensureStockAlertDismissV42(){
  const banner=$("stockAlertBanner") || document.querySelector(".stock-alert,.stock-warning,.low-stock-alert,.low-stock-banner,.inventory-alert,.inventory-warning");
  if(!banner || banner.querySelector(".stock-alert-close-v42")) return;
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="stock-alert-close-v42";
  btn.setAttribute("aria-label","ปิดแจ้งเตือนสต๊อก");
  btn.textContent="×";
  btn.onclick=(e)=>{
    e.stopPropagation();
    banner.classList.add("stock-alert-hidden-v42");
  };
  banner.appendChild(btn);
}

function renderAll(){bindStockBulkV48();$("shopTitle").textContent=state.settings.shopName;$("orderNo").textContent="#"+currentDailyOrderNumber();renderCategories();renderProducts();renderCart();renderOrders();renderDashboard();renderStock();renderPreorder();renderPreorderList();renderAdmin();renderHeldOrders();renderLowStockAlert();renderDayCloseSummary();updateQrDisplay();updatePreorderReminder()}
function getCategoryList(){
  const productCats=[...new Set(state.products.filter(p=>p.active).map(p=>p.category).filter(Boolean))];
  const custom=Array.isArray(state.settings.customCategories)?state.settings.customCategories:[];
  const all=[...new Set([...productCats,...custom])];
  let order=Array.isArray(state.settings.categoryOrder)?state.settings.categoryOrder.filter(x=>all.includes(x)):[];
  all.forEach(x=>{if(!order.includes(x))order.push(x)});
  state.settings.categoryOrder=order.slice();
  return order;
}
function renderCategories(){
  const cats=[...getCategoryList(),"ทั้งหมด"];
  if(currentCategory!=="ทั้งหมด"&&!cats.includes(currentCategory))currentCategory=cats[0]||"ทั้งหมด";
  $("categoryTabs").innerHTML=cats.map(c=>`<button class="${c===currentCategory?"active":""}" onclick="setCategory('${c.replaceAll("'","\\'")}')">${escapeHtml(c)}</button>`).join("")
}
window.setCategory=c=>{currentCategory=c;renderCategories();renderProducts()};
function productEmoji(c){return ""}
function filteredProducts(){const q=$("menuSearch").value.trim().toLowerCase();return state.products.filter(p=>p.active&&(currentCategory==="ทั้งหมด"||p.category===currentCategory)&&(!q||p.name.toLowerCase().includes(q)||String(p.price).includes(q)||money(p.price).toLowerCase().includes(q))).slice().sort((a,b)=>a.price-b.price||a.name.localeCompare(b.name,"th"))}
function renderProducts(){
  $("products").innerHTML=filteredProducts().map(p=>{
    const selected=cart.find(x=>x.id===p.id);
    return `<button class="product ${p.stock<=5?"low":""} ${p.stock<=0?"sold-out-v37":""} ${selected?"selected-product":""}" data-cat="${p.category}" onclick="toggleProductSelection(${p.id})">${selected?`<span class="product-qty-badge-v41" aria-label="เลือก ${selected.qty} ชิ้น">${selected.qty}</span>`:""}<strong>${p.name}</strong><span class="price">${money(p.price)}</span>${p.stock<=0?'<small>สินค้าหมด · แตะเพื่อดูสต๊อก</small>':""}</button>`
  }).join("")||'<p class="empty">ไม่พบเมนู</p>';
  renderSelectedItemsCount();
}
$("menuSearch").addEventListener("input",renderProducts);
$("menuSearchToggle").onclick=()=>{
  const wrap=$("menuSearchWrap");
  const opening=!wrap.classList.contains("open");
  wrap.classList.toggle("open");
  if(opening){setTimeout(()=>$("menuSearch").focus(),30)}
  else{$("menuSearch").value="";renderProducts()}
};
$("menuSearch").addEventListener("keydown",e=>{if(e.key==="Escape"){$("menuSearch").value="";$("menuSearchWrap").classList.remove("open");renderProducts();}});
document.addEventListener("click",e=>{
  const wrap=$("menuSearchWrap");
  if(wrap&&wrap.classList.contains("open")&&!wrap.contains(e.target)&&!$("menuSearch").value.trim())wrap.classList.remove("open");
});
function renderSelectedItemsCount(){
  const el=$("selectedItemsCount");if(!el)return;
  const totalQty=cart.reduce((s,x)=>s+Number(x.qty||0),0);
  el.textContent=`เลือกแล้ว ${totalQty} รายการ`;
  el.classList.toggle("has-items",totalQty>0);
}
window.toggleProductSelection=id=>{
  const el=currentTapElement();tapFeedback(el);playTapSound();
  const p=state.products.find(x=>x.id===id);
  if(!p)return;
  if(p.stock<=0){
    alert(`${p.name} สต๊อกหมด กำลังเปิดหน้าสต๊อก`);
    openPage("stock");
    return;
  }
  const row=cart.find(x=>x.id===id);
  if(row){
    const maxQty=Math.min(100,Number(p.stock)||0);
    if(row.qty>=maxQty){playQtySound(false);return}
    row.qty+=1;playQtySound(true);
  }else{
    cart.push({id:p.id,name:p.name,price:p.price,cost:p.cost,qty:1});playQtySound(true);
  }
  // V70: broadcast the order immediately on the very first product tap.
  // This makes the Raspberry Pi customer screen leave the welcome screen at once.
  customerDisplayCart();
  renderCart();renderProducts();
};
window.addItem=id=>toggleProductSelection(id);
window.changeQty=(id,d)=>{const el=currentTapElement();tapFeedback(el);playQtySound(d>0);const row=cart.find(x=>x.id===id);if(!row)return;const p=state.products.find(x=>x.id===id);row.qty+=d;if(row.qty<=0)cart=cart.filter(x=>x.id!==id);else{row.qty=Math.min(row.qty,p.stock,100)}renderCart();renderProducts()};
window.setCartQty=(id,value)=>{
  const row=cart.find(x=>x.id===id),p=state.products.find(x=>x.id===id);if(!row||!p)return;
  let qty=Math.min(100,Math.max(0,Number(String(value??"").replace(/\D/g,""))||0));
  if(qty<=0){cart=cart.filter(x=>x.id!==id)}
  else{qty=Math.min(qty,Number(p.stock)||0);row.qty=qty}
  renderCart();renderProducts();
};
window.openCartQtyKeypad=id=>{
  const row=cart.find(x=>x.id===id),p=state.products.find(x=>x.id===id);if(!row||!p)return;
  openNumericKeypad({title:`จำนวน ${row.name}`,hint:"สูงสุด 100",value:row.qty,min:0,max:Math.min(100,Number(p.stock)||100),maxDigits:3,onConfirm:n=>setCartQty(id,n)});
};
const subtotal=()=>cart.reduce((s,x)=>s+x.price*x.qty,0),discount=()=>Math.max(0,Number($("discountInput").value||0)),total=()=>Math.max(0,subtotal()-discount());
function renderCart(){$("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-item"><div class="cart-item-info"><b>${x.name}</b><div class="hint">${money(x.price)} × ${x.qty}</div></div><div class="cart-item-controls"><div class="qty"><button onclick="changeQty(${x.id},-1)">−</button><button type="button" class="qty-number-input qty-number-button" onclick="openCartQtyKeypad(${x.id})" aria-label="จำนวน ${escapeHtml(x.name)}">${x.qty}</button><button onclick="changeQty(${x.id},1)">+</button></div><button class="cart-trash-btn" onclick="removeCartItem(${x.id})" title="ลบรายการ" aria-label="ลบ ${escapeHtml(x.name)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button></div></div>`).join(""):'<p class="empty">ยังไม่มีสินค้า</p>';$("subtotal").textContent=money(subtotal());$("discountDisplay").textContent=money(discount());$("total").textContent=money(total());if($("payCashBtn"))$("payCashBtn").disabled=!cart.length;if($("payQrBtn"))$("payQrBtn").disabled=!cart.length;if($("holdOrderBtn"))$("holdOrderBtn").disabled=!cart.length;if($("heldOrderCount"))$("heldOrderCount").textContent=state.heldOrders?.length||0;renderSelectedItemsCount();customerDisplayCart()}

window.removeCartItem=id=>{cart=cart.filter(x=>x.id!==id);renderCart();renderProducts();playQtySound(false)};
$("discountInput").addEventListener("input",renderCart);$("clearBtn").onclick=()=>{if(cart.length&&confirm("ล้างออเดอร์นี้ใช่ไหม?")){cart=[];$("discountInput").value=0;renderCart();renderProducts()}};

function renderHeldOrders(){
  if(!Array.isArray(state.heldOrders))state.heldOrders=[];
  if($("heldOrderCount"))$("heldOrderCount").textContent=state.heldOrders.length;
  const box=$("heldOrdersList");if(!box)return;
  if(!state.heldOrders.length){box.innerHTML='<p class="empty">ยังไม่มีออเดอร์ที่พักไว้</p>';return}
  box.innerHTML=state.heldOrders.slice().sort((a,b)=>b.time.localeCompare(a.time)).map((o,i)=>`
    <div class="held-order-card">
      <div class="held-order-main">
        <div><small>${new Date(o.time).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}</small><b>พัก #${String(i+1).padStart(2,"0")}</b></div>
        <strong>${money(o.total)}</strong>
      </div>
      <p>${o.items.map(x=>`${escapeHtml(x.name)} ×${x.qty}`).join(" · ")}</p>
      <div class="held-order-actions">
        <button class="btn-secondary-orange" onclick="restoreHeldOrder(${o.id})">กลับมาขายต่อ</button>
        <button class="btn-danger" onclick="deleteHeldOrder(${o.id})">ลบ</button>
      </div>
    </div>`).join("");
}
$("holdOrderBtn").onclick=()=>{
  if(!cart.length)return;
  const held={id:Date.now(),time:nowIso(),items:cart.map(x=>({...x})),discount:discount(),subtotal:subtotal(),total:total(),staffName:currentUser?.name||""};
  state.heldOrders.unshift(held);saveState();
  cart=[];$("discountInput").value=0;renderCart();renderHeldOrders();playTapSound();
};
$("openHeldOrdersBtn").onclick=()=>{$("heldOrdersModal").classList.remove("hidden");renderHeldOrders()};
$("closeHeldOrdersBtn").onclick=()=>$("heldOrdersModal").classList.add("hidden");
$("heldOrdersModal").addEventListener("click",e=>{if(e.target===$("heldOrdersModal"))$("heldOrdersModal").classList.add("hidden")});
window.restoreHeldOrder=id=>{
  const o=state.heldOrders.find(x=>x.id===id);if(!o)return;
  if(cart.length&&!confirm("มีออเดอร์ปัจจุบันอยู่ ต้องการแทนที่ด้วยออเดอร์ที่พักไว้ใช่ไหม?"))return;
  const unavailable=o.items.find(r=>{const p=state.products.find(x=>x.id===r.id);return !p||p.stock<r.qty});
  if(unavailable){alert(`สต๊อก ${unavailable.name} ไม่พอสำหรับออเดอร์ที่พักไว้`);return}
  cart=o.items.map(x=>({...x}));$("discountInput").value=o.discount||0;
  state.heldOrders=state.heldOrders.filter(x=>x.id!==id);saveState();
  $("heldOrdersModal").classList.add("hidden");renderCart();renderHeldOrders();
};
window.deleteHeldOrder=id=>{
  if(!confirm("ลบออเดอร์ที่พักไว้นี้ใช่ไหม?"))return;
  state.heldOrders=state.heldOrders.filter(x=>x.id!==id);saveState();renderHeldOrders();renderCart();
};



function setCashInputValue(value){
  const input=$("cashReceived");if(!input)return;
  let clean=String(value??"").replace(/[^\d]/g,"").replace(/^0+(?=\d)/,"");
  if(clean.length>8)clean=clean.slice(0,8);
  input.value=clean;
  updateCashDisplays();
  input.dispatchEvent(new Event("input",{bubbles:true}));
}
function updateCashDisplays(){
  const n=Number($("cashReceived")?.value||0);
  if($("cashReceivedDisplay"))$("cashReceivedDisplay").textContent=money(n);
  if($("popupCashDisplay"))$("popupCashDisplay").textContent=money(n);
}
function addCashAmount(amount){
  const current=Number($("cashReceived")?.value||0);
  setCashInputValue(current+Number(amount||0));
  playTapSound();
}
function appendCashDigit(digit){
  const current=String($("cashReceived")?.value||"");
  if(current.length>=8)return;
  setCashInputValue(current+String(digit));playTapSound();
}
function backspaceCash(){setCashInputValue(String($("cashReceived")?.value||"").slice(0,-1));playQtySound(false)}
function clearCash(){setCashInputValue("");playQtySound(false)}
function openCashKeypad(){
  updateCashDisplays();
  const popup=$("cashKeypadPopup");if(!popup)return;
  if(popup.parentElement!==document.body)document.body.appendChild(popup);
  if($("exactCashBtn"))$("exactCashBtn").textContent="พอดี";
  popup.classList.remove("hidden");
  document.body.classList.add("cash-keypad-open");
}
function closeCashKeypad(){
  const popup=$("cashKeypadPopup");
  if(popup)popup.classList.add("hidden");
  document.body.classList.remove("cash-keypad-open");
}
function initPaymentKeypad(){
  $("cashReceivedButton").onclick=()=>{playTapSound();openCashKeypad()};
  document.querySelectorAll("[data-popup-key]").forEach(btn=>btn.onclick=()=>{tapFeedback(btn);appendCashDigit(btn.dataset.popupKey)});
  $("popupCashBack").onclick=()=>{tapFeedback($("popupCashBack"));backspaceCash()};
  $("popupCashClear").onclick=()=>{tapFeedback($("popupCashClear"));clearCash()};
  if($("exactCashBtn"))$("exactCashBtn").onclick=()=>{
    tapFeedback($("exactCashBtn"));
    setCashInputValue(String(Math.round(total())));
    updateCashDisplays();
    playTapSound();
  };
  $("closeCashKeypad").onclick=closeCashKeypad;
  $("confirmCashKeypad").onclick=()=>{playTapSound();closeCashKeypad()};
  $("cashKeypadPopup").addEventListener("click",e=>{if(e.target===$("cashKeypadPopup"))closeCashKeypad()});
  document.querySelectorAll("[data-bank]").forEach(btn=>btn.onclick=()=>{tapFeedback(btn);addCashAmount(Number(btn.dataset.bank))});
}


// ===== Dynamic PromptPay QR =====
function ppTlv(tag,value){
  value=String(value);
  return tag+String(value.length).padStart(2,"0")+value;
}
function ppCrc16(str){
  let crc=0xFFFF;
  for(let i=0;i<str.length;i++){
    crc ^= str.charCodeAt(i)<<8;
    for(let b=0;b<8;b++){
      crc=(crc&0x8000)?((crc<<1)^0x1021):(crc<<1);
      crc&=0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4,"0");
}
function normalizePromptPayTarget(raw){
  const n=String(raw||"").replace(/\D/g,"");
  if(n.length===10&&n.startsWith("0")) return {tag:"01",value:"0066"+n.slice(1)};
  if(n.length===13) return {tag:"02",value:n};
  if(n.length===15) return {tag:"03",value:n};
  throw new Error("PromptPay ID ต้องเป็นเบอร์มือถือ 10 หลัก, เลขบัตร/เลขภาษี 13 หลัก หรือ e-Wallet 15 หลัก");
}
function buildPromptPayPayload(target,amount){
  const t=normalizePromptPayTarget(target);
  const merchant=ppTlv("00","A000000677010111")+ppTlv(t.tag,t.value);
  let payload=ppTlv("00","01")+ppTlv("01","12")+ppTlv("29",merchant)+ppTlv("53","764");
  if(Number(amount)>0) payload+=ppTlv("54",Number(amount).toFixed(2));
  payload+=ppTlv("58","TH")+"6304";
  return payload+ppCrc16(payload);
}
async function createQrDataUrl(text,size=360){
  // Raspberry Pi local mode: generate QR from the local server, so the shop can keep working without Internet.
  if(location.protocol==="http:"){
    try{
      const url=`/api/qr?size=${encodeURIComponent(size)}&text=${encodeURIComponent(String(text))}`;
      const res=await fetch(url,{cache:"no-store"});
      if(res.ok){
        const data=await res.json();
        if(data?.dataUrl)return data.dataUrl;
      }
    }catch(e){}
  }
  // GitHub/normal browser fallback: use the QRCode library already included by the POS.
  return new Promise((resolve,reject)=>{
    if(!window.QRCode){reject(new Error("ไม่สามารถโหลดตัวสร้าง QR ได้ กรุณาเชื่อมต่ออินเทอร์เน็ตหรือเปิด POS ผ่าน Raspberry Pi"));return}
    const holder=document.createElement("div");
    holder.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0";
    document.body.appendChild(holder);
    try{
      new QRCode(holder,{text:String(text),width:size,height:size,correctLevel:QRCode.CorrectLevel.M});
      setTimeout(()=>{
        const canvas=holder.querySelector("canvas"),img=holder.querySelector("img");
        const src=canvas?canvas.toDataURL("image/png"):img?.src;
        holder.remove();
        src?resolve(src):reject(new Error("สร้าง QR ไม่สำเร็จ"));
      },60);
    }catch(e){holder.remove();reject(e)}
  });
}
async function renderPromptPayPaymentQr(){
  const id=String(state.settings.promptPayId||"").trim();
  if(!id){
    updateQrDisplay();
    if(!state.settings.qrImage) alert("กรุณาตั้ง PromptPay ID ที่หน้า จัดการร้าน ก่อนใช้งาน QR กำหนดยอด");
    return false;
  }
  try{
    const payload=buildPromptPayPayload(id,total());
    const src=await createQrDataUrl(payload,380);
    $("paymentQrImage").src=src;
    $("paymentQrImage").style.display="block";
    $("qrPlaceholder").style.display="none";
    $("qrFullscreenImage").src=src;
    $("qrFullscreenAmount").textContent=money(total());
    customerDisplayQr(src);
    return true;
  }catch(err){
    console.error(err);
    alert(err.message||"สร้าง PromptPay QR ไม่สำเร็จ");
    return false;
  }
}
async function renderAdminDynamicQr(){
  const el=$("adminDynamicQr");
  if(!el)return;
  el.innerHTML="";
  const id=String(state.settings.promptPayId||"").trim();
  if(!id){el.innerHTML="<span>ยังไม่ได้ตั้ง PromptPay</span>";return}
  try{
    const src=await createQrDataUrl(buildPromptPayPayload(id,1),160);
    const img=document.createElement("img");img.src=src;img.alt="PromptPay Preview";
    el.appendChild(img);
    const label=document.createElement("small");label.textContent="ตัวอย่าง QR (ยอดทดสอบ ฿1)";
    el.appendChild(label);
  }catch(e){el.innerHTML="<span>"+escapeHtml(e.message)+"</span>"}
}


async function printQueueTicket(){
  const orderNo=currentDailyOrderNumber();
  const now=new Date();
  const queueOrder={
    id:"queue-"+Date.now(),
    number:orderNo,
    time:now.toISOString(),
    items:cart.map(x=>({name:x.name,qty:Number(x.qty||0),price:Number(x.price||0)})),
    total:Number(total()||0),
    discount:Number(discount()||0),
    payment:"-",
    cashReceived:0,
    change:0,
    staffName:currentUser?.name||"-",
    receiptNote:""
  };
  if(!printerConfiguredV66()){
    alert("ยังไม่ได้ตั้งค่าเครื่องปริ้น Epson ในหน้าจัดการร้าน");
    return;
  }
  const btn=$("printQueueTicketBtn");
  const old=btn?.innerHTML;
  if(btn){btn.disabled=true;btn.innerHTML="<span>กำลังพิมพ์...</span>";}
  try{
    const ok=await directPrintQueueV66(queueOrder,{silent:false});
    if(ok){
      playQtySound?.(true);
      if(btn)btn.innerHTML="<span>✓ พิมพ์แล้ว #"+String(orderNo).padStart(3,"0")+"</span>";
      setTimeout(()=>{if(btn){btn.innerHTML=old;btn.disabled=false;}},1800);
      return;
    }
  }finally{
    if(btn && btn.disabled && btn.innerHTML.includes("กำลังพิมพ์")){btn.innerHTML=old;btn.disabled=false;}
  }
}
if($("printQueueTicketBtn"))$("printQueueTicketBtn").onclick=printQueueTicket;

function cancelCurrentOrderV41(){
  const num=currentDailyOrderNumber();
  const hasItems=cart.length>0;
  const message=hasItems?`ยกเลิกออเดอร์ #${num} และข้ามไปเลขถัดไปใช่ไหม?`:`ยกเลิกคิว #${num} และรันเลขออเดอร์ถัดไปใช่ไหม?`;
  if(!confirm(message))return;
  const sub=subtotal(),disc=discount(),net=total(),cost=cart.reduce((s,x)=>s+(x.cost||0)*x.qty,0);
  const cancelled={
    id:Date.now(),number:num,items:cart.map(x=>({...x})),subtotal:sub,discount:disc,total:net,cost,
    grossProfit:0,payment:"-",cashReceived:0,change:0,staffId:currentUser?.id||"",staffName:currentUser?.name||"-",
    status:"cancelled",time:nowIso(),orderDate:localDateKey(),cancelledAt:nowIso(),cancelReason:"ลูกค้ายกเลิกก่อนชำระ"
  };
  state.orders.unshift(cancelled);auditV65("ยกเลิกออเดอร์ปัจจุบัน",`#${String(cancelled.number).padStart(3,"0")}`,{orderId:cancelled.id});remoteSyncOrderV64(cancelled);
  advanceDailyOrderNumber();
  cart=[];$("discountInput").value=0;
  saveState();renderAll();
  playQtySound(false);
}
if($("cancelCurrentOrderBtn"))$("cancelCurrentOrderBtn").onclick=cancelCurrentOrderV41;


// Payment
function openPayment(initialMethod=null){
  if(!cart.length)return;
  $("paymentModal")?.querySelector(".payment-box")?.classList.toggle("method-selected-v34",!!initialMethod);
  $("modalTotal").textContent=money(total());
  $("payOrderNo").textContent="#"+currentDailyOrderNumber();
  selectedMethod=null;lastCashReceived=0;lastChange=0;
  document.querySelectorAll(".payment-methods button").forEach(b=>b.classList.remove("selected"));
  $("cashArea").classList.add("hidden");$("qrArea").classList.add("hidden");
  setCashInputValue("");$("confirmPay").disabled=true;
  $("paymentModal").classList.remove("hidden");updateCashPaymentStatus();
  if(initialMethod){
    const target=[...document.querySelectorAll(".payment-methods button")].find(b=>b.dataset.method===initialMethod);
    if(target)target.click();
  }
}
if($("payCashBtn"))$("payCashBtn").onclick=()=>openPayment("เงินสด");
if($("payQrBtn"))$("payQrBtn").onclick=()=>openPayment("QR");
$("closeModal").onclick=$("cancelPay").onclick=()=>{$("paymentModal").classList.add("hidden");closeCashKeypad();customerDisplayCart()};
document.querySelectorAll(".payment-methods button").forEach(b=>b.onclick=()=>{
  playTapSound();tapFeedback(b);selectedMethod=b.dataset.method;
  $("paymentModal")?.querySelector(".payment-box")?.classList.add("method-selected-v34");
  document.querySelectorAll(".payment-methods button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");
  $("cashArea").classList.toggle("hidden",selectedMethod!=="เงินสด");
  $("qrArea").classList.toggle("hidden",selectedMethod!=="QR");
  if(selectedMethod==="QR"){
    lastCashReceived=total();lastChange=0;$("qrAmount").textContent=money(total());
    $("qrFullscreenAmount").textContent=money(total());customerDisplayQr("");renderPromptPayPaymentQr().then(ok=>{$("confirmPay").disabled=!ok&&!state.settings.qrImage;customerDisplayQr()});
  }else{
    setCashInputValue("");$("confirmPay").disabled=true;updateCashPaymentStatus();customerDisplayCash();
  }
});
function updateCashPaymentStatus(){
  const box=$("cashPaymentStatus");if(!box)return;
  if($("cashExactInlineBtn"))$("cashExactInlineBtn").textContent="พอดี";
  const received=Math.max(0,Number($("cashReceived")?.value||0));
  const due=Math.max(0,total()-received);
  lastCashReceived=received;lastChange=Math.max(0,received-total());
  if(received<=0){
    box.className="cash-status-line zero";
    box.innerHTML=`<span>ยอดที่ต้องชำระ</span><strong>${money(total())}</strong>`;
  }else if(due>0){
    box.className="cash-status-line short";
    box.innerHTML=`<span>ขาดอีก</span><strong>${money(due)}</strong>`;
  }else{
    box.className="cash-status-line enough";
    if(lastChange>0){
      box.innerHTML=`<span>เงินทอน</span><strong>${money(lastChange)}</strong>`;
    }else{
      box.innerHTML=`<span>ชำระพอดี</span><strong>${money(total())}</strong>`;
    }
  }
  $("confirmPay").disabled=received<total();
  if(selectedMethod==="เงินสด")customerDisplayCash();
}
$("cashReceived").addEventListener("input",updateCashPaymentStatus);
if($("cashExactInlineBtn"))$("cashExactInlineBtn").onclick=()=>{
  setCashInputValue(String(Math.round(total())));updateCashPaymentStatus();playTapSound();
};
if($("cashClearInlineBtn"))$("cashClearInlineBtn").onclick=()=>{
  clearCash();updateCashPaymentStatus();playTapSound();
};

// V49: lock pinch zoom only while the payment modal is visible.
// Other pages remain normally zoomable.
function paymentZoomLockedV49(){
  const modal=$("paymentModal");
  return !!(modal && !modal.classList.contains("hidden"));
}
["gesturestart","gesturechange","gestureend"].forEach(type=>{
  document.addEventListener(type,e=>{
    if(paymentZoomLockedV49()) e.preventDefault();
  },{passive:false});
});
document.addEventListener("touchmove",e=>{
  if(paymentZoomLockedV49() && e.touches && e.touches.length>1) e.preventDefault();
},{passive:false});

$("qrZoomButton").onclick=()=>{
  const small=$("paymentQrImage");
  const src=small?.src||"";
  if(!src){alert("ยังไม่มี QR สำหรับออเดอร์นี้");return}
  $("qrFullscreenImage").src=src;
  $("qrFullscreenAmount").textContent=money(total());
  $("qrFullscreen").classList.remove("hidden");
};
$("closeQrFullscreen").onclick=()=>$("qrFullscreen").classList.add("hidden");
$("qrFullscreen").addEventListener("click",e=>{if(e.target===$("qrFullscreen"))$("qrFullscreen").classList.add("hidden")});


let successAutoTimerV46=null;
function resetOrderAfterSuccessV46(){
  $("successModal").classList.add("hidden");
  cart=[];
  $("discountInput").value=0;
  lastCashReceived=0;lastChange=0;
  renderCart();renderProducts();
  $("orderNo").textContent="#"+currentDailyOrderNumber();
}
function startSuccessCountdownV46(){
  if(successAutoTimerV46){clearInterval(successAutoTimerV46);successAutoTimerV46=null}
  let sec=5;
  const el=$("successCountdown");
  const paint=()=>{if(el)el.innerHTML=`เริ่มออเดอร์ใหม่อัตโนมัติใน <b>${sec}</b> วินาที`};
  paint();
  successAutoTimerV46=setInterval(()=>{
    sec--;
    if(sec<=0){clearInterval(successAutoTimerV46);successAutoTimerV46=null;resetOrderAfterSuccessV46();return}
    paint();
  },1000);
}

$("confirmPay").onclick=()=>{
  if(!selectedMethod)return;
  for(const row of cart){const p=state.products.find(x=>x.id===row.id);if(!p||p.stock<row.qty){alert("สต๊อกไม่พอ กรุณาตรวจสอบอีกครั้ง");return}}
  const num=currentDailyOrderNumber(),sub=subtotal(),disc=discount(),net=total(),cost=cart.reduce((s,x)=>s+(x.cost||0)*x.qty,0);
  const order={id:Date.now(),number:num,items:cart.map(x=>({...x})),subtotal:sub,discount:disc,total:net,cost,grossProfit:net-cost,payment:selectedMethod,cashReceived:selectedMethod==="เงินสด"?lastCashReceived:net,change:selectedMethod==="เงินสด"?lastChange:0,staffId:currentUser.id,staffName:currentUser.name,status:"paid",time:nowIso(),orderDate:localDateKey(),cancelledAt:null};
  cart.forEach(row=>{const p=state.products.find(x=>x.id===row.id);p.stock-=row.qty});
  state.orders.unshift(order);advanceDailyOrderNumber();lastOrder=order;saveState();auditV65("ขายสำเร็จ",`#${String(order.number).padStart(3,"0")} • ${money(order.total)} • ${order.payment}`,{orderId:order.id,amount:order.total});remoteSyncOrderV64(order);backupCloudV65(false);
  customerDisplaySuccess(order);
  $("paymentModal").classList.add("hidden");$("qrFullscreen").classList.add("hidden");
  $("successOrderNo").textContent=`ออเดอร์ #${num}`;$("successTotal").textContent=money(net);
  $("successChange").textContent=money(order.change);
  $("successReceived").textContent=money(order.cashReceived);
  $("successCashSummary").classList.toggle("hidden",selectedMethod==="QR");
  if($("receiptNoteInput"))$("receiptNoteInput").value="";
  $("successModal").classList.remove("hidden");startSuccessCountdownV46();playPaymentSuccessSound();announcePayment(order);autoPrintPaidOrderV66(order);renderAll();
};
$("newOrder").onclick=()=>{if(successAutoTimerV46){clearInterval(successAutoTimerV46);successAutoTimerV46=null}if(postPrintReturnTimerV71){clearTimeout(postPrintReturnTimerV71);postPrintReturnTimerV71=null}resetOrderAfterSuccessV46();};
$("printBtn").onclick=async()=>{
  if(!lastOrder)return;
  lastOrder.receiptNote=String($("receiptNoteInput")?.value||"").trim();
  const savedOrder=state.orders.find(o=>o.id===lastOrder.id);
  if(savedOrder)savedOrder.receiptNote=lastOrder.receiptNote;
  saveState();
  if(printerConfiguredV66()){
    const ok=await directPrintReceiptV66(lastOrder);
    if(ok)scheduleNewOrderAfterPrintV71();
  }else printOrder(lastOrder);
};


/* =====================================================================
   V66 — Raspberry Pi -> Epson Wi-Fi direct printing
   No browser print dialog. The browser sends the order to the local
   Raspberry Pi server, which talks to Epson ePOS-Print over the LAN.
   ===================================================================== */
function printerConfiguredV66(){
  return !!(state.settings.printerEnabled && String(state.settings.printerIp||"").trim());
}
async function printerApiV66(path,payload){
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),15000);
  try{
    const r=await fetch(path,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload||{}),
      signal:controller.signal
    });
    const j=await r.json().catch(()=>({}));
    if(!r.ok||j.ok===false)throw new Error(j.error||j.message||("HTTP "+r.status));
    return j;
  }finally{clearTimeout(timer)}
}
function printerPayloadV66(order){
  return {
    printer:{
      ip:String(state.settings.printerIp||"").trim(),
      deviceId:String(state.settings.printerDeviceId||"local_printer").trim()||"local_printer"
    },
    order:{
      id:order.id,
      number:order.number,
      time:order.time,
      items:(order.items||[]).map(i=>({name:i.name,qty:Number(i.qty||0),price:Number(i.price||0)})),
      total:Number(order.total||0),
      discount:Number(order.discount||0),
      payment:order.payment||"-",
      cashReceived:Number(order.cashReceived??order.total??0),
      change:Number(order.change||0),
      staffName:order.staffName||"-",
      receiptNote:order.receiptNote||""
    }
  };
}
async function directPrintReceiptV66(order,{silent=false,retry=true}={}){
  if(!printerConfiguredV66()){
    if(!silent)alert("ยังไม่ได้ตั้งค่าเครื่องปริ้น Epson ในหน้าจัดการร้าน");
    return false;
  }
  try{
    await printerApiV66("/api/print/receipt",printerPayloadV66(order));
    auditV65?.("พิมพ์ใบเสร็จ",`#${String(order.number).padStart(3,"0")} • Epson Wi‑Fi`,{orderId:order.id});
    return true;
  }catch(e){
    console.error("Receipt print failed",e);
    if(retry){
      await new Promise(r=>setTimeout(r,700));
      return directPrintReceiptV66(order,{silent,retry:false});
    }
    if(!silent)alert("พิมพ์ใบเสร็จไม่สำเร็จ: "+e.message);
    const s=$("printerStatusV66");if(s){s.textContent="พิมพ์ไม่สำเร็จ • "+e.message;s.className="printer-status-v66 error";}
    return false;
  }
}
async function directPrintQueueV66(order,{silent=false}={}){
  if(!printerConfiguredV66())return false;
  try{
    await printerApiV66("/api/print/queue",printerPayloadV66(order));
    auditV65?.("พิมพ์บัตรคิว",`#${String(order.number).padStart(3,"0")} • Epson Wi‑Fi`,{orderId:order.id});
    return true;
  }catch(e){
    console.error("Queue print failed",e);
    if(!silent)alert("พิมพ์บัตรคิวไม่สำเร็จ: "+e.message);
    return false;
  }
}
async function autoPrintPaidOrderV66(order){
  if(!printerConfiguredV66())return false;
  // sequential jobs stop receipts/queue tickets interleaving
  let receiptPrinted=false;
  if(state.settings.autoPrintReceipt)receiptPrinted=await directPrintReceiptV66(order,{silent:true});
  if(state.settings.autoPrintQueue)await directPrintQueueV66(order,{silent:true});
  // V71: when the receipt has really finished sending to Epson,
  // keep the success screen for 3 seconds, then start a clean new order.
  if(receiptPrinted)scheduleNewOrderAfterPrintV71();
  return receiptPrinted;
}

let postPrintReturnTimerV71=null;
function scheduleNewOrderAfterPrintV71(){
  if(successAutoTimerV46){clearInterval(successAutoTimerV46);successAutoTimerV46=null}
  if(postPrintReturnTimerV71){clearTimeout(postPrintReturnTimerV71);postPrintReturnTimerV71=null}
  let sec=3;
  const el=$("successCountdown");
  const paint=()=>{if(el)el.innerHTML=`พิมพ์ใบเสร็จแล้ว • กลับหน้าขายอัตโนมัติใน <b>${sec}</b> วินาที`};
  paint();
  const tick=()=>{
    sec--;
    if(sec<=0){
      postPrintReturnTimerV71=null;
      resetOrderAfterSuccessV46();
      return;
    }
    paint();
    postPrintReturnTimerV71=setTimeout(tick,1000);
  };
  postPrintReturnTimerV71=setTimeout(tick,1000);
}



/* V72 central direct-print helper for future POS documents */
async function directPrintDocumentV72(kind,data){
  if(!printerConfiguredV66()){alert("ยังไม่ได้ตั้งค่า Epson Wi‑Fi ในหน้าจัดการร้าน");return false}
  await printerApiV66("/api/print/"+kind,{
    printer:{ip:String(state.settings.printerIp||"").trim(),deviceId:String(state.settings.printerDeviceId||"local_printer").trim()||"local_printer"},
    ...data
  });
  return true;
}

/* =====================================================================
   V71 — Epson Wi-Fi preorder preparation ticket
   A large, shop-facing ticket for tomorrow/preorders.
   ===================================================================== */
function preorderPrinterPayloadV71(o){
  return {
    printer:{
      ip:String(state.settings.printerIp||"").trim(),
      deviceId:String(state.settings.printerDeviceId||"local_printer").trim()||"local_printer"
    },
    preorder:{
      id:o.id,
      customer:o.customer||"-",
      phone:o.phone||"",
      date:o.date||"",
      pickup:o.pickup||"-",
      note:o.note||"",
      staffName:o.staffName||"-",
      total:Number(o.total||0),
      items:(o.items||[]).map(i=>({name:i.name,qty:Number(i.qty||0),price:Number(i.price||0)}))
    }
  };
}
window.printPreorderV71=async id=>{
  const o=state.preorders.find(x=>Number(x.id)===Number(id));
  if(!o)return;
  if(!printerConfiguredV66()){
    alert("ยังไม่ได้ตั้งค่า Epson Wi‑Fi ในหน้าจัดการร้าน");
    return;
  }
  const btn=document.querySelector(`[data-print-preorder="${id}"]`);
  const old=btn?.innerHTML;
  if(btn){btn.disabled=true;btn.innerHTML="กำลังพิมพ์…"}
  try{
    await printerApiV66("/api/print/preorder",preorderPrinterPayloadV71(o));
    auditV65?.("พิมพ์ออเดอร์ล่วงหน้า",`${o.customer} • ${o.date} ${o.pickup} • ${money(o.total)}`,{preorderId:o.id});
    if(btn){btn.innerHTML="✓ พิมพ์แล้ว";setTimeout(()=>{btn.disabled=false;btn.innerHTML=old},1400)}
  }catch(e){
    if(btn){btn.disabled=false;btn.innerHTML=old}
    alert("พิมพ์รายการสั่งล่วงหน้าไม่สำเร็จ: "+e.message);
  }
};

// Orders + receipt
function orderItemsText(o){return o.items.map(i=>`${i.name} ×${i.qty}`).join(", ")}
function renderOrders(){
  const q=$("orderSearch").value.trim().toLowerCase();
  let list=state.orders.filter(o=>(o.number+" "+orderItemsText(o)+" "+(o.receiptNote||"")+" "+(o.staffName||"")).toLowerCase().includes(q));
  if(orderStatusFilter==="today"){
    const today=localDateKey();
    list=list.filter(o=>localDateKey(new Date(o.time))===today);
  }else if(orderStatusFilter!=="all"){
    list=list.filter(o=>o.status===orderStatusFilter);
  }
  if(!list.length){$("ordersList").innerHTML='<p class="empty">ยังไม่มีออเดอร์ที่ตรงกับตัวกรอง</p>';return}
  $("ordersList").innerHTML=`<table class="orders-clean-table"><tr><th>เลข</th><th>วันที่</th><th>เวลา</th><th>รายการ</th><th>ยอด</th><th>ชำระ</th><th>พนักงาน</th><th>สถานะ</th><th>จัดการ</th></tr>${list.map(o=>{const d=new Date(o.time);return `<tr><td><b>#${String(o.number).padStart(3,"0")}</b></td><td class="order-date">${d.toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"})}</td><td>${d.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}</td><td>${orderItemsText(o)}</td><td class="order-amount">${money(o.total)}</td><td>${o.payment}</td><td>${o.staffName||"-"}</td><td><span class="status ${o.status}">${o.status==="paid"?"สำเร็จแล้ว":"ยกเลิก"}</span></td><td><div class="order-actions"><button class="btn-secondary-orange compact" onclick="printOrderById(${o.id})">พิมพ์ซ้ำ</button>${o.status==="paid"&&currentUser?.role==="owner"?`<button class="delete-icon-btn" title="ยกเลิกออเดอร์" aria-label="ยกเลิกออเดอร์" onclick="cancelOrder(${o.id})">×</button>`:""}</div></td></tr>`}).join("")}</table>`;
}
document.querySelectorAll(".order-filter").forEach(btn=>btn.onclick=()=>{
  orderStatusFilter=btn.dataset.orderFilter;
  document.querySelectorAll(".order-filter").forEach(x=>x.classList.toggle("active",x===btn));
  renderOrders();
});
$("orderSearch").addEventListener("input",renderOrders);window.cancelOrder=id=>{const o=state.orders.find(x=>x.id===id);if(!o||o.status!=="paid")return;if(!confirm(`ยกเลิกออเดอร์ #${o.number} และคืนสต๊อกใช่ไหม?`))return;o.status="cancelled";o.cancelledAt=nowIso();o.items.forEach(row=>{const p=state.products.find(x=>x.id===row.id);if(p)p.stock+=row.qty});saveState();auditV65("ยกเลิกออเดอร์หลังชำระ",`#${String(o.number).padStart(3,"0")} • ${money(o.total)}`,{orderId:o.id,amount:o.total});remoteSyncOrderV64(o);renderAll()};window.printOrderById=async id=>{
  const o=state.orders.find(x=>x.id===id);
  if(!o)return;
  if(printerConfiguredV66())await directPrintReceiptV66(o);
  else printOrder(o,true);
};
function printOrder(o,isCopy=false){
  if(!o)return;
  const note=String(o.receiptNote||"").trim();
  const receiptNumber=String(o.number).padStart(3,"0");
  const received=o.payment==="เงินสด"?Number(o.cashReceived??o.total):Number(o.total);
  const change=o.payment==="เงินสด"?Number(o.change??0):0;
  const itemRows=o.items.map(i=>`
    <tr>
      <td class="r-name">${escapeHtml(i.name)}</td>
      <td class="r-qty">${Number(i.qty||0)} × ${money(i.price)}</td>
      <td class="r-amount">${money(i.price*i.qty)}</td>
    </tr>`).join("");
  const discountRow=Number(o.discount||0)>0?`<div class="sum-row"><span>ส่วนลด</span><b>- ${money(o.discount)}</b></div>`:"";
  const cashRows=o.payment==="เงินสด"?`
    <div class="sum-row"><span>ลูกค้าจ่าย</span><b>${money(received)}</b></div>
    <div class="sum-row"><span>เงินทอน</span><b>${money(change)}</b></div>`:"";
  const noteBlock=note?`<div class="receipt-note"><b>${escapeHtml(note)}</b></div>`:"";
  const w=window.open("",`receipt-${receiptNumber}`,"width=520,height=820");
  if(!w){alert("กรุณาอนุญาต Pop-up เพื่อพิมพ์ใบเสร็จ");return}
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Receipt #${receiptNumber}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
  @page{size:80mm auto;margin:3mm 4mm 4mm}
  *{box-sizing:border-box}
  body{margin:0;background:#f5f5f5;color:#000;font-family:"Sarabun","TH Sarabun New","Noto Sans Thai",Tahoma,sans-serif}
  .toolbar{position:sticky;top:0;z-index:5;display:flex;gap:8px;padding:10px;background:#fff;border-bottom:1px solid #ddd}
  .toolbar button{flex:1;min-height:44px;border-radius:8px;font:inherit;font-weight:700}
  .toolbar .back-btn{border:1px solid #F2B36F;background:#FFF1DF;color:#D96F0B}
  .toolbar .print-btn{border:1px solid #E67A18;background:#F28C28;color:#fff}
  .receipt-wrap{width:80mm;max-width:100%;margin:14px auto;background:#fff;border:1px solid #ddd}
  .receipt{width:72mm;margin:0 auto;padding:4mm 2mm;font-size:12.5px;line-height:1.35;color:#000;overflow:hidden}
  .brand{text-align:center;padding-bottom:10px;border-bottom:1px solid #111}.brand-v61{padding:2px 0 10px}.shop-contact-v61{margin-top:3px;display:flex;flex-direction:column;gap:1px;align-items:center}
  .receipt-logo{display:block;width:54mm;max-width:100%;height:auto;max-height:24mm;object-fit:contain;object-position:center;margin:0 auto 2mm;transform:translateX(2.6mm);filter:grayscale(1) contrast(1.25)}
  .shop{font-size:20px;font-weight:700;display:none}
  .shop-address,.shop-phone{font-size:12px;margin-top:0;line-height:1.35}
  .copy-mark{display:inline-block;margin-top:6px;padding:2px 7px;border:1px solid #000;border-radius:999px;font-size:10px;font-weight:600}
  .meta-card{display:grid;grid-template-columns:1fr 1fr;gap:5px 12px;padding:9px 0;border-bottom:1px dashed #777;margin-bottom:8px}
  .meta-card div{font-size:11px;color:#222}.meta-card b{display:block;color:#000;font-size:12px;margin-top:1px}
  .section-title{font-size:11px;font-weight:600;margin:8px 0 3px}
  table{width:100%;border-collapse:collapse}
  td{padding:5px 0;border-bottom:1px dotted #aaa;vertical-align:top;color:#000}
  .r-name{font-weight:500;padding-right:7px}.r-qty{width:92px;font-size:11px}.r-amount{width:70px;text-align:right;font-weight:600}
  .summary{margin-top:7px;padding-top:2px}
  .sum-row{display:flex;justify-content:space-between;gap:10px;padding:3px 0;color:#000}
  .grand-total{display:flex;justify-content:space-between;align-items:flex-end;margin-top:6px;padding-top:7px;border-top:1.5px solid #000}
  .grand-total span{font-size:14px;font-weight:600}.grand-total b{font-size:20px;color:#000}
  .status-line{display:flex;justify-content:space-between;margin-top:6px;padding:5px 0;border-top:1px dotted #999;border-bottom:1px dotted #999;font-size:11px;font-weight:600;color:#000}
  .receipt-note{margin-top:8px;padding:7px 0;border-top:1px dashed #777;border-bottom:1px dashed #777;color:#000}
  .receipt-note span{display:block;font-size:10px}.receipt-note b{display:block;margin-top:2px;font-weight:500}
  .thanks{text-align:center;margin-top:12px;font-size:11px;color:#000}
  @media print{html,body{width:80mm;margin:0!important;padding:0!important;background:#fff}.toolbar{display:none!important}.receipt-wrap{width:80mm!important;max-width:80mm!important;margin:0!important;border:0}.receipt{width:72mm!important;margin:0 auto!important;padding:2mm 0 3mm!important}.brand{text-align:center;width:100%}.receipt-logo{display:block!important;width:52mm!important;max-width:52mm!important;height:auto!important;max-height:23mm!important;object-fit:contain!important;object-position:center!important;margin:0 auto 2mm!important;transform:translateX(2.6mm)!important;filter:grayscale(1) contrast(1.35)}}
  </style></head><body>
  <div class="toolbar"><button class="back-btn" id="backToOrders">กลับ</button><button class="print-btn" id="printAgain">พิมพ์ใบเสร็จ</button></div>
  <div class="receipt-wrap"><div class="receipt">
    <div class="brand brand-v61">
      <img class="receipt-logo receipt-logo-v61" src="${new URL('assets/thipkasorn-logo.png', location.href).href}" alt="โลโก้ร้านทิพย์เกษรเมี่ยงปลาเผา">
      <div class="shop-contact-v61">
        <div class="shop-address">บ้านดุง อุดรธานี 41190</div>
        <div class="shop-phone">โทรศัพท์ 0897109954</div>
      </div>
      ${isCopy?'<div class="copy-mark">สำเนาใบเสร็จ</div>':""}
    </div>
    <div class="meta-card">
      <div>เลขออเดอร์<b>#${receiptNumber}</b></div>
      <div>การชำระเงิน<b>${escapeHtml(o.payment||"-")}</b></div>
      <div>พนักงาน<b>${escapeHtml(o.staffName||"-")}</b></div>
      <div>วันที่/เวลา<b>${new Date(o.time).toLocaleString("th-TH")}</b></div>
    </div>
    <div class="section-title">รายการสินค้า</div>
    <table><tbody>${itemRows}</tbody></table>
    <div class="summary">
      ${discountRow}
      ${cashRows}
      <div class="grand-total"><span>รวมสุทธิ</span><b>${money(o.total)}</b></div>
      <div class="status-line"><span>สถานะ</span><span>ชำระเงินแล้ว</span></div>
    </div>
    ${noteBlock}
    <div class="thanks">ขอบคุณที่อุดหนุนค่ะ</div>
  </div></div>
  <script>
  document.getElementById("backToOrders").onclick=function(){try{if(window.opener&&!window.opener.closed){const t=window.opener.document.querySelector('.tab[data-page="orders"]');if(t)t.click();window.opener.focus();window.close();return}}catch(e){}history.back()};
  document.getElementById("printAgain").onclick=function(){window.print()};
  window.onload=function(){const go=()=>setTimeout(function(){window.print()},120);if(document.fonts&&document.fonts.ready){document.fonts.ready.then(go).catch(go)}else{go()}};
  <\/script></body></html>`);
  w.document.close();
}

// Dashboard / realtime 1 second
function paidOrders(){return state.orders.filter(o=>o.status==="paid")}
function ordersForRange(){const valid=paidOrders();if(dashboardRange==="all")return valid;const now=new Date();if(dashboardRange==="today")return valid.filter(o=>new Date(o.time).toDateString()===now.toDateString());const days=Number(dashboardRange),min=new Date(now.getTime()-days*86400000);return valid.filter(o=>new Date(o.time)>=min)}
function secondSeries(){const now=new Date(),labels=[],values=[],orders=paidOrders();for(let off=59;off>=0;off--){const t=new Date(now.getTime()-off*1000);t.setMilliseconds(0);const next=new Date(t.getTime()+1000);labels.push(t.toLocaleTimeString("th-TH",{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"}));values.push(orders.filter(o=>{const d=new Date(o.time);return d>=t&&d<next}).length)}return{labels,values}}
function selectedSalesHistoryKeyV53(){
  const select=$("salesHistoryDate");
  return select?.value || localDateKey();
}
function dateFromLocalKeyV53(key){
  const [y,m,d]=String(key||localDateKey()).split("-").map(Number);
  const out=new Date(y||new Date().getFullYear(),Math.max(0,(m||1)-1),d||1,12,0,0,0);
  return out;
}
function selectedDateHourlyV53(key=selectedSalesHistoryKeyV53()){
  const labels=[],values=[],sales=[];
  for(let h=6;h<=22;h++){
    labels.push(String(h).padStart(2,"0")+":00");
    const orders=paidOrders().filter(o=>{
      const d=new Date(o.time);
      return localDateKey(d)===key && d.getHours()===h;
    });
    values.push(orders.length);
    sales.push(orders.reduce((sum,o)=>sum+Number(o.total||0),0));
  }
  return {labels,values,sales,key};
}
function dailySeriesToSelectedV53(days,key=selectedSalesHistoryKeyV53()){
  const labels=[],values=[],sales=[],orders=paidOrders();
  const end=dateFromLocalKeyV53(key);
  end.setHours(0,0,0,0);
  for(let off=days-1;off>=0;off--){
    const d=new Date(end);
    d.setDate(end.getDate()-off);
    const dayKey=localDateKey(d);
    const os=orders.filter(o=>localDateKey(new Date(o.time))===dayKey);
    labels.push(d.toLocaleDateString("th-TH",{day:"2-digit",month:"2-digit"}));
    values.push(os.length);
    sales.push(os.reduce((sum,o)=>sum+Number(o.total||0),0));
  }
  return {labels,values,sales,key};
}
// Kept for compatibility with older calls.
function todayHourly(){return selectedDateHourlyV53()}
function dailySeries(days){return dailySeriesToSelectedV53(days)}
function drawLineChart(canvasId,labels,values,height=230,showEvery=1){
  const canvas=$(canvasId);if(!canvas||!canvas.parentElement)return;
  const parent=canvas.parentElement;parent.classList.add("chart-interactive-v46");parent.classList.remove("chart-scroll-v46");
  const width=Math.max(280,parent.clientWidth-30),dpr=window.devicePixelRatio||1;
  canvas.width=width*dpr;canvas.height=height*dpr;canvas.style.width=width+"px";canvas.style.height=height+"px";
  const ctx=canvas.getContext("2d");ctx.scale(dpr,dpr);ctx.clearRect(0,0,width,height);
  const pad={l:48,r:18,t:20,b:38},W=width-pad.l-pad.r,H=height-pad.t-pad.b;
  const maxVal=Math.max(...values,1),top=Math.max(4,Math.ceil(maxVal/4)*4);
  ctx.font="10px Anuphan,Sarabun,-apple-system,Segoe UI,sans-serif";ctx.strokeStyle="#eee4d8";ctx.fillStyle="#8a735e";ctx.lineWidth=1;
  for(let k=0;k<=4;k++){const v=Math.round(top*k/4),y=pad.t+H-H*k/4;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(width-pad.r,y);ctx.stroke();ctx.textAlign="right";ctx.fillText(String(v),pad.l-8,y+3)}
  ctx.save();ctx.translate(13,pad.t+H/2);ctx.rotate(-Math.PI/2);ctx.textAlign="center";ctx.fillStyle="#6f665f";ctx.font="11px Anuphan,Sarabun,sans-serif";ctx.fillText("จำนวนออเดอร์",0,0);ctx.restore();
  const n=Math.max(values.length,1),step=n>1?W/(n-1):W;
  const pts=values.map((v,i)=>({x:n>1?pad.l+i*step:pad.l+W/2,y:pad.t+H-H*(Number(v||0)/top),value:Number(v||0),label:labels[i]}));
  if(pts.length){ctx.strokeStyle="#E76613";ctx.lineWidth=2.5;ctx.lineJoin="round";ctx.lineCap="round";ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();pts.forEach((p,i)=>{ctx.fillStyle="#fff";ctx.strokeStyle="#E76613";ctx.lineWidth=2;ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fill();ctx.stroke();if(i%showEvery===0||i===pts.length-1){ctx.fillStyle="#8a735e";ctx.textAlign="center";ctx.fillText(labels[i],p.x,pad.t+H+18)}})}
  canvas.__chartPointsV46=pts;
  let tip=parent.querySelector('.chart-tooltip-v46');if(!tip){tip=document.createElement('div');tip.className='chart-tooltip-v46 hidden';parent.appendChild(tip)}
  if(!canvas.__tooltipBoundV46){const show=(cx)=>{const rect=canvas.getBoundingClientRect(),x=cx-rect.left,pts=canvas.__chartPointsV46||[];if(!pts.length)return;let nearest=pts[0];for(const p of pts)if(Math.abs(p.x-x)<Math.abs(nearest.x-x))nearest=p;tip.innerHTML=`<b>${nearest.label}</b><span>${nearest.value} ออเดอร์</span>`;tip.classList.remove('hidden');tip.style.left=Math.min(Math.max(nearest.x,70),rect.width-70)+'px';tip.style.top=Math.max(8,nearest.y-8)+'px'};canvas.addEventListener('mousemove',e=>show(e.clientX));canvas.addEventListener('mouseleave',()=>tip.classList.add('hidden'));canvas.addEventListener('touchstart',e=>{const t=e.touches?.[0];if(t)show(t.clientX)},{passive:true});canvas.__tooltipBoundV46=true}
}

function todayHourlyOrderCountV42(){
  const labels=[],values=[];
  for(let h=8;h<=22;h++){
    labels.push(String(h).padStart(2,"0")+":00");
    values.push(0);
  }
  const now=new Date();
  const todayKey=localDateKey(now);
  state.orders
    .filter(o=>o.status==="paid" && localDateKey(new Date(o.time))===todayKey)
    .forEach(o=>{
      const hr=new Date(o.time).getHours();
      if(hr>=8&&hr<=22) values[hr-8]+=1;
    });
  return {labels,values};
}

function dailyOrderCountSeriesV42(days){
  const labels=[],values=[];
  for(let i=days-1;i>=0;i--){
    const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-i);
    const key=localDateKey(d);
    labels.push(d.toLocaleDateString("th-TH",{day:"2-digit",month:"2-digit"}));
    values.push(state.orders.filter(o=>o.status==="paid" && localDateKey(new Date(o.time))===key).length);
  }
  return {labels,values};
}

function renderTodayChartInsightV41(series){
  const box=$("todayChartInsight");if(!box||!series?.values?.length)return;
  const vals=series.values.map(Number),max=Math.max(...vals),positive=vals.filter(v=>v>0),min=positive.length?Math.min(...positive):0;
  const peakIndex=vals.indexOf(max),quietIndex=min>0?vals.indexOf(min):vals.findIndex(v=>v===0);
  box.innerHTML=`<div><small>ออเดอร์เยอะสุด</small><b>${series.labels[peakIndex]||"-"}</b><strong>${max} ออเดอร์</strong></div><div><small>ช่วงเงียบ</small><b>${quietIndex>=0?series.labels[quietIndex]:"-"}</b><strong>${quietIndex>=0?vals[quietIndex]:0} ออเดอร์</strong></div><span>แตะหรือชี้จุดกราฟเพื่อดูจำนวนออเดอร์</span>`;
}

function renderSalesHistoryStats(){
  const select=$("salesHistoryDate"),box=$("salesHistorySummary");if(!select||!box)return;
  const keys=[...new Set([localDateKey(),...state.orders.map(o=>localDateKey(new Date(o.time)))])].sort().reverse();
  const previous=select.value;
  select.innerHTML=keys.map(k=>`<option value="${k}">${new Date(k+"T12:00:00").toLocaleDateString("th-TH",{day:"2-digit",month:"long",year:"numeric"})}</option>`).join("");
  select.value=keys.includes(previous)?previous:keys[0];
  const key=select.value,all=state.orders.filter(o=>localDateKey(new Date(o.time))===key),paid=all.filter(o=>o.status==="paid"),cancelled=all.filter(o=>o.status==="cancelled"),sales=paid.reduce((s,o)=>s+Number(o.total||0),0);
  box.innerHTML=`<div><span>ออเดอร์สำเร็จ</span><b>${paid.length} ออเดอร์</b></div><div><span>ยอดขาย</span><b>${money(sales)}</b></div><div><span>ยกเลิก</span><b>${cancelled.length} ออเดอร์</b></div><div><span>เลขออเดอร์ล่าสุด</span><b>${all.length?"#"+String(Math.max(...all.map(o=>Number(o.number)||0))).padStart(3,"0"):"-"}</b></div>`;
}
function productSalesBreakdownV74(os){
  const catalog=new Map((state.products||[]).map(p=>[`${p.name}@@${Number(p.price||0)}`,p]));
  const categories=new Map(); let totalQty=0;
  (os||[]).forEach(o=>(o.items||[]).forEach(i=>{
    const qty=Number(i.qty||0), price=Number(i.price||0);
    const product=catalog.get(`${i.name}@@${price}`) || (state.products||[]).find(p=>p.name===i.name);
    const category=product?.category||"อื่น ๆ";
    if(!categories.has(category))categories.set(category,new Map());
    const key=`${i.name}@@${price}`;
    const m=categories.get(category), old=m.get(key)||{name:i.name,price,qty:0};
    old.qty+=qty;m.set(key,old);totalQty+=qty;
  }));
  return {categories,totalQty};
}
function renderAllProductSalesV74(os,emptyText="ยังไม่มีข้อมูลวันที่เลือก"){
  const host=$("topProducts");if(!host)return;
  const {categories,totalQty}=productSalesBreakdownV74(os);
  if(!totalQty){host.innerHTML=`<p class="empty">${emptyText}</p>`;return}
  const groups=[...categories.entries()].map(([category,map])=>({category,items:[...map.values()].sort((a,b)=>b.qty-a.qty),qty:[...map.values()].reduce((n,x)=>n+x.qty,0)})).sort((a,b)=>b.qty-a.qty);
  host.innerHTML=`<div class="product-sales-v74 product-sales-v76"><div class="product-sales-total-v74"><span>รวมสินค้าขายทั้งหมด</span><b>${totalQty.toLocaleString("th-TH")} ชิ้น</b></div><small class="product-sales-hint-v76">กดหมวดหมู่เพื่อดูรายละเอียดสินค้า</small>${groups.map(g=>`<details class="product-category-v74 product-category-v76"><summary class="product-category-head-v74"><b>${escapeHtml(g.category)}</b><strong>${g.qty.toLocaleString("th-TH")} ชิ้น</strong></summary><div class="product-category-items-v76">${g.items.map((x,i)=>`<div class="top-line product-row-v74"><span>${i+1}. ${escapeHtml(x.name)} <small>${money(x.price)}</small></span><b>${x.qty.toLocaleString("th-TH")} ชิ้น</b></div>`).join("")}</div></details>`).join("")}</div>`;
}
function renderSelectedDateDashboardDetailsV53(){
  const key=selectedSalesHistoryKeyV53();
  const os=paidOrders().filter(o=>localDateKey(new Date(o.time))===key);
  const cashOrders=os.filter(o=>o.payment==="เงินสด"),qrOrders=os.filter(o=>o.payment==="QR");
  const cash=cashOrders.reduce((s,o)=>s+Number(o.total||0),0),qr=qrOrders.reduce((s,o)=>s+Number(o.total||0),0);
  if($("paymentSummary"))$("paymentSummary").innerHTML=`<div class="pay-line"><span class="pay-label">เงินสด</span><b>${money(cash)} · ${cashOrders.length} ครั้ง</b></div><div class="pay-line"><span class="pay-label">QR</span><b>${money(qr)} · ${qrOrders.length} ครั้ง</b></div>`;
  renderAllProductSalesV74(os);
}

function renderDashboard(){
  if(currentUser?.role!=="owner"){return}
  const os=todayPaidOrders();
  const cashOrders=os.filter(o=>o.payment==="เงินสด"),qrOrders=os.filter(o=>o.payment==="QR");
  const cash=cashOrders.reduce((s,o)=>s+Number(o.total||0),0),qr=qrOrders.reduce((s,o)=>s+Number(o.total||0),0);
  $("paymentSummary").innerHTML=`<div class="pay-line"><span class="pay-label"><svg class="pay-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h.01M18 15h.01"/></svg><span>เงินสด</span></span><b>${money(cash)} · ${cashOrders.length} ครั้ง</b></div><div class="pay-line"><span class="pay-label"><svg class="pay-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2v2h-2zM19 14h1v3h-3v3h-3v-2h2v-2h3z"/></svg><span>QR</span></span><b>${money(qr)} · ${qrOrders.length} ครั้ง</b></div>`;
  renderAllProductSalesV74(os,"ยังไม่มีข้อมูลวันนี้");
  renderDayCloseSummary();renderSalesHistoryStats();renderSelectedDateDashboardDetailsV53();renderSalesCharts()
}
function todayPaidOrders(){
  const now=new Date();return state.orders.filter(o=>o.status==="paid"&&new Date(o.time).toDateString()===now.toDateString());
}
function todayCancelledOrders(){
  const now=new Date();return state.orders.filter(o=>o.status==="cancelled"&&new Date(o.time).toDateString()===now.toDateString());
}
function getDayCloseData(){
  const os=todayPaidOrders(),cancelled=todayCancelledOrders();
  const sales=os.reduce((s,o)=>s+Number(o.total||0),0);
  const cash=os.filter(o=>o.payment==="เงินสด").reduce((s,o)=>s+Number(o.total||0),0);
  const qr=os.filter(o=>o.payment==="QR").reduce((s,o)=>s+Number(o.total||0),0);
  const discounts=os.reduce((s,o)=>s+Number(o.discount||0),0);
  const cost=os.reduce((s,o)=>s+Number(o.cost||0),0);
  return {os,cancelled,sales,cash,qr,discounts,cost,profit:sales-cost};
}
function renderDayCloseSummary(){
  const box=$("dayCloseSummary");if(!box)return;
  const d=getDayCloseData();
  const cells=[["ยอดขายรวม",money(d.sales)],["เงินสด",money(d.cash)],["QR",money(d.qr)],["ออเดอร์สำเร็จ",d.os.length+" ออเดอร์"],["ยกเลิก",d.cancelled.length+" ออเดอร์"],["ส่วนลด",money(d.discounts)],["ต้นทุนโดยประมาณ",money(d.cost)],["กำไรขั้นต้น",money(d.profit)]];
  box.innerHTML=cells.map(x=>`<div><span>${x[0]}</span><b>${x[1]}</b></div>`).join("");
}
async function printDayClose(){
  const d=getDayCloseData();
  const now=new Date();
  const date=now.toLocaleDateString("th-TH",{day:"2-digit",month:"long",year:"numeric"});
  const time=now.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"});
  if(!printerConfiguredV66()){
    alert("ยังไม่ได้ตั้งค่า Epson Wi‑Fi ในหน้าจัดการร้าน");
    return;
  }
  const btn=$("printDayCloseBtn"),old=btn?.innerHTML;
  if(btn){btn.disabled=true;btn.innerHTML="กำลังพิมพ์…"}
  try{
    await printerApiV66("/api/print/day-close",{
      printer:{
        ip:String(state.settings.printerIp||"").trim(),
        deviceId:String(state.settings.printerDeviceId||"local_printer").trim()||"local_printer"
      },
      close:{
        shopName:state.settings.shopName||"ร้านทิพย์เกษรเมี่ยงปลาเผา",
        date,time,
        sales:d.sales,cash:d.cash,qr:d.qr,
        paidOrders:d.os.length,cancelledOrders:d.cancelled.length,
        discounts:d.discounts,cost:d.cost,profit:d.profit,
        staffName:currentUser?.name||"-"
      }
    });
    auditV65?.("พิมพ์สรุปปิดยอด",`${date} • ${money(d.sales)}`,{amount:d.sales});
    if(btn){btn.innerHTML="✓ พิมพ์แล้ว";setTimeout(()=>{btn.disabled=false;btn.innerHTML=old},1400)}
  }catch(e){
    if(btn){btn.disabled=false;btn.innerHTML=old}
    alert("พิมพ์สรุปปิดยอดไม่สำเร็จ: "+e.message);
  }
}
$("printDayCloseBtn").onclick=printDayClose;
$("salesHistoryDate").onchange=()=>{
  renderSalesHistoryStats();
  renderSelectedDateDashboardDetailsV53();
  renderSalesCharts();
};

setInterval(()=>{if(currentUser&&!$("dashboard").classList.contains("hidden")){renderSalesCharts();updateClock()}},1000);
window.addEventListener("resize",()=>{if(currentUser&&!$("dashboard").classList.contains("hidden"))renderSalesCharts()});

// Stock
function lowStockProducts(){return state.products.filter(p=>p.active&&Number(p.stock)>0&&Number(p.stock)<=5).sort((a,b)=>a.stock-b.stock)}
let dismissedLowStockSignatureV43="";
function lowStockSignatureV43(lows){return lows.map(p=>String(p.id)).sort().join("|")}
function renderLowStockAlert(){
  const lows=lowStockProducts(),box=$("lowStockBanner");
  if(!box)return;
  if(!lows.length){
    box.classList.add("hidden");
    dismissedLowStockSignatureV43="";
    return;
  }
  const signature=lowStockSignatureV43(lows);
  if(signature===dismissedLowStockSignatureV43){box.classList.add("hidden");return}
  box.classList.remove("hidden");
  $("lowStockText").textContent=lows.slice(0,4).map(p=>`${p.name} ${p.stock} ${p.unit}`).join(" · ")+(lows.length>4?` · อีก ${lows.length-4} รายการ`:"");
}
$("openLowStockBtn").onclick=()=>openPage("stock");
if($("closeLowStockBtn"))$("closeLowStockBtn").onclick=()=>{
  dismissedLowStockSignatureV43=lowStockSignatureV43(lowStockProducts());
  $("lowStockBanner")?.classList.add("hidden");
};
let selectedStockIdsV48=new Set();
let stockBulkAmountV48=1;

function updateStockBulkUiV48(){
  const activeIds=state.products.filter(p=>p.active).map(p=>p.id);
  selectedStockIdsV48=new Set([...selectedStockIdsV48].filter(id=>activeIds.includes(id)));
  const count=selectedStockIdsV48.size;
  const countEl=$("stockSelectedCountV48");
  const allEl=$("stockSelectAllV48");
  const amountEl=$("stockBulkAmountV48");
  const applyEl=$("stockBulkApplyV48");
  const subtractEl=$("stockBulkSubtractV52");

  if(countEl)countEl.textContent=`เลือก ${count} รายการ`;
  if(amountEl)amountEl.textContent=String(stockBulkAmountV48);
  if(applyEl)applyEl.disabled=count===0;
  if(subtractEl)subtractEl.disabled=count===0;

  if(allEl){
    allEl.checked=activeIds.length>0&&count===activeIds.length;
    allEl.indeterminate=count>0&&count<activeIds.length;
  }
}

window.toggleStockSelectV48=(id,checked)=>{
  if(checked)selectedStockIdsV48.add(id);
  else selectedStockIdsV48.delete(id);
  updateStockBulkUiV48();
};

function renderStock(){
  const lows=state.products.filter(p=>p.active&&Number(p.stock)<=5);
  if($("stockLowCount"))$("stockLowCount").textContent=lows.length?`ต้องตรวจ ${lows.length} รายการ`:"สต๊อกปกติ";

  const rows=state.products.filter(p=>p.active).sort((a,b)=>a.stock-b.stock||a.name.localeCompare(b.name,"th"));
  $("stockList").innerHTML=rows.map(p=>`
    <div class="stock-row stock-row-v48 ${p.stock<=5?"stock-low-row":""}">
      <label class="stock-check-v48" aria-label="เลือก ${escapeHtml(p.name)}">
        <input type="checkbox" ${selectedStockIdsV48.has(p.id)?"checked":""} onchange="toggleStockSelectV48(${p.id},this.checked)">
      </label>
      <div class="stock-product-info-v48">
        <b>${p.name}</b>
        <div>${p.category} · ${money(p.price)} / ${p.unit}</div>
      </div>
      <div class="stock-qty-display"><b>${p.stock}</b> ${p.unit}${p.stock<=5?'<small>ใกล้หมด</small>':""}</div>
      <div class="stock-actions">
        <button onclick="adjustStock(${p.id},-1)">−1</button>
        <button onclick="adjustStock(${p.id},1)">+1</button>
        <button onclick="setStock(${p.id})">ตั้งค่า</button>
      </div>
    </div>`).join("");

  updateStockBulkUiV48();
}

function bindStockBulkV48(){
  const selectAll=$("stockSelectAllV48");
  const amountBtn=$("stockBulkAmountV48");
  const applyBtn=$("stockBulkApplyV48");
  const subtractBtn=$("stockBulkSubtractV52");
  const clearBtn=$("stockBulkClearV48");

  if(selectAll&&!selectAll.dataset.boundV48){
    selectAll.dataset.boundV48="1";
    selectAll.addEventListener("change",()=>{
      selectedStockIdsV48.clear();
      if(selectAll.checked){
        state.products.filter(p=>p.active).forEach(p=>selectedStockIdsV48.add(p.id));
      }
      renderStock();
    });
  }

  if(amountBtn&&!amountBtn.dataset.boundV48){
    amountBtn.dataset.boundV48="1";
    amountBtn.addEventListener("click",()=>{
      openNumericKeypad({
        title:"จำนวนสต๊อก",
        hint:"ใช้จำนวนนี้สำหรับเพิ่มหรือลดสินค้าที่เลือกทั้งหมด",
        value:stockBulkAmountV48,
        min:1,max:999999,maxDigits:6,
        onConfirm:n=>{
          stockBulkAmountV48=Math.max(1,Number(n)||1);
          updateStockBulkUiV48();
        }
      });
    });
  }

  if(clearBtn&&!clearBtn.dataset.boundV48){
    clearBtn.dataset.boundV48="1";
    clearBtn.addEventListener("click",()=>{
      selectedStockIdsV48.clear();
      renderStock();
    });
  }

  if(subtractBtn&&!subtractBtn.dataset.boundV52){
    subtractBtn.dataset.boundV52="1";
    subtractBtn.addEventListener("click",()=>{
      if(!selectedStockIdsV48.size)return;
      const amount=Math.max(1,Number(stockBulkAmountV48)||1);
      const targets=state.products.filter(p=>selectedStockIdsV48.has(p.id));
      if(!targets.length)return;

      const before=targets.map(p=>`${p.name}:${p.stock}`).join(", ");
      targets.forEach(p=>{p.stock=Math.max(0,(Number(p.stock)||0)-amount);});
      saveState();auditV65("ลดสต๊อกหลายรายการ",`−${amount} • ${targets.length} รายการ • ${before}`);
      selectedStockIdsV48.clear();
      renderAll();
    });
  }

  if(applyBtn&&!applyBtn.dataset.boundV48){
    applyBtn.dataset.boundV48="1";
    applyBtn.addEventListener("click",()=>{
      if(!selectedStockIdsV48.size)return;
      const amount=Math.max(1,Number(stockBulkAmountV48)||1);
      const targets=state.products.filter(p=>selectedStockIdsV48.has(p.id));
      if(!targets.length)return;
      const before=targets.map(p=>`${p.name}:${p.stock}`).join(", ");targets.forEach(p=>p.stock=Math.max(0,Number(p.stock)||0)+amount);
      saveState();auditV65("เพิ่มสต๊อกหลายรายการ",`+${amount} • ${targets.length} รายการ • ${before}`);
      selectedStockIdsV48.clear();
      renderAll();
    });
  }
  updateStockBulkUiV48();
}
setTimeout(bindStockBulkV48,0);
window.adjustStock=(id,d)=>{const p=state.products.find(x=>x.id===id);if(!p)return;const before=Number(p.stock)||0;p.stock=Math.max(0,before+d);saveState();auditV65("ปรับสต๊อก",`${p.name}: ${before} → ${p.stock}`);renderAll()};
window.setStock=id=>{const p=state.products.find(x=>x.id===id);if(!p)return;openNumericKeypad({title:`ตั้งค่าสต๊อก ${p.name}`,hint:"จำนวนคงเหลือ",value:p.stock,min:0,max:999999,maxDigits:6,onConfirm:n=>{const before=Number(p.stock)||0;p.stock=Math.max(0,Number(n)||0);saveState();auditV65("ตั้งค่าสต๊อก",`${p.name}: ${before} → ${p.stock}`);renderAll()}})};

// Preorder reminder / notifications
let lastReminderSignature="";

let preorderReminderCollapsed=localStorage.getItem("fish_pos_preorder_reminder_collapsed")==="1";
function applyPreorderReminderCollapsed(){
  const box=$("preorderReminder"),btn=$("togglePreorderReminder");if(!box)return;
  box.classList.toggle("collapsed",preorderReminderCollapsed);
  if(btn){
    btn.textContent=preorderReminderCollapsed?"⌄":"⌃";
    btn.title=preorderReminderCollapsed?"เปิดแจ้งเตือน":"พับแจ้งเตือน";
    btn.setAttribute("aria-label",btn.title);
  }
}

function tomorrowWaitingOrders(){
  const key=dateKey(tomorrowDate());
  return state.preorders.filter(o=>o.date===key&&!["completed","cancelled"].includes(o.status)).sort((a,b)=>String(a.pickup).localeCompare(String(b.pickup)));
}
function preorderReminderSummary(){
  const orders=tomorrowWaitingOrders();
  const itemQty=orders.reduce((s,o)=>s+o.items.reduce((a,i)=>a+i.qty,0),0);
  const total=orders.reduce((s,o)=>s+o.total,0);
  const first=orders[0]?.pickup||"-";
  return {orders,itemQty,total,first,signature:orders.map(o=>`${o.id}:${o.status}`).join("|")};
}
function updateNotifyButton(){
  const b=$("enableNotifyBtn");if(!b)return;
  if(!("Notification" in window)){b.textContent="แจ้งเตือนในแอป";b.disabled=true;return}
  if(Notification.permission==="granted"){b.textContent="✓ เปิดแจ้งเตือนแล้ว";b.disabled=true}
  else if(Notification.permission==="denied"){b.textContent="ถูกบล็อกแจ้งเตือน";b.disabled=true}
  else{b.textContent="เปิดแจ้งเตือน";b.disabled=false}
}

function renderPreorderBell(){
  const s=preorderReminderSummary(),dot=$("preorderBellDot"),btn=$("preorderBellBtn"),sub=$("preorderBellSubtitle"),body=$("preorderBellBody");
  clearDismissedIfStatusChangedV37();
  const dismissed=dismissedPreorderIdsV37();
  s.orders=s.orders.filter(o=>!dismissed.has(String(o.id)));
  s.itemQty=s.orders.reduce((sum,o)=>sum+(o.items||[]).reduce((a,i)=>a+Number(i.qty||0),0),0);
  s.total=s.orders.reduce((sum,o)=>sum+Number(o.total||0),0);
  s.first=s.orders[0]?.pickup||"-";
  if(!dot||!btn||!sub||!body)return;
  const has=s.orders.length>0;
  dot.classList.toggle("hidden",!has);
  btn.classList.toggle("has-unread",has);
  sub.textContent=has?`พรุ่งนี้มี ${s.orders.length} ออเดอร์ · รวม ${s.itemQty} ชิ้น`:"ยังไม่มีออเดอร์ล่วงหน้า";
  if(!has){body.innerHTML='<div class="bell-empty">ยังไม่มีรายการสั่งล่วงหน้า</div>';return}
  body.innerHTML=s.orders.slice(0,4).map(o=>{
    const title=o.customer||o.note||"ไม่ระบุชื่อ";
    const items=(o.items||[]).map(i=>`${i.name} x${i.qty}`).join(", ");
    return `<div class="bell-order bell-order-v37" data-preorder-id="${o.id}" title="ปัดซ้ายหรือขวาเพื่อซ่อน">
      <div><b>${o.pickup||"--:--"} · ${title}</b><small>${items}</small></div>
      <strong>${money(o.total||0)}</strong>
      <button type="button" class="bell-dismiss-v37" data-dismiss-preorder="${o.id}" aria-label="ซ่อนการแจ้งเตือน">×</button>
    </div>`;
  }).join("")+(s.orders.length>4?`<div class="bell-more">และอีก ${s.orders.length-4} รายการ</div>`:"");
  bindBellSwipeV37();
}
function togglePreorderBell(force){
  const pop=$("preorderBellPopover");if(!pop)return;
  const show=typeof force==="boolean"?force:pop.classList.contains("hidden");
  pop.classList.toggle("hidden",!show);
}
const DISMISSED_PREORDER_KEY="fish_pos_dismissed_preorder_notifications_v37";
function dismissedPreorderIdsV37(){
  try{return new Set(JSON.parse(localStorage.getItem(DISMISSED_PREORDER_KEY)||"[]").map(String))}catch(e){return new Set()}
}
function dismissPreorderNotificationV37(id){
  const set=dismissedPreorderIdsV37();set.add(String(id));
  localStorage.setItem(DISMISSED_PREORDER_KEY,JSON.stringify([...set]));
  renderPreorderBell();
}
function clearDismissedIfStatusChangedV37(){
  const current=new Set(state.preorders.filter(o=>!["completed","cancelled"].includes(o.status)).map(o=>String(o.id)));
  const kept=[...dismissedPreorderIdsV37()].filter(id=>current.has(id));
  localStorage.setItem(DISMISSED_PREORDER_KEY,JSON.stringify(kept));
}
function bindBellSwipeV37(){
  const body=$("preorderBellBody");if(!body)return;
  body.querySelectorAll(".bell-order-v37").forEach(row=>{
    let startX=0,startY=0;
    row.addEventListener("touchstart",e=>{
      const t=e.touches?.[0];if(!t)return;startX=t.clientX;startY=t.clientY;
    },{passive:true});
    row.addEventListener("touchend",e=>{
      const t=e.changedTouches?.[0];if(!t)return;
      const dx=t.clientX-startX,dy=t.clientY-startY;
      if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)){
        row.classList.add("swiped-away-v37");
        setTimeout(()=>dismissPreorderNotificationV37(row.dataset.preorderId),160);
      }
    },{passive:true});
  });
}

function updatePreorderReminder(showBrowser=false){
  const box=$("preorderReminder");if(!box)return;
  const s=preorderReminderSummary();
  box.classList.add("hidden");
  renderPreorderBell();
  if(!s.orders.length){lastReminderSignature="";updateNotifyButton();return}
  $("preorderReminderTitle").textContent=`พรุ่งนี้มี ${s.orders.length} ออเดอร์ล่วงหน้า`;
  $("preorderReminderText").textContent=`รวม ${s.itemQty} ชิ้น • ${money(s.total)} • เริ่มรับ ${s.first}`;
  updateNotifyButton();
  if(showBrowser&&s.signature&&s.signature!==lastReminderSignature&&"Notification" in window&&Notification.permission==="granted"){
    try{new Notification("พรุ่งนี้มีออเดอร์ปลาเผา",{body:`${s.orders.length} ออเดอร์ • ${s.itemQty} ชิ้น • เริ่มรับ ${s.first}`})}catch(e){}
  }
  lastReminderSignature=s.signature;
}
$("openPreorderReminder").onclick=()=>{window.__preListExplicitDate=true;openPage("preorder");$("preListDate").value=dateKey(tomorrowDate());renderPreorderList()};

$("preorderBellBtn").onclick=()=>togglePreorderBell();
$("preorderBellBody").addEventListener("click",e=>{
  const btn=e.target.closest("[data-dismiss-preorder]");
  if(!btn)return;
  e.stopPropagation();
  dismissPreorderNotificationV37(btn.dataset.dismissPreorder);
});
$("closePreorderBell").onclick=()=>togglePreorderBell(false);
document.addEventListener("click",e=>{
  const wrap=$("preorderBellWrap");
  if(wrap&&!wrap.contains(e.target))togglePreorderBell(false);
});
(function(){
  const host=$("bellTopHost"),wrap=$("preorderBellWrap");
  if(host&&wrap)host.appendChild(wrap);
})();



$("enableNotifyBtn").onclick=async()=>{
  if(!("Notification" in window)){alert("อุปกรณ์นี้ไม่รองรับ Browser Notification แต่แถบเตือนในแอปยังทำงานปกติ");return}
  try{
    const p=await Notification.requestPermission();
    updateNotifyButton();
    if(p==="granted"){
      const s=preorderReminderSummary();
      new Notification("เปิดแจ้งเตือนแล้ว",{body:s.orders.length?`พรุ่งนี้มี ${s.orders.length} ออเดอร์ล่วงหน้า`:"ระบบจะแจ้งเมื่อมีออเดอร์พรุ่งนี้"});
    }
  }catch(e){alert("ไม่สามารถเปิด Browser Notification ได้ในโหมดนี้")}
};
setInterval(()=>{if(currentUser)updatePreorderReminder(true)},60000);

// Preorders
function tomorrowDate(){const d=new Date();d.setDate(d.getDate()+1);d.setHours(0,0,0,0);return d}
function dateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function localDateTimeValue(d){const pad=n=>String(n).padStart(2,"0");return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`}
function populatePreorderTimeSelects(){
  const hour=$("preHour"),minute=$("preMinute");
  if(!hour||!minute)return;

  if(!hour.options.length){
    hour.innerHTML=Array.from({length:24},(_,i)=>{
      const v=String(i).padStart(2,"0");
      return `<option value="${v}">${v}</option>`;
    }).join("");
  }
  if(!minute.options.length){
    minute.innerHTML=Array.from({length:12},(_,i)=>{
      const v=String(i*5).padStart(2,"0");
      return `<option value="${v}">${v}</option>`;
    }).join("");
  }
}

function syncPreDateTime(){
  populatePreorderTimeSelects();
  const date=$("preDate")?.value||"";
  const hour=$("preHour")?.value||"17";
  const minute=$("preMinute")?.value||"00";
  const time=`${hour}:${minute}`;
  if($("preTime"))$("preTime").value=time;
  if($("preDateTime"))$("preDateTime").value=date?`${date}T${time}`:"";
}

function initPreorderDateTime(){
  populatePreorderTimeSelects();
  const d=tomorrowDate();d.setHours(17,0,0,0);

  if($("preDate")&&!$("preDate").value)$("preDate").value=dateKey(d);
  if($("preHour")&&!$("preHour").value)$("preHour").value="17";
  if($("preMinute")&&!$("preMinute").value)$("preMinute").value="00";

  syncPreDateTime();
  if($("preListDate")&&!$("preListDate").value)$("preListDate").value="";
}
function preorderStatusMeta(status){
  return {
    confirmed:{label:"ยืนยันแล้ว",cls:"confirmed",next:"completed",action:"สำเร็จ"},
    completed:{label:"สำเร็จ",cls:"completed",next:null,action:null},
    cancelled:{label:"ยกเลิก",cls:"cancelled",next:null,action:null}
  }[status]||{label:"ยืนยันแล้ว",cls:"confirmed",next:"completed",action:"สำเร็จ"};
}

function getPreorderCategories(){
  const seen=[];
  state.products.filter(p=>p.active).forEach(p=>{
    if(!seen.includes(p.category))seen.push(p.category);
  });
  return seen;
}

function renderPreCategoryTabs(){
  const box=$("preCategoryTabs");if(!box)return;
  const cats=getPreorderCategories();
  const valid=preorderCategory==="all"||cats.includes(preorderCategory);
  if(!valid)preorderCategory="all";
  box.innerHTML=[
    `<button type="button" class="${preorderCategory==="all"?"active":""}" data-pre-cat="all">ทั้งหมด</button>`,
    ...cats.map(cat=>`<button type="button" class="${preorderCategory===cat?"active":""}" data-pre-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`)
  ].join("");
  box.querySelectorAll("[data-pre-cat]").forEach(btn=>{
    btn.onclick=()=>{
      preorderCategory=btn.dataset.preCat;
      renderPreorder();
    };
  });
}


function setPreorderPageV25(view){
  preorderPageViewV25=view==="create"?"create":"list";
  document.querySelectorAll("[data-pre-page-tab]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.prePageTab===preorderPageViewV25);
  });
  document.querySelectorAll("[data-pre-page-panel]").forEach(panel=>{
    panel.classList.toggle("active",panel.dataset.prePagePanel===preorderPageViewV25);
  });
  if(preorderPageViewV25==="list")renderPreorderList();
  else renderPreorder();
}

function renderPreorder(){
  initPreorderDateTime();
  syncPreDateTime();

  const dtValue=$("preDateTime")?.value;
  const dt=dtValue?new Date(dtValue):tomorrowDate();
  if($("tomorrowBadge"))$("tomorrowBadge").textContent="รับ "+dt.toLocaleString("th-TH",{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});

  renderPreCategoryTabs();

  let products=state.products.filter(p=>p.active);
  if(preorderCategory!=="all")products=products.filter(p=>p.category===preorderCategory);
  products=products.slice().sort((a,b)=>a.price-b.price||a.name.localeCompare(b.name,"th"));

  $("preProducts").innerHTML=products.length?products.map(p=>{
    const r=preorderCart.find(x=>x.id===p.id),q=r?.qty||0;
    return `<div class="pre-product pre-product-v24 ${q>0?"selected":""}">
      <div class="pre-product-copy">
        <small>${escapeHtml(p.category)}</small>
        <b>${escapeHtml(p.name)}</b>
        <span>${money(p.price)}</span>
      </div>
      <div class="pre-controls">
        <button type="button" onclick="changePreQty(${p.id},-1)">−</button>
        <button type="button" class="pre-qty-input pre-qty-button" onclick="openPreQtyKeypad(${p.id})" aria-label="จำนวน ${escapeHtml(p.name)}">${q}</button>
        <button type="button" onclick="changePreQty(${p.id},1)">+</button>
      </div>
    </div>`;
  }).join(""):'<p class="empty">ไม่มีสินค้าในหมวดนี้</p>';

  $("preCartItems").innerHTML=preorderCart.length
    ?preorderCart.slice().sort((a,b)=>b.price-a.price).map(r=>`<div class="pre-row pre-row-v24"><span>${escapeHtml(r.name)} × ${r.qty}</span><b>${money(r.price*r.qty)}</b></div>`).join("")
    :'<p class="empty">ยังไม่ได้เลือกสินค้า</p>';

  $("preTotal").textContent=money(preorderCart.reduce((s,r)=>s+r.price*r.qty,0));
}

function preorderSearchText(o){
  return [
    o.customer,
    o.phone,
    o.note,
    o.staffName,
    ...(o.items||[]).flatMap(i=>[i.name,i.price,i.qty])
  ].join(" ").toLowerCase();
}

function renderPreorderList(){
  const selected=$("preListDate")?.value||"";
  const query=String($("preListSearch")?.value||"").trim().toLowerCase();

  let list=state.preorders.slice().sort((a,b)=>{
    const aCreated=Date.parse(a.createdAt||"")||Number(a.id||0);
    const bCreated=Date.parse(b.createdAt||"")||Number(b.id||0);
    if(bCreated!==aCreated)return bCreated-aCreated;
    return Number(b.id||0)-Number(a.id||0);
  });

  if(selected)list=list.filter(p=>p.date===selected);
  if(preorderStatusFilter!=="all")list=list.filter(p=>(p.status||"confirmed")===preorderStatusFilter);
  if(query)list=list.filter(o=>preorderSearchText(o).includes(query));

  if(selected){
    const d=new Date(selected+"T12:00:00");
    $("preListTitle").textContent="วันที่ "+d.toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  }else{
    $("preListTitle").textContent="รายการสั่งล่วงหน้าทั้งหมด";
  }

  const prep={};
  list.filter(x=>!["completed","cancelled"].includes(x.status)).forEach(o=>(o.items||[]).forEach(i=>prep[i.name]=(prep[i.name]||0)+i.qty));
  $("preparationSummary").textContent=Object.keys(prep).length
    ?"สรุปของที่ต้องเตรียม: "+Object.entries(prep).map(([n,q])=>`${n} ${q}`).join(" • ")
    :"ยังไม่มีรายการที่ต้องเตรียม";

  const box=$("preorderList");
  if(!list.length){
    box.innerHTML='<div class="empty preorder-empty-card">ไม่พบออเดอร์สั่งล่วงหน้า</div>';
    return;
  }

  box.innerHTML=list.map(o=>{
    const meta=preorderStatusMeta(o.status||"confirmed");
    const pickupDate=new Date(o.date+"T12:00:00").toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"});
    const itemText=(o.items||[]).map(i=>`${escapeHtml(i.name)} ×${i.qty}`).join(" · ");
    const nextBtn=meta.next
      ?`<button type="button" class="pre-next-status" onclick="advancePreStatus(${o.id})">${meta.action}</button>`
      :"";
    const cancelBtn=o.status!=="cancelled"
      ?`<button type="button" class="pre-cancel-status" onclick="setPreStatus(${o.id},'cancelled')" aria-label="ยกเลิกออเดอร์">ยกเลิก</button>`
      :"";

    return `<article class="preorder-card-row">
      <div class="preorder-card-date">
        <b>${pickupDate}</b>
        <strong>${escapeHtml(o.pickup||"-")}</strong>
      </div>

      <div class="preorder-card-customer">
        <div class="preorder-card-title">
          <b>${escapeHtml(o.customer||"-")}</b>
          <span class="pre-status-badge ${meta.cls}">${meta.label}</span>
        </div>
        <small>${escapeHtml(o.phone||"ไม่มีเบอร์โทร")}</small>
        ${o.note?`<small class="pre-note">หมายเหตุ: ${escapeHtml(o.note)}</small>`:""}
      </div>

      <div class="preorder-card-items">
        <b>${(o.items||[]).reduce((s,i)=>s+Number(i.qty||0),0)} รายการ</b>
        <span>${itemText||"-"}</span>
      </div>

      <div class="preorder-card-total">
        <strong>${money(o.total)}</strong>
        <small>${escapeHtml(o.staffName||"-")}</small>
      </div>

      <div class="preorder-card-actions">
        <button type="button" class="pre-print-v71" data-print-preorder="${o.id}" onclick="printPreorderV71(${o.id})" title="พิมพ์ใบเตรียมออเดอร์ล่วงหน้า">
          <span class="pre-print-icon-v71">🖨</span><span>พิมพ์ใบเตรียม</span>
        </button>
        ${nextBtn}
        ${cancelBtn}
      </div>
    </article>`;
  }).join("");
}

window.changePreQty=(id,d)=>{
  const el=currentTapElement();tapFeedback(el);playQtySound(d>0);
  const p=state.products.find(x=>x.id===id);if(!p)return;
  let r=preorderCart.find(x=>x.id===id);
  if(!r&&d>0){r={id:p.id,name:p.name,price:p.price,qty:0};preorderCart.push(r)}
  if(!r)return;
  r.qty=Math.min(100,r.qty+d);
  if(r.qty<=0)preorderCart=preorderCart.filter(x=>x.id!==id);
  renderPreorder();
};

window.setPreQty=(id,value)=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  let qty=Math.min(100,Math.max(0,Number(String(value??"").replace(/\D/g,""))||0));
  let r=preorderCart.find(x=>x.id===id);
  if(qty<=0)preorderCart=preorderCart.filter(x=>x.id!==id);
  else if(r)r.qty=qty;
  else preorderCart.push({id:p.id,name:p.name,price:p.price,qty});
  renderPreorder();
};

window.openPreQtyKeypad=id=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  const r=preorderCart.find(x=>x.id===id);
  openNumericKeypad({
    title:`จำนวน ${p.name}`,
    hint:"สูงสุด 100",
    value:r?.qty||0,
    min:0,max:100,maxDigits:3,
    onConfirm:n=>setPreQty(id,n)
  });
};

$("clearPreorderBtn").onclick=()=>{preorderCart=[];renderPreorder()};

if($("preDate"))$("preDate").addEventListener("change",()=>{syncPreDateTime();renderPreorder()});
if($("preHour"))$("preHour").addEventListener("change",()=>{syncPreDateTime();renderPreorder()});
if($("preMinute"))$("preMinute").addEventListener("change",()=>{syncPreDateTime();renderPreorder()});

$("savePreorderBtn").onclick=()=>{
  syncPreDateTime();
  const customer=$("preCustomer").value.trim();
  const dtValue=$("preDateTime").value;

  if(!customer){alert("กรุณาใส่ชื่อลูกค้า");return}
  if(!dtValue){alert("กรุณาเลือกวันที่และเวลารับ");return}
  if(!preorderCart.length){alert("กรุณาเลือกสินค้า");return}

  const dt=new Date(dtValue);
  const o={
    id:Date.now(),
    date:dateKey(dt),
    customer,
    phone:$("prePhone").value.trim(),
    pickup:`${$("preHour").value}:${$("preMinute").value}`,
    note:$("preNote").value.trim(),
    items:preorderCart.map(x=>({...x})),
    total:preorderCart.reduce((s,x)=>s+x.price*x.qty,0),
    status:"confirmed",
    createdAt:nowIso(),
    staffName:currentUser.name
  };

  state.preorders.push(o);
  saveState();auditV65("สร้างออเดอร์ล่วงหน้า",`${o.customer} • ${o.date} ${o.pickup} • ${money(o.total)}`,{preorderId:o.id});

  preorderCart=[];
  ["preCustomer","prePhone","preNote"].forEach(id=>$(id).value="");

  // หลังบันทึก ให้กลับไปหน้ารายการสั่งล่วงหน้าทันที
  preorderStatusFilter="all";
  if($("preListDate"))$("preListDate").value="";
  document.querySelectorAll("#preStatusTabs [data-pre-status]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.preStatus==="all");
  });
  renderPreorder();
  updatePreorderReminder(true);
  setPreorderPageV25("list");
  renderPreorderList();
};

window.setPreStatus=(id,status)=>{
  const allowed=["confirmed","completed","cancelled"];
  if(!allowed.includes(status))return;
  const o=state.preorders.find(x=>x.id===id);if(!o)return;
  const oldStatus=o.status;o.status=status;
  o.statusUpdatedAt=nowIso();
  saveState();auditV65("เปลี่ยนสถานะออเดอร์ล่วงหน้า",`${o.customer}: ${oldStatus||"confirmed"} → ${status}`,{preorderId:o.id});
  renderPreorderList();
  updatePreorderReminder();
  renderPreorderBell();
};

window.advancePreStatus=id=>{
  const o=state.preorders.find(x=>x.id===id);if(!o)return;
  const next={confirmed:"completed"}[o.status||"confirmed"];
  if(next)setPreStatus(id,next);
};

if($("preListDate"))$("preListDate").addEventListener("change",renderPreorderList);
if($("preListSearch"))$("preListSearch").addEventListener("input",renderPreorderList);

$("preListAllBtn").onclick=()=>{$("preListDate").value="";renderPreorderList()};
$("preListTomorrowBtn").onclick=()=>{$("preListDate").value=dateKey(tomorrowDate());renderPreorderList()};


document.querySelectorAll("[data-pre-page-tab]").forEach(btn=>{
  btn.onclick=()=>setPreorderPageV25(btn.dataset.prePageTab);
});

document.querySelectorAll("#preStatusTabs [data-pre-status]").forEach(btn=>{
  btn.onclick=()=>{
    preorderStatusFilter=btn.dataset.preStatus;
    document.querySelectorAll("#preStatusTabs [data-pre-status]").forEach(x=>x.classList.toggle("active",x===btn));
    renderPreorderList();
  };
});


// Export sales CSV by selected date or all
function csvCell(v){const s=String(v??"").replaceAll('"','""');return `"${s}"`}
function paidOrdersForExport(dateValue="all"){
  return state.orders.filter(o=>o.status==="paid"&&(dateValue==="all"||dateKey(new Date(o.time))===dateValue)).slice().sort((a,b)=>new Date(a.time)-new Date(b.time));
}
function exportSalesCsv(dateValue="all"){
  const orders=paidOrdersForExport(dateValue);
  const headers=["วันที่","เวลา","เลขออเดอร์","รายการสินค้า","จำนวนรวม","ส่วนลด","ยอดสุทธิ","วิธีชำระ","เงินรับ","เงินทอน","พนักงาน","ต้นทุน","กำไรขั้นต้น"];
  const rows=orders.map(o=>{const d=new Date(o.time),qty=o.items.reduce((s,i)=>s+i.qty,0),total=Number(o.total||0),cost=Number(o.cost||0),profit=Number(o.grossProfit??(total-cost));return [d.toLocaleDateString("th-TH"),d.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),`#${o.number}`,o.items.slice().sort((a,b)=>b.price-a.price).map(i=>`${i.name} x${i.qty}`).join(" | "),qty,Number(o.discount||0),total,o.payment,Number(o.cashReceived??o.total??0),Number(o.change||0),o.staffName||"-",cost,profit]});
  const totalSales=orders.reduce((s,o)=>s+Number(o.total||0),0),totalCost=orders.reduce((s,o)=>s+Number(o.cost||0),0),cash=orders.filter(o=>o.payment==="เงินสด").reduce((s,o)=>s+Number(o.total||0),0),qr=orders.filter(o=>o.payment==="QR").reduce((s,o)=>s+Number(o.total||0),0);
  const label=dateValue==="all"?"ทั้งหมด":new Date(dateValue+"T12:00:00").toLocaleDateString("th-TH");
  const lines=[headers,...rows,[],["สรุปยอดขาย",label],["จำนวนออเดอร์",orders.length],["ยอดขายรวม",totalSales],["เงินสด",cash],["QR",qr],["ต้นทุนรวม",totalCost],["กำไรขั้นต้น",totalSales-totalCost]];
  const csv="\uFEFF"+lines.map(r=>r.map(csvCell).join(",")).join("\r\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a"),url=URL.createObjectURL(blob);
  a.href=url;a.download=dateValue==="all"?"ยอดขาย-ทั้งหมด.csv":`ยอดขาย-${dateValue}.csv`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function initExportDate(){if($("exportSalesDate")&&!$("exportSalesDate").value)$("exportSalesDate").value=dateKey(new Date())}
$("exportSelectedCsvBtn").onclick=()=>{initExportDate();exportSalesCsv($("exportSalesDate").value)};
$("exportAllCsvBtn").onclick=()=>exportSalesCsv("all");

// Admin

function renderCategoryManager(){
  const box=$("categoryManager");if(!box)return;
  const cats=getCategoryList();
  box.innerHTML=cats.length?cats.map((cat,i)=>`<div class="category-manager-row category-manager-row-v37">
    <input id="catName_${i}" value="${escapeHtml(cat)}" aria-label="ชื่อหมวด ${escapeHtml(cat)}">
    <div class="category-manager-actions-v37">
      <button class="secondary category-arrow-v37" onclick="moveCategory(${i},-1)" ${i===0?"disabled":""} title="เลื่อนไปซ้าย">←</button>
      <button class="secondary category-arrow-v37" onclick="moveCategory(${i},1)" ${i===cats.length-1?"disabled":""} title="เลื่อนไปขวา">→</button>
      <button class="primary category-save-v37" onclick="renameCategory(${i})">บันทึกชื่อ</button>
      <button class="category-trash-v37" onclick="deleteCategoryByIndex(${i})" title="ลบหมวด" aria-label="ลบหมวด ${escapeHtml(cat)}">ลบ</button>
    </div>
  </div>`).join(""):'<p class="empty">ยังไม่มีหมวด</p>';
}
window.moveCategory=(index,dir)=>{
  const arr=getCategoryList(),next=index+dir;if(next<0||next>=arr.length)return;
  [arr[index],arr[next]]=[arr[next],arr[index]];state.settings.categoryOrder=arr;saveState();renderCategories();renderAdmin();
};
window.renameCategory=index=>{
  const arr=getCategoryList(),oldName=arr[index],input=$(`catName_${index}`),newName=String(input?.value||"").trim();
  if(!oldName||!newName)return;
  if(newName!==oldName&&arr.includes(newName)){alert("มีหมวดชื่อนี้อยู่แล้ว");return}
  state.products.forEach(p=>{if(p.category===oldName)p.category=newName});
  state.settings.customCategories=(state.settings.customCategories||[]).map(x=>x===oldName?newName:x);
  state.settings.categoryOrder=arr.map(x=>x===oldName?newName:x);
  if(currentCategory===oldName)currentCategory=newName;
  saveState();renderAll();
};
window.deleteCategoryByIndex=index=>{
  const arr=getCategoryList(),name=arr[index];
  if(!name)return;
  const used=state.products.filter(p=>p.category===name);
  const detail=used.length?`\nสินค้า ${used.length} รายการในหมวดนี้จะถูกย้ายไปหมวด “อื่นๆ”`:"";
  if(!confirm(`ลบหมวด “${name}” ใช่ไหม?${detail}`))return;

  if(used.length){
    used.forEach(p=>p.category="อื่นๆ");
    if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];
    if(!state.settings.customCategories.includes("อื่นๆ"))state.settings.customCategories.push("อื่นๆ");
  }
  state.settings.customCategories=(state.settings.customCategories||[]).filter(x=>x!==name);
  state.settings.categoryOrder=(state.settings.categoryOrder||[]).filter(x=>x!==name);
  if(currentCategory===name)currentCategory="ทั้งหมด";
  saveState();renderAll();
};



function preserveAdminScrollV27(fn){
  const adminVisible=$("admin") && !$("admin").classList.contains("hidden");
  const y=adminVisible?(window.scrollY||0):0;
  const result=fn();
  if(adminVisible){
    requestAnimationFrame(()=>{
      window.scrollTo({top:y,left:0,behavior:"auto"});
      requestAnimationFrame(()=>window.scrollTo({top:y,left:0,behavior:"auto"}));
    });
  }
  return result;
}



function renderAdmin(){
  if(currentUser?.role!=="owner")return;
  $("shopNameInput").value=state.settings.shopName;$("nextOrderInput").value=ensureDailyOrderCounter();if($("promptPayIdInput"))$("promptPayIdInput").value=state.settings.promptPayId||"";
  $("staffInfo").innerHTML=STAFF_LIST.map(s=>`<div class="staff-admin-row"><span><b>${s.name}</b> · ${s.role==="owner"?"เจ้าของ":"พนักงาน"}</span><code>PIN ${s.pin}</code></div>`).join("");

  const cats=[...getCategoryList()];if(!cats.includes("อื่นๆ"))cats.push("อื่นๆ");
  const newSel=$("newCategory"),editSel=$("editCategory");
  if(newSel){const keep=newSel.value;newSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");if(cats.includes(keep))newSel.value=keep}
  if(editSel&&!editSel.options.length)editSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");
  renderCategoryManager();

  $("adminProducts").innerHTML=`<table><tr><th>ชื่อ</th><th>หมวด</th><th>ราคา</th><th>ต้นทุน</th><th>สต๊อก</th><th>สถานะ</th><th>จัดการ</th></tr>${state.products.slice().sort((a,b)=>b.price-a.price).map(p=>`<tr><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.category)}</td><td>${money(p.price)}</td><td>${money(p.cost)}</td><td>${p.stock} ${escapeHtml(p.unit)}</td><td>${p.active?"เปิดขาย":"ปิดขาย"}</td><td><button class="btn-secondary-orange compact" onclick="editProduct(${p.id})">แก้ไข</button> <button class="btn-neutral compact" onclick="toggleProduct(${p.id})">${p.active?"ปิดขาย":"เปิดขาย"}</button></td></tr>`).join("")}</table>`;
  updateAdminQrPreview();renderAdminDynamicQr();initExportDate();
}
$("saveShopBtn").onclick=()=>preserveAdminScrollV27(()=>{
  state.settings.shopName=$("shopNameInput").value.trim()||"ร้านทิพย์เกษรเมี่ยงปลาเผา";
  ensureDailyOrderCounter();
  saveState();
  if($("shopTitle"))$("shopTitle").textContent=state.settings.shopName;
  alert("บันทึกแล้ว");
});

$("addCategoryBtn").onclick=()=>{
  const name=$("newCategoryName").value.trim();
  if(!name){alert("กรุณาใส่ชื่อหมวด");return}
  if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];
  if(!state.settings.customCategories.includes(name))state.settings.customCategories.push(name);
  if(!Array.isArray(state.settings.categoryOrder))state.settings.categoryOrder=[];
  if(!state.settings.categoryOrder.includes(name))state.settings.categoryOrder.push(name);
  saveState();$("newCategoryName").value="";renderAdmin();$("newCategory").value=name;renderCategories();
};


["newPrice","newCost","editPrice","editCost"].forEach(id=>{
  const el=$(id);if(!el)return;
  el.addEventListener("input",()=>{el.value=el.value.replace(/\D/g,"").slice(0,8)});
});


["newStock","editStock"].forEach(id=>{
  const el=$(id);if(!el)return;
  el.addEventListener("input",()=>{el.value=el.value.replace(/\D/g,"").slice(0,6)});
});

$("addProductBtn").onclick=()=>{
  const name=$("newName").value.trim(),category=$("newCategory").value||"อื่นๆ";if(!name){alert("กรุณาใส่ชื่อสินค้า");return}
  const id=state.products.reduce((m,p)=>Math.max(m,p.id),0)+1;
  const addedV65={id,name,category,price:Math.max(0,Number($("newPrice").value)||0),cost:Math.max(0,Number($("newCost").value)||0),stock:Math.max(0,Number($("newStock").value)||0),unit:$("newUnit").value.trim()||"ชิ้น",active:true};state.products.push(addedV65);auditV65("เพิ่มสินค้า",`${addedV65.name} • ${money(addedV65.price)}`);
  ["newName","newPrice","newCost","newStock","newUnit"].forEach(id=>$(id).value="");saveState();renderAll();
};
window.editProduct=id=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  $("editProductId").value=id;$("editName").value=p.name;
  const editSel=$("editCategory"),cats=[...getCategoryList()];if(!cats.includes("อื่นๆ"))cats.push("อื่นๆ");
  editSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");editSel.value=p.category;
  $("editPrice").value=p.price;$("editCost").value=p.cost;$("editStock").value=p.stock;$("editUnit").value=p.unit;$("editProductModal").classList.remove("hidden");
};
$("closeEditProduct").onclick=()=>$("editProductModal").classList.add("hidden");
$("saveEditProduct").onclick=()=>{
  const p=state.products.find(x=>x.id===Number($("editProductId").value));if(!p)return;const beforeV65={...p};
  p.name=$("editName").value.trim()||p.name;p.category=$("editCategory").value;p.price=Math.max(0,Number($("editPrice").value)||0);p.cost=Math.max(0,Number($("editCost").value)||0);p.stock=Math.max(0,Number($("editStock").value)||0);p.unit=$("editUnit").value.trim()||p.unit;
  saveState();auditV65("แก้ไขสินค้า",`${beforeV65.name}: ราคา ${beforeV65.price}→${p.price}, สต๊อก ${beforeV65.stock}→${p.stock}`);$("editProductModal").classList.add("hidden");renderAll();
};
window.toggleProduct=id=>{const p=state.products.find(x=>x.id===id);p.active=!p.active;saveState();auditV65(p.active?"เปิดขายสินค้า":"ปิดขายสินค้า",p.name);renderAll()};
function updateQrDisplay(){const src=state.settings.qrImage||"";if(src){$("paymentQrImage").src=src;$("paymentQrImage").style.display="block";$("qrFullscreenImage").src=src;$("qrPlaceholder").style.display="none"}else{$("paymentQrImage").style.display="none";$("qrPlaceholder").style.display="block"}}
function updateAdminQrPreview(){if(currentUser?.role!=="owner")return;const src=state.settings.qrImage||"";if(src){$("adminQrPreview").src=src;$("adminQrPreview").style.display="block";$("adminQrEmpty").style.display="none"}else{$("adminQrPreview").style.display="none";$("adminQrEmpty").style.display="block"}}

$("savePromptPayBtn").onclick=()=>preserveAdminScrollV27(()=>{
  const value=$("promptPayIdInput").value.trim();
  if(value){
    try{normalizePromptPayTarget(value)}
    catch(e){alert(e.message);return}
  }
  state.settings.promptPayId=value;
  saveState();
  renderAdminDynamicQr();
  alert(value?"บันทึก PromptPay แล้ว":"ลบ PromptPay แล้ว");
});

$("qrFile").onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.settings.qrImage=String(r.result);saveState();updateQrDisplay();updateAdminQrPreview()};r.readAsDataURL(f)};
$("removeQrBtn").onclick=()=>{state.settings.qrImage="";saveState();updateQrDisplay();updateAdminQrPreview()};
$("exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="fish-pos-backup.json";a.click();URL.revokeObjectURL(a.href)};
$("exportTodayCsvAdminBtn").onclick=()=>exportSalesCsv(dateKey(new Date()));
$("importBtn").onclick=()=>$("importFile").click();
$("importFile").onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);state.staff=clone(STAFF_LIST);if(!Array.isArray(state.preorders))state.preorders=[];if(!state.settings)state.settings=clone(demoState.settings);if(!state.settings.dailyOrderCounters)state.settings.dailyOrderCounters={};if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];ensureDailyOrderCounter();saveState();renderAll();alert("นำเข้าข้อมูลสำเร็จ")}catch(err){alert("ไฟล์ไม่ถูกต้อง")}};r.readAsText(f)};
$("resetBtn").onclick=()=>{if(confirm("รีเซ็ตข้อมูลทั้งหมดใช่ไหม?")){state=clone(demoState);saveState();location.reload()}};



// Navigation
function openPage(pageId){
  if(["dashboard","admin"].includes(pageId) && currentUser?.role!=="owner"){
    pageId="sale";
  }

  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.page===pageId));
  document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));

  const page=$(pageId);
  if(page)page.classList.remove("hidden");

  if(pageId==="dashboard")setTimeout(()=>{renderDashboard();renderSalesCharts();initExportDate()},40);
  if(pageId==="preorder"){
    setPreorderPageV25("list");
    renderPreorder();
    renderPreorderList();
  }
  if(pageId==="admin"){
    renderAdmin();
      window.scrollTo({top:0,left:0,behavior:"auto"});
    requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:"auto"}));
  }
}
document.querySelectorAll(".tab").forEach(btn=>{
  btn.onclick=()=>{
    const target=btn.dataset.page;
    if(btn.classList.contains("active")){
      // Do not re-render or move the page when clicking the active sidebar tab again.
      return;
    }
    openPage(target);
  };
});

const sidebar=$("appSidebar"),sidebarToggle=$("sidebarToggle");
function setSidebarExpanded(expanded){
  if(!sidebar)return;
  sidebar.classList.toggle("collapsed",!expanded);
  sidebar.classList.toggle("expanded",expanded);
  if(sidebarToggle){
    sidebarToggle.setAttribute("aria-label",expanded?"พับเมนู":"ขยายเมนู");
    sidebarToggle.title=expanded?"พับเมนู":"ขยายเมนู";
  }
  localStorage.setItem("fish_pos_sidebar_expanded",expanded?"1":"0");
}
if(sidebar&&window.innerWidth>760)setSidebarExpanded(localStorage.getItem("fish_pos_sidebar_expanded")==="1");
if(sidebarToggle)sidebarToggle.onclick=()=>setSidebarExpanded(sidebar.classList.contains("collapsed"));
document.querySelectorAll("#mainTabs .tab").forEach(btn=>{
  const label=btn.querySelector("span")?.textContent?.trim()||"เมนู";
  btn.title=label;
  btn.setAttribute("aria-label",label);
});


function salePageActive(){return currentUser&&!$("sale").classList.contains("hidden")}
["gesturestart","gesturechange","gestureend"].forEach(type=>document.addEventListener(type,e=>{if(salePageActive())e.preventDefault()},{passive:false}));
document.addEventListener("touchmove",e=>{if(salePageActive()&&e.touches&&e.touches.length>1)e.preventDefault()},{passive:false});
document.addEventListener("wheel",e=>{if(salePageActive()&&e.ctrlKey)e.preventDefault()},{passive:false});
document.addEventListener("keydown",e=>{if(salePageActive()&&(e.ctrlKey||e.metaKey)&&["=","+","-","0"].includes(e.key))e.preventDefault()});



// =====================================================================
// V54 — Customer Display bridge (iPad POS -> Raspberry Pi -> HDMI display)
// Works in two modes:
// 1) BroadcastChannel for preview on the same browser/device.
// 2) WebSocket for real shop use when POS is served by Raspberry Pi locally.
// =====================================================================
const CUSTOMER_DISPLAY_CHANNEL="fish-pos-customer-display-v1";
let customerDisplayChannel=null;
let customerDisplaySocket=null;
let customerDisplayReconnectTimer=null;
let customerDisplayLastPayload=null;

function customerDisplaySocketUrl(){
  try{
    const query=new URLSearchParams(location.search);
    const explicit=query.get("displayWs")||localStorage.getItem("fish_pos_display_ws")||"";
    if(explicit)return explicit;
    // When served from Raspberry Pi over local HTTP, connect to its WebSocket bridge.
    if(location.protocol==="http:")return `ws://${location.hostname}:8787`;
  }catch(e){}
  // GitHub Pages is HTTPS. We intentionally do not open insecure ws:// from HTTPS.
  // Same-device preview still works through BroadcastChannel.
  return "";
}
function initCustomerDisplayBridge(){
  try{customerDisplayChannel=new BroadcastChannel(CUSTOMER_DISPLAY_CHANNEL)}catch(e){}
  connectCustomerDisplaySocket();
}
function connectCustomerDisplaySocket(){
  const url=customerDisplaySocketUrl();
  if(!url)return;
  clearTimeout(customerDisplayReconnectTimer);
  try{
    customerDisplaySocket=new WebSocket(url);
    customerDisplaySocket.addEventListener("open",()=>{
      if(customerDisplayLastPayload)customerDisplaySocket.send(JSON.stringify(customerDisplayLastPayload));
    });
    customerDisplaySocket.addEventListener("close",()=>{
      customerDisplayReconnectTimer=setTimeout(connectCustomerDisplaySocket,1800);
    });
    customerDisplaySocket.addEventListener("error",()=>{try{customerDisplaySocket.close()}catch(e){}});
  }catch(e){customerDisplayReconnectTimer=setTimeout(connectCustomerDisplaySocket,1800)}
}
function sendCustomerDisplay(payload){
  const full={
    type:"display:update",
    shopName:state?.settings?.shopName||"ร้านทิพย์เกษรเมี่ยงปลาเผา",
    orderNo:currentDailyOrderNumber(),
    items:cart.map(x=>({id:x.id,name:x.name,price:Number(x.price||0),qty:Number(x.qty||0)})),
    subtotal:subtotal(),
    discount:discount(),
    total:total(),
    paymentMethod:selectedMethod||null,
    cashReceived:Number(lastCashReceived||0),
    change:Number(lastChange||0),
    qrDataUrl:"",
    updatedAt:Date.now(),
    ...payload
  };
  customerDisplayLastPayload=full;
  try{customerDisplayChannel?.postMessage(full)}catch(e){}
  try{if(customerDisplaySocket?.readyState===WebSocket.OPEN)customerDisplaySocket.send(JSON.stringify(full))}catch(e){}
}
function customerDisplayCart(){
  // Keep payment/success screens visible even if renderAll() refreshes the POS behind the modal.
  if($("successModal")&&!$("successModal").classList.contains("hidden"))return;
  if($("paymentModal")&&!$("paymentModal").classList.contains("hidden")){
    if(selectedMethod==="เงินสด"){customerDisplayCash();return}
    if(selectedMethod==="QR"){customerDisplayQr();return}
  }
  sendCustomerDisplay({screen:cart.length?"cart":"idle",paymentMethod:null,cashReceived:0,change:0,qrDataUrl:""});
}
function customerDisplayCash(){
  if(!cart.length)return;
  sendCustomerDisplay({screen:"cash",paymentMethod:"เงินสด",cashReceived:Number(lastCashReceived||0),change:Number(lastChange||0),qrDataUrl:""});
}
function customerDisplayQr(src=""){
  if(!cart.length)return;
  const qr=src||$("paymentQrImage")?.src||state?.settings?.qrImage||"";
  sendCustomerDisplay({screen:"qr",paymentMethod:"QR",cashReceived:total(),change:0,qrDataUrl:qr});
}
function customerDisplaySuccess(order){
  if(!order)return;
  sendCustomerDisplay({
    screen:"success",
    orderNo:order.number,
    items:(order.items||[]).map(x=>({id:x.id,name:x.name,price:Number(x.price||0),qty:Number(x.qty||0)})),
    subtotal:Number(order.subtotal||0),discount:Number(order.discount||0),total:Number(order.total||0),
    paymentMethod:order.payment,cashReceived:Number(order.cashReceived||0),change:Number(order.change||0),qrDataUrl:""
  });
}

initCustomerDisplayBridge();

ensurePosUiPatch();initPaymentKeypad();initPreorderDateTime();initExportDate();initLogin();

setInterval(ensureStockAlertDismissV42,1200);
setTimeout(ensureStockAlertDismissV42,300);


function drawOrderCountLineChartV42(canvasId,labels,values,height=230,showEvery=1){
  const canvas=$(canvasId);if(!canvas||!canvas.parentElement)return;
  const width=Math.max(280,canvas.parentElement.clientWidth-30),dpr=window.devicePixelRatio||1;
  canvas.width=width*dpr;canvas.height=height*dpr;canvas.style.width=width+"px";canvas.style.height=height+"px";
  const ctx=canvas.getContext("2d");ctx.scale(dpr,dpr);ctx.clearRect(0,0,width,height);

  const pad={l:48,r:16,t:22,b:38},W=width-pad.l-pad.r,H=height-pad.t-pad.b;
  const maxValue=Math.max(...values,1);
  const nice=Math.max(4,Math.ceil(maxValue/4)*4);
  const stepY=Math.max(1,Math.ceil(nice/4));

  ctx.font="10px -apple-system,Segoe UI,sans-serif";
  ctx.strokeStyle="#eee4d8";ctx.fillStyle="#8a735e";ctx.lineWidth=1;

  for(let k=0;k<=4;k++){
    const count=stepY*k;
    const y=pad.t+H-H*(count/(stepY*4));
    ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(width-pad.r,y);ctx.stroke();
    ctx.textAlign="right";ctx.fillText(String(count),pad.l-8,y+3);
  }

  ctx.save();
  ctx.translate(14,pad.t+H/2);
  ctx.rotate(-Math.PI/2);
  ctx.textAlign="center";
  ctx.fillStyle="#6f665f";
  ctx.font="11px -apple-system,Segoe UI,sans-serif";
  ctx.fillText("จำนวนออเดอร์",0,0);
  ctx.restore();

  const n=Math.max(values.length,1),step=n>1?W/(n-1):W;
  const maxScale=stepY*4;
  const pts=values.map((v,i)=>({
    x:n>1?pad.l+i*step:pad.l+W/2,
    y:pad.t+H-H*(Number(v||0)/maxScale)
  }));

  if(pts.length){
    ctx.strokeStyle="#E76613";ctx.lineWidth=2.5;ctx.lineJoin="round";ctx.lineCap="round";
    ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();

    pts.forEach((p,i)=>{
      ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#E76613";ctx.lineWidth=2;
      ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fill();ctx.stroke();
      if(i%showEvery===0||i===pts.length-1){
        ctx.fillStyle="#8a735e";ctx.textAlign="center";
        ctx.fillText(labels[i],p.x,pad.t+H+17);
      }
    });
  }

  canvas._v42ChartData={labels,values,pts};
  canvas.onmousemove=canvas.ontouchstart=function(ev){
    const rect=canvas.getBoundingClientRect();
    const clientX=ev.touches?.[0]?.clientX ?? ev.clientX;
    const x=clientX-rect.left;
    if(!pts.length)return;
    let best=0,dist=Infinity;
    pts.forEach((p,i)=>{const d=Math.abs(p.x-x);if(d<dist){dist=d;best=i}});
    const info=canvas.parentElement.querySelector(".chart-hover-v42") || document.createElement("div");
    info.className="chart-hover-v42";
    info.innerHTML=`<b>${labels[best]}</b><span>${values[best]} ออเดอร์</span>`;
    if(!info.parentElement)canvas.parentElement.appendChild(info);
  };
}

function renderSalesCharts(){
  const key=selectedSalesHistoryKeyV53();
  const selectedDate=dateFromLocalKeyV53(key);
  const realtime=secondSeries();
  const hourly=selectedDateHourlyV53(key);
  const week=dailySeriesToSelectedV53(7,key);
  const month=dailySeriesToSelectedV53(30,key);

  const longDate=selectedDate.toLocaleDateString("th-TH",{day:"2-digit",month:"long",year:"numeric"});
  const shortDate=selectedDate.toLocaleDateString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit"});
  if($("todayChartTitle"))$("todayChartTitle").textContent=`จำนวนออเดอร์ตามชั่วโมง · ${longDate}`;
  if($("todayChartSubtitle"))$("todayChartSubtitle").textContent="ช่วงเวลา 06:00–22:00 ของวันที่เลือก";
  if($("liveChartNow"))$("liveChartNow").textContent=shortDate;
  if($("weekChartTitle"))$("weekChartTitle").textContent=`จำนวนออเดอร์ 7 วัน ถึง ${shortDate}`;
  if($("monthChartTitle"))$("monthChartTitle").textContent=`จำนวนออเดอร์ 30 วัน ถึง ${shortDate}`;

  requestAnimationFrame(()=>{
    drawLineChart("secondChart",realtime.labels,realtime.values,235,10);
    drawLineChart("todayChart",hourly.labels,hourly.values,210,2);
    drawLineChart("weekChart",week.labels,week.values,210,1);
    drawLineChart("monthChart",month.labels,month.values,210,5);
    renderTodayChartInsightV41(hourly);
  });
}


/* =====================================================================
   V64 — Optional remote sales dashboard configuration
   ===================================================================== */
(function setupRemoteSyncV64(){
  const urlEl=$("remoteSyncUrlV64"), keyEl=$("remoteShopKeyV64"), saveBtn=$("saveRemoteSyncV64");
  if(urlEl)urlEl.value=state.settings.remoteSyncUrl||"";
  if(keyEl)keyEl.value=state.settings.remoteShopKey||"";
  if(saveBtn)saveBtn.onclick=()=>{
    state.settings.remoteSyncUrl=String(urlEl?.value||"").trim().replace(/\/+$/,"");
    state.settings.remoteShopKey=String(keyEl?.value||"").trim();
    saveState();scheduleBackupV65();flushSyncQueueV65();updateCloudStatusV65();
    alert(state.settings.remoteSyncUrl&&state.settings.remoteShopKey
      ?"บันทึก Cloud Sync แล้ว"
      :"บันทึกแล้ว — หากยังไม่ใส่ URL/Shop Key ระบบจะทำงานแบบ Local เหมือนเดิม");
  };
})();

/* =====================================================================
   V65 — Audit Log + Backup/Remote + Period Revenue + Offline Sync
   ===================================================================== */
let auditFilterV65="all";
function auditActionLabelV65(a){return a||"กิจกรรม"}
function renderAuditV65(){
  const host=$("auditLogListV65");if(!host||currentUser?.role!=="owner")return;
  const q=String($("auditSearchV65")?.value||"").trim().toLowerCase();
  const type=$("auditTypeV65")?.value||"all";
  let rows=(state.auditLog||[]).slice();
  if(type!=="all")rows=rows.filter(x=>String(x.action).includes(type));
  if(q)rows=rows.filter(x=>(`${x.action} ${x.detail} ${x.staffName}`).toLowerCase().includes(q));
  rows=rows.slice(0,150);
  host.innerHTML=rows.length?rows.map(x=>{const d=new Date(x.time);return `<div class="audit-row-v65"><div class="audit-icon-v65">${String(x.action).includes("ยกเลิก")?'!':'•'}</div><div class="audit-main-v65"><b>${escapeHtml(auditActionLabelV65(x.action))}</b><p>${escapeHtml(x.detail||"")}</p></div><div class="audit-meta-v65"><b>${escapeHtml(x.staffName||"ระบบ")}</b><small>${d.toLocaleDateString("th-TH")} ${d.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}</small></div></div>`}).join(""):'<div class="empty">ยังไม่มีกิจกรรม</div>';
}
function ordersInRangeV65(start,end){return state.orders.filter(o=>o.status!=="cancelled"&&new Date(o.time)>=start&&new Date(o.time)<end)}
function startDayV65(d){const x=new Date(d);x.setHours(0,0,0,0);return x}
function addDaysV65(d,n){const x=new Date(d);x.setDate(x.getDate()+n);return x}
function periodRangeV65(type,anchor=new Date()){
  const now=new Date(anchor),today=startDayV65(now);
  if(type==="today")return [today,addDaysV65(today,1),"วันนี้"];
  if(type==="week"){const s=addDaysV65(today,-6);return [s,addDaysV65(today,1),"7 วันล่าสุด"]}
  if(type==="month"){const s=new Date(now.getFullYear(),now.getMonth(),1),e=new Date(now.getFullYear(),now.getMonth()+1,1);return [s,e,now.toLocaleDateString("th-TH",{month:"long",year:"numeric"})]}
  const s=new Date(now.getFullYear(),0,1),e=new Date(now.getFullYear()+1,0,1);return [s,e,`ปี ${now.getFullYear()+543}`]
}
function renderPeriodSummaryV65(type="today"){
  const host=$("periodSummaryV65");if(!host)return;const [s,e,label]=periodRangeV65(type);const rows=ordersInRangeV65(s,e);
  const revenue=rows.reduce((a,o)=>a+Number(o.total||0),0),cash=rows.filter(o=>o.payment==="เงินสด").reduce((a,o)=>a+Number(o.total||0),0),qr=rows.filter(o=>o.payment==="QR").reduce((a,o)=>a+Number(o.total||0),0),avg=rows.length?revenue/rows.length:0;
  const cancelled=state.orders.filter(o=>o.status==="cancelled"&&new Date(o.time)>=s&&new Date(o.time)<e).length;
  const product={};rows.forEach(o=>(o.items||[]).forEach(i=>product[`${i.name} ราคา ${money(i.price)}`]=(product[`${i.name} ราคา ${money(i.price)}`]||0)+Number(i.qty||0)));const top=Object.entries(product).sort((a,b)=>b[1]-a[1])[0];
  $("periodLabelV65").textContent=label;
  host.innerHTML=`<div><small>ยอดขายรวม</small><b>${money(revenue)}</b></div><div><small>ออเดอร์</small><b>${rows.length}</b></div><div><small>เฉลี่ย / บิล</small><b>${money(avg)}</b></div><div><small>QR</small><b>${money(qr)}</b></div><div><small>เงินสด</small><b>${money(cash)}</b></div><div><small>ยกเลิก</small><b>${cancelled}</b></div><div class="wide"><small>ขายดีที่สุด</small><b>${top?`${escapeHtml(top[0])} × ${top[1]}`:"—"}</b></div>`;
}
function initV65(){
  if(!Array.isArray(state.auditLog))state.auditLog=[];if(!Array.isArray(state.syncQueue))state.syncQueue=[];
  document.querySelectorAll("[data-period-v65]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-period-v65]").forEach(x=>x.classList.toggle("active",x===b));renderPeriodSummaryV65(b.dataset.periodV65)});
  $("auditSearchV65")?.addEventListener("input",renderAuditV65);$("auditTypeV65")?.addEventListener("change",renderAuditV65);
  $("backupNowV65")?.addEventListener("click",()=>backupCloudV65(true));
  $("syncNowV65")?.addEventListener("click",()=>flushSyncQueueV65());
  renderAuditV65();renderPeriodSummaryV65("today");updateCloudStatusV65();scheduleBackupV65();flushSyncQueueV65();
}
setTimeout(initV65,250);


(function setupPrinterV66(){
  const ip=$("printerIpV66"), dev=$("printerDeviceIdV66"), enabled=$("printerEnabledV66"),
        autoReceipt=$("autoReceiptV66"), autoQueue=$("autoQueueV66"),
        save=$("savePrinterV66"), test=$("testPrinterV66"), status=$("printerStatusV66"), history=$("printerIpHistoryV76");
  if(!ip)return;
  const fill=()=>{
    if(!Array.isArray(state.settings.printerIpHistory))state.settings.printerIpHistory=[];
    if(history)history.innerHTML=state.settings.printerIpHistory.map(x=>`<option value="${escapeHtml(x)}"></option>`).join("");
    ip.value=state.settings.printerIp||"";
    dev.value=state.settings.printerDeviceId||"local_printer";
    enabled.checked=!!state.settings.printerEnabled;
    autoReceipt.checked=state.settings.autoPrintReceipt!==false;
    autoQueue.checked=state.settings.autoPrintQueue!==false;
    status.textContent=printerConfiguredV66()
      ? "พร้อมตั้งค่า • "+state.settings.printerIp
      : "ยังไม่ได้เปิดใช้";
    status.className="printer-status-v66";
  };
  fill();
  save.onclick=()=>{
    const value=String(ip.value||"").trim();
    if(value && !/^(\d{1,3}\.){3}\d{1,3}$/.test(value)){
      alert("IP เครื่องปริ้นไม่ถูกต้อง กรุณาใส่ IP จริงที่แสดงใน Network Status ของ Epson เช่น 192.168.1.xxx");return;
    }
    state.settings.printerIp=value;
    if(value){state.settings.printerIpHistory=[value,...(state.settings.printerIpHistory||[]).filter(x=>x!==value)].slice(0,8)}
    state.settings.printerDeviceId=String(dev.value||"local_printer").trim()||"local_printer";
    state.settings.printerEnabled=!!enabled.checked;
    state.settings.autoPrintReceipt=!!autoReceipt.checked;
    state.settings.autoPrintQueue=!!autoQueue.checked;
    saveState();
    auditV65?.("แก้ตั้งค่าเครื่องปริ้น",`${value||"ไม่ได้กำหนด IP"} • auto receipt ${autoReceipt.checked?"ON":"OFF"} • queue ${autoQueue.checked?"ON":"OFF"}`);
    fill();
    alert("บันทึกการตั้งค่าเครื่องปริ้นแล้ว");
  };
  test.onclick=async()=>{
    const value=String(ip.value||"").trim();
    if(!value){alert("กรุณาใส่ IP เครื่องปริ้นก่อน");return}
    status.textContent="กำลังทดสอบ…";status.className="printer-status-v66 pending";
    try{
      await printerApiV66("/api/print/test",{printer:{ip:value,deviceId:String(dev.value||"local_printer").trim()||"local_printer"}});
      status.textContent="เชื่อมต่อและส่งงานพิมพ์สำเร็จ ✓";status.className="printer-status-v66 ok";
    }catch(e){
      status.textContent="ไม่สำเร็จ • "+e.message;status.className="printer-status-v66 error";
    }
  };
})();


/* =====================================================================
   V67 — Remote Dashboard button (no dashboard password)
   ===================================================================== */
(function setupRemoteDashboardButtonV67(){
  const btn=$("remoteDashboardBtnV64");
  if(!btn)return;
  const refresh=()=>{
    const publicUrl=String(state.settings.publicDashboardUrl||"").trim();
    const base=String(state.settings.remoteSyncUrl||"").trim().replace(/\/+$/,"");
    btn.href=publicUrl || (base ? base+"/live" : "/live");
    btn.title=publicUrl ? "เปิด Dashboard LIVE ออนไลน์" : (base ? "เปิด Dashboard ออนไลน์" : "เปิด Dashboard บน Raspberry Pi");
  };
  refresh();
  const save=$("saveRemoteSyncV64");
  if(save)save.addEventListener("click",()=>setTimeout(refresh,0));
})();


/* =====================================================================
   V75 — Public Dashboard URL helper
   ===================================================================== */
(function setupPublicDashboardV75(){
  const input=$("publicDashboardUrlV75"),save=$("savePublicDashboardV75"),copy=$("copyPublicDashboardV75"),open=$("openPublicDashboardV75");
  if(!input)return;
  const normalize=v=>{
    let x=String(v||"").trim().replace(/\/+$/,"");
    if(x && !/\/remote-dashboard\.html(?:[?#].*)?$/i.test(x))x+="/remote-dashboard.html";
    return x;
  };
  const paint=()=>{
    const url=normalize(state.settings.publicDashboardUrl||"");
    input.value=url;
    open.href=url||"/live";
    open.textContent=url?"เปิด Dashboard LIVE ออนไลน์":"เปิด Dashboard LIVE ในร้าน";
  };
  save.onclick=()=>{
    const url=normalize(input.value);
    if(url && !/^https:\/\//i.test(url)){alert("ลิงก์สำหรับดูจากนอกบ้านต้องขึ้นต้นด้วย https://");return}
    state.settings.publicDashboardUrl=url; saveState(); paint();
    alert(url?"บันทึกลิงก์ Dashboard LIVE แล้ว":"ล้างลิงก์ออนไลน์แล้ว");
  };
  copy.onclick=async()=>{
    const url=normalize(input.value||state.settings.publicDashboardUrl);
    if(!url){alert("ยังไม่มีลิงก์ออนไลน์ ให้ตั้ง Cloudflare Tunnel ก่อน");return}
    try{await navigator.clipboard.writeText(url);alert("คัดลอกลิงก์ Dashboard LIVE แล้ว")}catch(e){prompt("คัดลอกลิงก์นี้",url)}
  };
  paint();
})();
