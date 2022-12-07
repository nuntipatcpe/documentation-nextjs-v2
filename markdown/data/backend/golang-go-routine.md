---
title: "Golang"
popular: 0
name: "Go Routine"
---

# Go Routine

- Syntax **go** function()

  ```
  go run1()
  ```

- main

  ```
  func main() {
    go run1()
    go run2()
    time.Sleep(5 * time.Second)
  }
  ```

- Thread 1

  ```
  func run1() {
    for i := 0; i < 100; i++ {
      fmt.Println("Run somthing 1")
    }
  }
  ```

- Thread 2

  ```
  func run2() {
    for i := 0; i < 100; i++ {
      fmt.Println("Run somthing 2")
    }
  }
  ```
