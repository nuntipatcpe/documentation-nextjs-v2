---
title: "Javascript"
popular: 0
name: "Destructionring"
---

# Destructionring

## Original

- const red = colors[0]

- const blue = colors[1]

- const black = colors[2]

  ```
  const colors = ["red","blue", "black"];
  const red = colors[0]
  const blue = colors[1]
  const black = colors[2]
  ```

---

## Recommend

- const [red,blue,black] = colors

  ```
  const colors = ["red","blue", "black"];
  const [red,blue,black] = colors
  console.log(red)
  console.log(blue)
  console.log(black)
  ```

- const [,,black] = colors

  ```
  const colors = ["red","blue", "black"];
  const [,,black] = colors
  console.log(black)
  ```

---

## Object

```
const product ={
  proName: "Com",
  price: 2000,
  stock: 10
}

const {
  proName: n,
  price: p,
  stock: s
} = product

console.log(n);
console.log(p);
console.log(s);
```

- create same variable name **Recommend**

```
const product ={
  proName : "Com",
  price : 2000,
  stock : 10
}

const {
  proName,
  price,
  stock
} = product

console.log(proName);
console.log(price);
console.log(stock);
```

- may not pull obj all

```
const product ={
    proName : "Com",
    price : 2000,
    stock : 10
}

const {
  proName,
  stock
} = product

console.log(proName);
console.log(stock);
```
