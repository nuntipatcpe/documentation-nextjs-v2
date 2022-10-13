# Spread Operator
- **...** Variable Array

<code language="javascript">
const newArr = [100,200,300];
const data = [...newArr,10,20];
console.log(data);
</code>

- variableArr.**push(...newArr)**;

<code language="javascript">
const newArr = [100,200,300];
const data = [10,20];
data.push(...newArr);
console.log(data);
</code>
