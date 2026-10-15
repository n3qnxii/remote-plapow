# TIPKESORN POS — V82

ระบบ POS สำหรับร้านทิพย์เกษร เมี่ยงปลาเผา

## โครงสร้าง
- `app.js` — หน้าหลัก POS และการทำงานฝั่งหน้าร้าน
- `server.js` — API, Epson printing และข้อมูลรายงาน
- `index.html` / `style.css` — หน้าหลัก POS
- `customer.html` / `customer.js` / `customer.css` — Customer Display
- `remote-dashboard.html` — Dashboard LIVE
- `assets/` — โลโก้และไฟล์ Epson logo
- `scripts/` — สคริปต์ติดตั้ง Raspberry Pi และ Public Dashboard
- `docs/history/` — คู่มือ/ไฟล์เวอร์ชันเก่า

## ติดตั้ง Raspberry Pi
```bash
chmod +x install-rpi.sh
./install-rpi.sh
```

## เปิดระบบ
```text
POS:      http://<PI-IP>:8080/
LIVE:     http://<PI-IP>:8080/live
DISPLAY:  http://<PI-IP>:8080/customer.html
```

## Public LIVE
```bash
chmod +x start-public-dashboard.sh
./start-public-dashboard.sh
```

> ก่อนเปิด Public LIVE ควรเพิ่ม Login/Authentication หากจะใช้จริงนอกบ้าน
