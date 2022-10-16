---
title: "React"
popular: 0
name: "Markdown to jsx lib"
---

# Markdown to jsx lib

- Install [documentation](https://www.npmjs.com/package/markdown-to-jsx)

  ```
  pnpm i markdown-to-jsx
  ```

- Useage

  ```
  import Markdown from "markdown-to-jsx";

  ```

  ```
  <Markdown
    options={{
      overrides: {
        code: {
        },
      },
    }}
  >
    {content}
  </Markdown>
  ```
