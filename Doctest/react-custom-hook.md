# Custom hook

- Create folder **hook**
- Create file name start with **use__** (camelCase) 
- Ex **useCustom.js**

--- 

## Example 

In put **data**

```
const useCalulatePice=(data) =>{
    let allPice = data.reduce((sum,currentValue)=>sum+(currentValue.pice*currentValue.quality),0);
    let tax = ((7/100)*allPice);
    let sum = allPice-tax;

    return {allPice,tax,sum};
}

export default useCalulatePice
```
Out put **allPice,tax,sum**

## usage 
```
import useCalulatePice from "../../hooks/useCalulatePice";
```

```
const {allPice,tax,sum}  = useCalulatePice(data);
```