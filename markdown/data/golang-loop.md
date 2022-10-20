---
title: "Golang"
popular: 0
name: "Loop"
---

# Loop

- For

  ```
  for index := 0; index <= 10; index++ {
  	fmt.Println(index)
  }
  ```

- While

  ```
  index := 0
  for index < 5 {
  	index++
  	fmt.Printf("Index %d\n", index)
  	if index == 3 {
  		break
  	}
  }
  ```

- Foreach

  ```
  for index, items := range conrses {
  	fmt.Printf("%d,%s \n", index+1, items)
  }
  ```

  ```
  for _, items := range conrses {
  	fmt.Printf("%s \n", items)
  }
  ```
