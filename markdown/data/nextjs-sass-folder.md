---
title: "NextJS"
popular: 0
name: "sass folder"
---

# main.scss

- Sass

  - Split file Sass

    ```
    mkdir -p sass/base,sass/components,sass/layout,sass/pages,sass/utils;
    New-Item -p sass/main.scss
    ```

  - Not split files

    ```
    mkdir -p sass/base,sass/utils
    New-Item -p sass/main.scss
    ```

- main.scss

  ```
  //base
  @import'./base'

  //components
  @import'./components'

  //layout
  @import'./layout'

  //pages
  @import'./pages'

  //vendors
  @import'./vendors'

  ```

- Usage

  - _appts.tsx **tsconfig.json** "@/sass/_": \["sass/\_"]

    ```
    import "@/sass/main.scss";
    ```
