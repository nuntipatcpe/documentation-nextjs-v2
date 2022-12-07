---
title: "Vite React"
popular: 2
name: "Environment"
---

# File environment (.env)

- .env.development

  ```
  VITE_IS_NAME=0
  ```

- .env.production

  ```
  VITE_IS_NAME=0
  ```

- Useage

  - Run development value= **1**
  - Run production = **2**

  ```
  let value = import.meta.env.VITE_IS_NAME
  ```

- base URL

  ```
  import.meta.env.BASE_URL
  ```
