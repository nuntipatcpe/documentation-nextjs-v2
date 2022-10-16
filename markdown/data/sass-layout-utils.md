---
title: "Sass"
popular: 0
name: "Layout utils"
---

# Layout

- \_layout.mixin.scss

  **Flex**

  ```
  @mixin flex($direction: "row") {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;
  }
  ```
