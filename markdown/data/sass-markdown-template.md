---
title: "Sass"
popular: 0
name: "Markdown Template"
---

# Markdown Template

lib React syntax highlighter

- PrismLight -> theme.**dracula**

  ```
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
    margin-top: 3rem;
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
    color: gold;
  }
  img {
    display: flex;
    box-shadow: 0px 0px 10px 1px #ccc;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    @include md {
      object-fit: contain;
    }
  }

  th,
  td {
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding-left: 1rem;
    height: 50px;
  }

  td {
    border-left: 1px solid #ccc;
  }

  tr:nth-child(even) {
    background: rgba($color: #000000, $alpha: 0.1);
  }

  table {
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    min-width: 30%;
    margin: 0 auto;
    border-collapse: collapse;
    border-radius: 100%;
  }
  }
  ```
