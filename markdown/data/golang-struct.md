---
title: "Golang"
popular: 1
name: "Struct"
---

# Struct

- Type

  ```
  type product struct {
    name  string
    price int
    stock int
  }
  ```

  ```
  e := product{
  	name:  "Com",
  	price: 100,
  	stock: 3,
  }
  ```

  ```
  func (p product) name() product {
    p.price = 0
    p.stock = 0
    return p
  }
  ```

- packet

  package emp

  ```
  type Employee struct {
    FirstName string
    LastName  string
  }

  func (e Employee) ShowName() {
    fmt.Printf("%s %s ", e.FirstName, e.LastName)
  }
  ```

  package main

  ```
  package main

  import "server/emp"

  func main() {
    e := emp.Employee{
      FirstName: "Name",
      LastName:  "Lastname",
    }
    e.ShowName()
  }
  ```
