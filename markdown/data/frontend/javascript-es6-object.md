---
title: "Javascript"
popular: 0
name: "Object"
---

# Object

```
const customer = {
    id : "123",
    email : "nuntipatcpexxxoom"
}
console.log(customer);
```

- same variable name

  ```
  const email = "nuntipxxx@gmail.com";
  const id = "123";
  const userName = "boom";
  const customer = {
  id,
  email,
  userName,
  }
  console.log(customer);

  ```

- can set method

  ```
  const email = "nuntipxxxx@gmail.com";
  const customer = {
  id : "123",
  showEmail(name){
  console.log(\`Email ${name} = ${email}\`)
  },
  userName : "boom"
  }
  customer.showEmail("boom");
  ```
