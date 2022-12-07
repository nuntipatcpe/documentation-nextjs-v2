---
title: "Golang"
popular: 1
name: "Slice"
---

# Slice

- **Create slice** (start , fixMaxSize) if size > 5 { maxSize = 10}

  ```
  var numbers = make([]int, 4, 5)
  ```

- Check length

  ```
  len(x)
  ```

- Check capacity

  ```
  cap(x)
  ```

- remove **s[:index]** get value first to index **s[index+1:]** index to last

  ```
  func removeIndex(s []int, index int) []int {
  	return append(s[:index], s[index+1:]...)
  }
  ```

- Example

  ```
  func main() {

  //(start , fixMaxSize) if size > 5 { maxSize = 10}
  var numbers = make([]int, 4, 5)
  numbers = append(numbers, 1)
  numbers = append(numbers, 2)
  numbers = append(numbers, 3)
  numbers = append(numbers, 4)
  numbers = append(numbers, 5)
  numbers = append(numbers, 6)
  showSlice(numbers)

  //Slice
  var numbers2 []int
  numbers2 = append(numbers2, 3)
  numbers2 = append(numbers2, 4)
  showSlice(numbers2)

  }
  ```

  ```
  func showSlice(x []int) {
  	fmt.Printf("length ( len=%d ) Max size ( cap=%d ) slice=%v\n", len(x), cap(x), x)
  }
  ```

  Output

  ```
  length ( len=10 ) Max size ( cap=10 ) slice=[0 0 0 0 1 2 3 4 5 6]
  length ( len=2 ) Max size ( cap=2 ) slice=[3 4]
  ```
