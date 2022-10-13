# Array Function
- Join
    <code language="javascript">
    const data =[100,200,300]
    console.log(data)
    console.log(data.join())  
    console.log(data.join("*"))
    console.log(data.join(""))
    </code>

---

- Concat
    <code language="javascript">
    const data =[100,200,300]
    const data2 =[400]
    const allData = data.concat(data2)
    console.log(allData)
    </code>
    
---

- Push

**Add** item to **last** [ index ]

<code language="javascript">
const data =[100,200,300];
data.push(...[500,100,2000])
console.log(data);
</code>

---

- Unshipft

**Add** item to **first** [ index ]

<code language="javascript">
const data =[100,200,300];
data.unshift(999)
console.log(data);
</code>

---

- Pop

**remove** item to **last** [ index ]

<code language="javascript">
const data =[100,200,300];
data.pop()
console.log(data);
</code>
---

- Shift

**remove** item to **first** [ index ]

<code language="javascript">
const data =[100,200,300];
data.shift()
console.log(data);
</code>

---

- Splice

**remove** item to **between** x1 - x2 [ index ]

<code language="javascript">
const data =[100,200,300,400,500];
data.splice(3,4)
console.log(data);
</code>

**remove** and **insert** item to **between** a-b [ index ]

by **specifying** the **3rd parameter**

<code language="javascript">
const data =[100,200,300,400,500];
data.splice(1,2,999)
console.log(data);
</code>

---

## Slice
- **pull** item **between** x1 - x2 [ index ]
- **Does not affect old arrays.**

<code language="javascript">
const data =[100,200,300,400,500];
const lastdata = data.slice(1,3)
console.log(lastdata);
</code>

---

## Search in Array
- indexOf

**return index**

<code language="javascript">
const data =[100,200,300,400,500]
const index = data.indexOf(500)
console.log(index)
</code>

- fine

**return data**

<code language="javascript">
const data =[100,200,300,400,500]
const search = data.find(e=>e===100)
console.log(search);
</code>

- fineIndex

**return index**

<code language="javascript">
const data =[100,200,300,400,500]
const search = data.findIndex(e=>e===300)
console.log(search);
</code>


