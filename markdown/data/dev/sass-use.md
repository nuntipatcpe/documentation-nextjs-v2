---
title: "Sass"
popular: 0
name: "@Use"
---

# @Use

- **@use'./path';**

## usage

- \_color.scss

  ```
  $color-1:#ccc
  ```

- \_navBar.scss

  - Default

    ```
    @use './utils/color'
    ```

    ```
    .navBar{
        background-color: color$.color-1;
    }
    ```

  - change name **as col**

    ```
    @use './utils/color' as col
    ```

    ```
    .navBar{
        background-color: col$.color-1;
    }
    ```

  - all **as**

    ```
    @use './utils/color' as *
    ```

    ```
    .navBar{
        background-color: $.color-1;
    }
    ```
