---
title: "Golang"
popular: 1
name: "Get started"
---

# Get started

- Golang [Downloads](https://go.dev/dl/)

  ```
  go version
  ```

- Go mod [libery](https://pkg.go.dev/std)

  ```
  go mod init name
  ```

- Run

  ```
  go run .\index.go
  ```

- Build **execution file**

  ```
  go build ./file
  ```

## Automatically restart

- node mon

  ```
  npm i -g nodemon
  ```

  ```
  nodemon --exec go run .\index.go
  ```

- go-mon **mac or linux**

  ```
  npx go-mon name.go
  ```
