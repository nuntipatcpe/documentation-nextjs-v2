# Rest Parameter
- **(...numberArr)**

<code language="javascript">
sunmation = (...numberArr) =>{
    let total = 0;
    for(let number of numberArr){
        total+=number;
    }
    return total;
};
console.log(sunmation (10,10,11)
</code>