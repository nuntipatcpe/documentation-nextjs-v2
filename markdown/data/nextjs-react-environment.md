---
title: "NextJS"
popular: 2
name: "environment"
---

# File environment (.env)

- .env.development

  ```
  NEXT_PUBLIC_NAME=0
  ```

- .env.production

  ```
  NEXT_PUBLIC_NAME=1
  ```

- Useage

  - Run development value= **0**
  - Run production = **1**

  ```
  let value = process.env.NEXT_PUBLIC_NAME
  ```
