---
title: "Golang"
popular: 1
name: "Array"
---

# Array

- varible

  ```
  var array1 []int = []int{1, 2, 3, 4, 5}
  ```

  ```
  var array2 = []int{1, 2, 3, 4, 5}
  ```

  Fix array 3 size

  ```
  var array3 [3]string

  array3[0], array3[1], array3[2] = "boom", "boom2", "boo3"
  ```

- Example

  ```
  func main() {
  	var array1 []int = []int{1, 2, 3, 4, 5}
  	var array2 = []int{1, 2, 3, 4, 5}

  	fmt.Println(array1[0])
  	fmt.Println(array2[0])

  	for _, item := range array1 {
  		fmt.Print(item, ",")
  	}

  	var array3 [3]string

  	array3[0], array3[1], array3[2] = "boom", "boom2", "boo3"

  	for _, item := range array3 {
  		fmt.Print(item, ",")
  	}
  }
  ```
