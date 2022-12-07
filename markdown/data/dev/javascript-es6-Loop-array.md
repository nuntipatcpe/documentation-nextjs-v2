---
title: "Javascript"
popular: 0
name: "Loop"
---

# Loop

- For Loop

  ```
  for (let i = 0; i < 10; i++) {}
  ```

  ```
  const data = [100, 200, 300, 400, 500];
  for (let i = 0; i < data.length; i++) {
    console.log(`Index [${i}] = ${data[i]}`);
  }
  ```

- For Each

  ```
  data.forEach((e) => {});
  ```

  Can't use **break** and **continue**

  ```
  const data =[100,200,300,400,500];
  let i =0;
  data.forEach(e =>{
      i++;
      console.log(`Index [${i}] = ${e}`);
  })
  ```

- For Of

  ```
  for (const element of data) {
  }
  ```

  ```
  const data = [100, 200, 300, 400, 500];
  let i = 0;
  for (const element of data) {
  i++;
  console.log(`Index [${i}] = ${element}`);
  }
  ```
