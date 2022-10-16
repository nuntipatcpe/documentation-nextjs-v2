---
title: "React"
popular: 0
name: "React copy to clipboard"
---

# React copy to clipboard

- Install [documentation](https://www.npmjs.com/package/react-copy-to-clipboard)

  ```
  pnpm i react-copy-to-clipboard
  ```

  ```
  pnpm i @types/react-copy-to-clipboard
  ```

- Useage

  ```
  import { CopyToClipboard } from "react-copy-to-clipboard";
  ```

  ```
  <CopyToClipboard text={'text copy'} onCopy={() => {}}>
    <button>
      copy
    </button>
  </CopyToClipboard>
  ```
