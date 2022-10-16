---
title: "React"
popular: 9.5
name: "Create react folder lib"
---

# Create react component folder

- Install [documentation](https://www.npmjs.com/package/create-react-component-folder)

  ```
  pnpm install --save-dev create-react-component-folder
  ```

- Useage

  ```
  npx crcf -f --notest --nocss --typescript Aside Header Footer;
  ```

- Options:

  - -V, --version output the version number
  - --typescript Creates Typescript component and files
  - --nocss No css file
  - --notest No test file
  - --cssmodules Creates css/less/scss file with .module extensions. Example
  - --reactnative Creates React Native components
  - --createindex Creates index.js file for multple component imports
  - --graphql Creates a index.graphql file
  - --stylesext Creates a Component.styles.(ts|js) file
  - -f, --functional Creates React stateless functional component
  - -j, --jsx Creates the component file with .jsx extension
  - -l, --less Adds .less file to component
  - -s, --scss Adds .scss file to component
  - -p, --proptypes Adds prop-types to component
  - -u, --uppercase Component files start on uppercase letter
  - -h, --help output usage information
  - -sb, --stories Add Storie file to component
  - -ns, --nosemi No semicolons
  - -sq, --singlequote Formats output files with single quotes
  - -x, --namedexports Creates files using named exports
