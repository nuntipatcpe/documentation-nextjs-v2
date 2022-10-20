---
title: "Golang"
popular: 1
name: "Map"
---

# Map

- Create map**[** TypeKey **]** TypeValue **{** "key": value **}**

  ```
  var numbers = map[string]int{"one": 1, "two": 2, "three": 3}
  fmt.Println("", numbers["two"])
  ```

  Out

  ```
  2
  ```

- Add map

  ```
  numbers["one"] = 999
  ```

- make ( key , name , value)

  ```
  var coures = make(map[string]map[string]int)
  ```

- Example

  ```
  func main() {
    var numbers = map[string]int{"one": 1, "two": 2, "three": 3}
    fmt.Println("", numbers["two"])

    var colors = make(map[string]string)
    colors["red"] = "#f00"
    colors["green"] = "#0f0f"
    fmt.Println("", colors)
    fmt.Println("", colors["green"])

    //make( key , name , value)
    var coures = make(map[string]map[string]int)

    // coures["product"] = map[string]int{"pice": 200}
    coures["product"] = make(map[string]int)
    coures["product2"] = make(map[string]int)
    coures["product3"] = make(map[string]int)

    coures["product"]["pice"] = 300
    coures["product"]["pice2"] = 300

    coures["product2"]["pice"] = 500
    coures["product3"]["pice"] = 600

    fmt.Println(coures["product"]["pice2"])
    fmt.Println(coures["product2"])
    fmt.Println(coures["product3"])
  }
  ```
