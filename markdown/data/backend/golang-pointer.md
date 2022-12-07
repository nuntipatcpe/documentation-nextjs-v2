---
title: "Golang"
popular: 1
name: "Pointer"
---

# Pointer

- \* Pointer

  ```
  var msgPointer *string = &msg

  fmt.Println(*msgPointer)
  //some message

  fmt.Println(msgPointer)
  //0xc000040250
  ```

- & = Address

  ```
  msg := "some message"
  var msgPointer *string = &msg
  ```

- Example

  ```
  package main

  import "fmt"

  func main() {
      msg := "some message"
      fmt.Println(msg)
      //some message

      var msgPointer *string = &msg

      fmt.Println(*msgPointer)
      //some message

      fmt.Println(msgPointer)
      //0xc000040250

      chengMessage(&msg, "New message 1")
      fmt.Println(msg)
      //New message 1

      chengMessage(msgPointer, "New message 2")
      fmt.Println(msg)
      //New message 2

      chengMessage(msgPointer, "New message 3")
      fmt.Println(*msgPointer)
      //New message 3

  }
  func chengMessage(aPointer *string, newMessage string) {
      *aPointer = newMessage
  }
  ```
