---
title: "Javascript"
popular: 0
name: "Spread Operator"
---

# Spread Operator

- **...** Variable Array

  ```
  const newArr = [100,200,300];
  const data = [...newArr,10,20];
  console.log(data);
  ```

- variableArr.**push(...newArr)**;

  ```
  const newArr = [100,200,300];
  const data = [10,20];
  data.push(...newArr);
  console.log(data);
  ```
