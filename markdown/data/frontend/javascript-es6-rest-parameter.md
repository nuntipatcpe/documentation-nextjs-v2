---
title: "Javascript"
popular: 0
name: "Rest Parameter"
---

# Rest Parameter

- **(...numberArr)**

  ```
  sunmation = (...numberArr) =>{
      let total = 0;
      for(let number of numberArr){
          total+=number;
      }
      return total;
  };
  console.log(sunmation (10,10,11))
  ```

  Output

  ```
  31
  ```
