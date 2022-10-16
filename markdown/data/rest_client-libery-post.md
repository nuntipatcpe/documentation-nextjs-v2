---
title: "REST client lib Vscode extention"
popular: 0
name: "POST"
---

# POST

- Form Json

  ```
  ### Login
  POST [url] HTTP/1.1
  Content-Type: application/json

  {
      "username": "admin",
      "password" : "1234"
  }
  ```

- Form data **boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW**

  ```
  boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
  ```

  ```
  ### Create
  POST [url] HTTP/1.1
  Authorization: Bearer `Token`
  Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

  ------WebKitFormBoundary7MA4YWxkTrZu0gW
  Content-Disposition: form-data; name="name";

  Angular
  ------WebKitFormBoundary7MA4YWxkTrZu0gW
  Content-Disposition: form-data; name="stock";

  3000
  ------WebKitFormBoundary7MA4YWxkTrZu0gW
  Content-Disposition: form-data; name="price";

  1800
  ------WebKitFormBoundary7MA4YWxkTrZu0gW
  Content-Disposition: form-data; name="image"; filename="test.jpg"
  Content-Type: image/png

  < ./test.jpeg
  ------WebKitFormBoundary7MA4YWxkTrZu0gW--
  ```
