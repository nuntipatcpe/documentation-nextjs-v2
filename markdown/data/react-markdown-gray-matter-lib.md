---
title: "React"
popular: 0
name: "Gray matter lib"
---

# Gray matter markdown

- Install [documentation](https://www.npmjs.com/package/gray-matter)

  ```
  pnpm i gray-matter
  ```

- Gray matter is ?

  ```
  ---
  title: Hello
  slug: home
  ---
  <h1>Hello world!</h1>
  ```

  Into an object like this:

  ```
  {
  content: '<h1>Hello world!</h1>',
  data: {
    title: 'Hello',
    slug: 'home'
  }
  }
  ```

- Useage run in server

```
const files = fs.readdirSync("markdown/data");

const posts = files.map((fileName) => {
  const readFile = fs.readFileSync(`markdown/data/${fileName}`, "utf-8");
  const { data: frontmatter,content } = matter(readFile);

  return {
    content
    frontmatter,
  };
});
```
