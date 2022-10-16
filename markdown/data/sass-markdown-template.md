---
title: "Sass"
popular: 0
name: "Markdown Template"
---

# Markdown Template

lib React syntax highlighter

- PrismLight -> theme.**dracula**

  ```
  @use "../utils/" as *;
  .markdown {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    padding: 2rem;
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 3rem 0;
    }
    h1 {
      border-bottom: 1px solid rgba($color: rgb(95, 95, 95), $alpha: 0.5);
      padding-bottom: 1rem;
    }
    span {
      letter-spacing: 0.5px;
    }
    ol {
      li {
        margin-bottom: 5px;
      }
    }

    li {
      padding: 0.2rem 0;
    }
    a {
      color: blueviolet;
      text-decoration: underline;
    }
    strong {
      color: $primary-2;
    }
    .img_markdown {
      margin: 2rem 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        box-shadow: 0px 0px 10px 1px #ccc;
        max-width: 500px;
        width: 100%;
        @include md {
          object-fit: contain;
        }
      }
    }
  }
  ```