---
title: "Vite React"
popular: 0
name: "sass folder"
---

# main.scss

- Sass

  - Split file Sass

    ```
    mkdir -p src/sass/base,src/sass/components,src/sass/layout,src/sass/pages,src/sass/utils;
    New-Item -p src/sass/main.scss
    ```

  - Not split files

    ```
    mkdir -p src/sass/base,src/sass/utils
    New-Item -p src/sass/main.scss
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

  - index app **tsconfig.json** "@/sass/_": \["sass/_"]

    ```
    import "@/sass/main.scss";
    ```
