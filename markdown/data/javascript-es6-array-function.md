---
title: "Javascript"
popular: 0
name: "Array Function"
---

# Array Function

- Join

  ```
  const data =[100,200,300]
  console.log(data)
  console.log(data.join())
   console.log(data.join("\*"))
  console.log(data.join(""))
  ```

- Concat

  ```
  const data =[100,200,300]
  const data2 =[400]
  const allData = data.concat(data2)
  console.log(allData)
  ```

- Push

**Add** item to **last** [ index ]

```
const data =[100,200,300];
data.push(...[500,100,2000])
console.log(data);
```

- Unshipft

**Add** item to **first** [ index ]

```
const data =[100,200,300];
data.unshift(999)
console.log(data);
```

- Pop

**remove** item to **last** [ index ]

```
const data =[100,200,300];
data.pop()
console.log(data);
```

- Shift

**remove** item to **first** [ index ]

```
const data =[100,200,300];
data.shift()
console.log(data);
```

- Splice

**remove** item to **between** x1 - x2 [ index ]

```
const data =[100,200,300,400,500];
data.splice(3,4)
console.log(data);
```

**remove** and **insert** item to **between** a-b [ index ]

by **specifying** the **3rd parameter**

```
const data =[100,200,300,400,500];
data.splice(1,2,999)
console.log(data);
```

## Slice

- **pull** item **between** x1 - x2 [ index ]
- **Does not affect old arrays.**

```
const data =[100,200,300,400,500];
const lastdata = data.slice(1,3)
console.log(lastdata);
```

---

## Search in Array

- indexOf

**return index**

```
const data =[100,200,300,400,500]
const index = data.indexOf(500)
console.log(index)
```

- fine

**return data**

```
const data =[100,200,300,400,500]
const search = data.find(e=>e===100)
console.log(search);
```

- fineIndex

**return index**

```
const data =[100,200,300,400,500]
const search = data.findIndex(e=>e===300)
console.log(search);
```
