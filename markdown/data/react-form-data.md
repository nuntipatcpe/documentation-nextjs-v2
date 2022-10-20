---
title: "React"
popular: 0
name: "Form Data [sent data to backend]"
---

- if sent data to backend **new FormData()**

  ```
  let data = new FormData();
  data.append("id", String(values.id));
  data.append("name", values.name);
  data.append("price", String(values.price));
  data.append("stock", String(values.stock));
  ```
