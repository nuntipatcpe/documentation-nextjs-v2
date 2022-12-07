---
title: "NextJS"
popular: 0
name: "Check rendering utils"
---

# Check rendering

- Client

  ```
  export const isClient = () => typeof window !== "undefined";
  ```

- Server

  ```
  export const isServer = () => typeof window === "undefined";
  ```
