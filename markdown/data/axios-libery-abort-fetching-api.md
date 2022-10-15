---
title: "Axios Lib"
popular: 0
name: "Abort fetching API"
---

# Abort fetching API

- Create controller and signal

  ```
  const controller = AbortController();
  ```

  ```
  const signal = controller.signal;
  ```

- Abort

  ```
  function axiosAbort(){
      controller.abort();
  }
  ```

- Fetching

  ```
  function axiosFetch(){
      axios.get('https://pathApi..',{
          signal : signal
      }).then(res = > console.log(res.data))
  }
  ```
