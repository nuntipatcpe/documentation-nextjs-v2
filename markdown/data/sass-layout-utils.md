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

  **Position center**

  ```
  @mixin position-center($w: 500px, $h: 200px) {
  position: fixed;
  width: $w;
  height: $h;
  top: 50%;
  left: 50%;
  margin-top: calc($h / -2);
  margin-left: calc($w / -2);
  }
  ```
