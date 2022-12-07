---
title: "Sass"
popular: 0
name: "Mixin"
---

# Mixin

- Default

  ```
  @mixin nameMixin {

  }
  ```

- Usage

  ```
  @use "../utils/" as *;
  ```

  ```
  nav {
    @include nameMixin;
  }
  ```

- default parameter

  - mixin

    ```
    @mixin btn( $x, $y : 10px, $y : 20px){

    }
    ```

  - useage

    ```
    @use "../utils/" as *;
    ```

    ```
    nav {
      @include btn(10px,0);
    }
    ```
