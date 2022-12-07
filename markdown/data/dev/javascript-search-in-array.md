---
title: "Javascript"
popular: 1
name: "Search in Array"
---

## Search in Array

- indexOf

  **return index**

  ```
  const data = [100, 200, 300, 400, 500];
  const index = data.indexOf(500);
  console.log(index);
  ```

  ```
  4
  ```

- fine

  **return data**

  ```
  const data = [100, 200, 300, 400, 500];
  const search = data.find((e) => e === 100);
  console.log(search);
  ```

  ```
  100
  ```

- fineIndex

  **return index**

  ```
  const data = [100, 200, 300, 400, 500];
  const search = data.findIndex((e) => e === 300);
  console.log(search);
  ```

  ```
  2
  ```
