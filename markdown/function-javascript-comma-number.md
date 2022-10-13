# Comma number
- 100 **,** 000

```
 const formathNumber =(num)=>{
        // return num.toString().replace(/(\b)(?=(\d{3})+{?!\d))/g,'$1,')
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
```