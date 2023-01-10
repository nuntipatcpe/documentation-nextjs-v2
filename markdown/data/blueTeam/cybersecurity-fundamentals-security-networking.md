---
title: "Cybersecurity Fundamentals"
popular: 0
name: "Networking"
---

# Networking

## Computer network types

- LAN (local area network)
- WLAN (wireless local area network)
- WAN (wide area network)
- MAN (metropolitan area network)
- PAN (personal area network)
- SAN (storage area network)
- CAN (campus area network)
- VPN (virtual private network)

## Transmission Control Protocol (TCP)

[TCP](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/transmission-control-protocol--tcp)

- มีการทำ three-way handshake
- มีความปลอดภัยระดับหนึง
- ในการส่งจะมีการจัดลำดับคิว
- จะมีการจับเวลา ข้อมูลมาช้ามีการส่ง Packet ซ้ำ ถ้าข้อมูลมาแล้วสามารถลบ packet ที่ส่งซ้ำไปได้

- Step 1: Establish connection

  - เมื่อคอมสองตัวจะทำการเชื่อมต่อกัน จะทำการ three-way handshake

  - คอมตัวที่ 1 จะส่ง packet SYN (synchronize) bit set to 1

  - คอมตัวที่ 2 จะส่ง packet ACK (acknowledge) bit set to 1 + SYN bit set to 1

  - SYN and ACK bits เป็นส่วนหนึ่งของ TCP header

  - ขั้นตอนนี้ไม่ได้มีการส่งแพ็กเก็ต เมื่อคอมพิวเตอร์ทำ three-way handshake จบก็พร้อมที่จะรับแพ็กเก็ต

![closeCon](/image/TCP/ESCon.svg)

- Step 2: Send packets of data

  - คอมตัวที่ 1 ส่ง packet และ sequence number

  - คอมตัวที่ 2 acknowledges โดยจะ setting the ACK bit และเพิ่ม acknowledgement number ตามความยาวข้อมูลที่ได้รับ

  - sequence number กับ acknowledgement number จะช่วยเช็คข้อมูลว่ามีการตกหล่นหรือ ขาดหายไประหว่างทางไหม

![closeCon](/image/TCP/SedPackets.svg)

- Step 3: Close the connection

  - เมื่อเครื่องได้ปิด หรือขาดการเชื่อมต่อ จะส่ง FIN (finish) bit set to 1
  - อีกเครื่องจะ replies ACK และ another FIN
  - หลังจาก ACK อีกหนึ่งครั้งจากคอมพิวเตอร์ที่เริ่มต้นจะ Close the connection

![closeCon](/image/TCP/Close_con.svg)

## User Datagram Protocol (UDP)

[UPD](https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/)

- เป็นการส่งข้อมูลที่มี เวลาเป็นสำคัญ เช่น live streaming
- ความเชื่อถือต่ำกว่า TCP เพราะไม่ต้องสร้าง connection
- UDP ทำงานเร็วกว่า ง่ายกว่าและมีประสิทธิภาพมากกว่า TCP
- packet มีโอการตกหล่น จะไม่มีการส่ง req ซ้ำ
- เหมาะสำหรับการรับส่งข้อมูลแบบ broadcast และ multicast
- ไม่มีลำดับของข้อมูล

## The Internet Control Message Protocol (ICMP)

- network layer **routers**
- วัตถุประสงค์หลักของ ICMP คือการรายงานข้อผิดพลาด
- ถ้าแพ็กเก็ตของข้อมูลมีขนาดใหญ่เกินไปสำหรับเราเตอร์ เราเตอร์จะทิ้งแพ็กเก็ตและส่งข้อความ ICMP กลับไปยัง source data
- เป็นประโยชน์ในการระบุที่มาของความช้าในเครือข่าย
- ICMP echo-request และ echo-reply มักใช้เพื่อจุดประสงค์ในการดำเนินการ ping
- connectionless protocol: อุปกรณ์หนึ่งไม่จำเป็นต้องเปิดการเชื่อมต่อกับอุปกรณ์อื่นก่อนที่จะส่งข้อความ

## IP Addresses

- Private IP Addresses

  **192.168**.0.0 – **192.168**.255.255 (65,536 IP addresses)

  **172.16**.0.0 – **172.31**.255.255 (1,048,576 IP addresses)

  **10**.0.0.0 – **10**.255.255.255 (16,777,216 IP addresses)

- Public IP Addresses

  อื่นๆ นอกจาก Private IP
