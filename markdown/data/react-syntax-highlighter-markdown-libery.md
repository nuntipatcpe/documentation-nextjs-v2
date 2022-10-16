---
title: "React"
popular: 0
name: "Syntax highlighter lib"
---

# Syntax highlighter lib

- Install [documentation](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

  ```
  pnpm i react-syntax-highlighter
  ```

  **\* Typescript**

  ```
  pnpm i @types/react-syntax-highlighter
  ```

- Useage

  ```
  import { PrismLight } from "react-syntax-highlighter";
  import * as theme from "react-syntax-highlighter/dist/cjs/styles/prism";
  ```

  ```
  <PrismLight
      language={language === undefined ? "javascript" : language}
      style={theme.dracula}
  >
      {children}
  </PrismLight>
  ```
