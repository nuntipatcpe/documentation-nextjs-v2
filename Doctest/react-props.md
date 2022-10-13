# React Props

- sent

```
const Items = () => {
    return (
        <div>
             <ul className="item">
               <Item title="Test1 "num ="100"/>
               <Item title="Test2 "num ="200"/>
               <Item title="Test3 "num ="300"/>
               <Item title="Test4 "num ="400"/>
               <Item title="Test5 "num ="500"/>
             </ul>
        </div>

    )
}
export default Items
```

- receive

```
const Item =(props)=>{
    const Component = props.title
    const num = props.num
    return (<li>{Component} <span>{num}</span></li>)
}
export default Item
```

- Props Destructuring

```
const Items =({title,num})=>{
    return (<li>{title} <span>{num}</span></li>)
}
```
- Props Array Map

```
import Items from "./Item"
const Transaction = () => {
    const data =[
        {
            title: "Data 1",
            num:7000
        },
        {
            title: "Data 2",
            num:6000
        },
        {
            title: "Data 3",
            num:5000
        },
        {
            title: "Data 4",
            num:4000
        },
    ]
    return (
             <ul className="item">
               {data.map((e)=>{
                   return <Items title={e.title}num = {e.num}/>
               })}
             </ul>
    )
}
export default Transaction

```

- Spread Operator

```
return <Items title={e.title}num = {e.num}/>
```
 to

```
   return <Items {...e}/>
```