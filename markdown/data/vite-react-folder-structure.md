---
title: "Vite React"
popular: 9
name: "Folder structure"
---

# Folder structure

- Components

  ```
  mkdir -p src/components,src/components/layouts,src/components/pages
  ```

- Type script folders

  lib **create-react-component-folder** [view](https://www.npmjs.com/package/create-react-component-folder?activeTab=readme)

  ```
  pnpm install --save-dev create-react-component-folder
  ```

- Layouts

  - no css

    ```
    cd src/components/layouts;
    npx crcf -f --notest --nocss --typescript Aside Header Footer;
    cd ../../..;
    ```

  - css

    ```
    cd src/components/layouts;
    npx crcf -f --notest --typescript Aside Header Footer;
    cd ../../..;
    ```

  - sass

    ```
    cd src/components/layouts;
    npx crcf -f -s --notest --typescript Aside Header Footer;
    cd ../../..;
    ```

- Pages

  - no css

    ```
    cd src/components/pages;
    npx crcf -f --notest --nocss --typescript Home;
    cd ../../..;
    ```

  - css

    ```
    cd src/components/pages;
    npx crcf -f --notest --typescript Home;
    cd ../../..;
    ```

  - sass

    ```
    cd src/components/pages;
    npx crcf -f -s --notest --typescript Home;
    cd ../../..;
    ```
