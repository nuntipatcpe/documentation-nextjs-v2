---
title: "Sass"
popular: 0
name: "Forward"
---

# Forward

**@forward './path'**

- create **\_index.scss**
- export all file in folder **utils**

- utils

  - \_font.scss
  - \_color.scss
  - \_shadow.scss

- \_index.scss

  ```
  @forward './font';
  @forward './color';
  @forward './shadow';
  @forward './mixin';
  ```

## usage

- $Color-1

  ```
  @use "../util/index.scss" as *;
  ```

- **ut**$Color-1

  ```
  @use "../util/index.scss" as ut;
  ```

- **util**$Color-1

  ```
  @use "../util/index.scss";
  ```
