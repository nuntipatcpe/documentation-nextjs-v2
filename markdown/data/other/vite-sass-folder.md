---
title: "Vite React"
popular: 0
name: "Sass folder"
---

# Sass folder

- Folder split file Sass

  ```
  mkdir -p src/sass/base,src/sass/components,src/sass/layout,src/sass/pages,src/sass/utils;
  New-Item -p src/sass/main.scss
  ```

- Folder not split files

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

- Usage import main.tsx

  **tsconfig.json** "@/sass/_": \["sass/_"]

  ```
  import "@/sass/main.scss";
  ```
