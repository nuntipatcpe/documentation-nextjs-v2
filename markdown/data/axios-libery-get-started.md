---
title: "Axios Lib"
popular: 1
name: "Get started"
---

# Get started

- pnpm Install

  ```
  pnpm i axios
  ```

- Request **method** aliases

  - axios.**request**(config)
  - axios.**get**(url[ , config])
  - axios.**delete**(url[ , config])
  - axios.**head**(url[ , config])
  - axios.**options**(url[ , config])
  - axios.**post**(url[ , data[ , config]])
  - axios.**put**(url[ , data[ , config]])
  - axios.**patch**(url[ , data[ , config]])

## GET Method

- basic

  ```
  axios.get('https://pathApi..')
      .then(res => console.log(res.data))
  ```

- catch

  ```
  axios.get('https://pathApi..')
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  ```

## POST Method

```
axios.post('https://pathApi..',
    {
        username: 'nuntipat',
        password: '1234'
    })
.then(res => console.log(res.data))
.catch(error => console.log(error))
```
