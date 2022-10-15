---
title: "Axios Lib"
popular: 0
name: "Config axios API"
---

# Config axios API

- Post

  ```
  axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
  ```

- GET

  ```
  axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });

  ```

  useage

  ```
  axios('/user/12345');
  ```
