---
title: "Axios Lib"
popular: 0
name: "Function Async/Await"
---

# Function Async/Await

- Recommend get API **Async/Await**

  ```
  async function getFact(){
      const response = await axios.get('https://pathApi..')
          .then(res=> console.log(res.data))
          .catch(error => console.log(error))
  }
  ```
