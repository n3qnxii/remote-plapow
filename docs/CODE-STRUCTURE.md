# V82 Code Organization

V82 จัดโครงสร้างไฟล์ใหม่โดยไม่เปลี่ยนชื่อไฟล์ runtime หลัก เพื่อให้ติดตั้งบน Raspberry Pi ได้ง่ายและไม่กระทบ path เดิม

## Runtime
`app.js`, `server.js`, `index.html`, `style.css`, `customer.*`, `remote-dashboard.html`

## Scripts
สคริปต์สำหรับ Raspberry Pi และ Public Dashboard อยู่ใน `scripts/`
มี wrapper ที่ root (`install-rpi.sh`, `start-public-dashboard.sh`) เพื่อให้เรียกใช้ง่าย

## History
คู่มือและไฟล์สำรองเวอร์ชันเก่าอยู่ใน `docs/history/` ไม่ปะปนกับไฟล์ runtime

## Printer
ตั้ง IP Epson จากหน้า Owner > จัดการร้านค้า > เครื่องพิมพ์ และทดสอบก่อนใช้งานจริง
