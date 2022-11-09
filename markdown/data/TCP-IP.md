---
title: "TCP/IP"
popular: 0
name: "TCP/IP"
---

# Transmission Control Protocol/Internet Protocol (TCP/IP)

## The 4 layers of the TCP/IP model

**Application layer**

```
|HTTM GET request|
```

- Hypertext Transfer Protocol **HTTP** [Doc](https://www.extrahop.com/resources/protocols/http/)
- Hypertext transfer protocol secure **HTTPs** [Doc](https://www.cloudflare.com/learning/ssl/what-is-https/)
- File Transfer Protocol **FTP**

**Transport layer**

```
|HTTM GET request| TCP
```

- Responsible for maintaining end-to-end communications across the network
- TCP handles communications between hosts and provides
- วิธีส่งข้อมูล

**Network layer**

```
|HTTM GET request| TCP| IP
```

- ตรวจสอบเส้นทางที่ดีที่สุด ใช้เวลาเท่าไหร แบ่งข้อมูลมูล เป็น packet

- แบ่ง packet เป็น  data fram

- check error

- **Physical layer**

```
|HTTM GET request| TCP| IP
```

- ส่งผ่าน สายไฟ
