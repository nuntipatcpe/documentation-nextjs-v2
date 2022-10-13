# Loop
- For Loop

```
const data =[100,200,300,400,500];
for(let i =0 ; i<data.length;i ++){
    console.log(`Index [${i}] = ${data[i]}`);
}
```

- For Each

Can't use **break** and **continue**

```
const data =[100,200,300,400,500];
let i =0;
data.forEach(e =>{
    i++;
    console.log(`Index [${i}] = ${e}`);
})
```

- For Of

```
const data =[100,200,300,400,500];
let i =0;
for (const element of data){
    i++;
    console.log(`Index [${i}] = ${element}`);
}
```
