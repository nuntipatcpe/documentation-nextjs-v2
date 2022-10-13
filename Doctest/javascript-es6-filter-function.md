# Filter
- Return to **Array** or **Object** that meet the conditions

**Array**

```
const data = [10,20,30]
const result = data.filter(e=>{
    return e>20;
})
console.log(result)
```
**Object**

```
const data =[
    {
        id:"1",
        name:"boom",
        salary:10000
    },
    {
        id:"2",
        name:"boom2",
        salary:20000
    },
    {
        id:"3",
        name:"boom3",
        salary:30000
    },
    {
        id:"4",
        name:"boom4",
        salary:40000
    },
]

const result = data.filter(e=>{
    return e.name=="boom"
})
console.log(result)
```