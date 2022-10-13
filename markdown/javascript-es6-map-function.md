# Map Function
- Parameter  1 = **Element**
- Parameter  2 = **Index**
- Return to **Array** or **Object**

**Array**

<code language="javascript">
const data =[100,200,300,400,500]
const result = data.map((e,i) =>{
    return i ;
})
console.log(result)
</code>

<code language="javascript">
const data =[100,200,300,400,500]
const result = data.map(e=>{
    const a = e*2;
    return a ;
})
console.log(result)
</code>


**Object**


```
const data = [
    {
        day: "01/02/2564",
        test:"Test 01"
    },
    {
        day: "01/05/2564",
        test:"Test 02"
    },
    {
        day: "01/06/2564",
        test:"Test 03"
    }
]

const obj = data.map((e,i)=>{
    return `dat -> ${e.day}+ test -> ${e.test}`
})
console.log(obj)
```