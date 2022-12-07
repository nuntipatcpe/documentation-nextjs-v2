---
title: "Axios lib"
popular: 0
name: "Multiple api"
---

# Multiple api

Performing multiple concurrent requests

- functionApi_1

  ```
  function getUserAccount() {
    return axios.get('/user/12345');
  }
  ```

- functionApi_2

  ```
  function getUserPermissions() {
    return axios.get('/user/12345/permissions');
  }
  ```

- Promise.all

  ```
  Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
      const acct = results[0];
      const perm = results[1];
    }
  ```
