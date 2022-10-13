# Destructionring
## Original
- const red = colors[0]

- const blue = colors[1]

- const black = colors[2]
    <code language="javascript">
    const colors = ["red","blue", "black"];
    const red = colors[0]
    const blue = colors[1]
    const black = colors[2]
    </code>

---

## Recommend

- const [red,blue,black] = colors
    <code language="javascript">
    const colors = ["red","blue", "black"];
    const [red,blue,black] = colors
    console.log(red)
    console.log(blue)
    console.log(black)
    </code>

- const [,,black] = colors
    <code language="javascript">
    const colors = ["red","blue", "black"];
    const [,,black] = colors
    console.log(black)
    </code>

---

## Object
<code language="javascript">
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
</code>

- create same variable name **Recommend**


<code language="javascript">
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
</code>


- may not pull obj all

<code language="javascript">
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
</code>
