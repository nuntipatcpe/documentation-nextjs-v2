---
title: "Javascript"
popular: 0
name: "Array Function"
---

# Array Function

- Join

  ```
  console.log(data.join("*"));
  ```

  Example

  ```
  const data = [100, 200, 300];
  console.log(data.join("*"));
  ```

  Output

  ```
  100 * 200 * 300
  ```

- Concat

  ```
  const allData = data.concat(data2);
  ```

  Example

  ```
  const data = [100, 200, 300];
  const data2 = [999];
  const allData = data.concat(data2);
  console.log(allData);
  ```

  Output

  ```
  [ 100, 200, 300, 999 ]
  ```

- Push

  **Add** item to **last** [ index ]

  ```
  data.push(...[99, 999, 9999]);
  ```

  Example

  ```
  const data = [100, 200, 300];
  data.push(...[99, 999, 9999]);
  console.log(data);
  ```

  Output

  ```
  [ 100, 200, 300, 99, 999, 9999 ]
  ```

- Unshipft

  **Add** item to **first** [ index ]

  ```
  data.unshift(...[99, 999, 9999]);
  ```

  Example

  ```
  const data = [100, 200, 300];
  data.unshift(...[99, 999, 9999]);
  console.log(data);
  ```

  Output

  ```
  [ 99, 999, 9999, 100, 200, 300 ]
  ```

- Pop

  **remove** item to **last** [ index ]

  ```
  data.pop()
  ```

  Example

  ```
  const data = [100, 200, 999];
  data.pop();
  console.log(data);
  ```

  ```
  [ 100, 200 ]
  ```

- Shift

  **remove** item to **first** [ index ]

  ```
  data.shift()
  ```

  Example

  ```
  const data = [999, 200, 300];
  data.shift();
  console.log(data);
  ```

  Output

  ```
  [ 200, 300 ]
  ```

- Splice

  **remove** item to **between** x1 - x2 [ index ]

  ```
  data.splice(3,4)
  ```

  Example

  ```
  const data = [100, 200, 300, 99, 999];
  data.splice(3, 4);
  console.log(data);
  ```

  Output

  ```
  [ 100, 200, 300 ]
  ```

  **remove** and **insert** item to **between** a-b [ index ]

  by **specifying** the **3rd parameter**

  ```
  const data = [100, 999, 99, 400, 500];
  data.splice(1, 2, 999);
  console.log(data);
  ```

  Output

  ```
  [ 100, 999, 400, 500 ]
  ```

- Slice

  **pull** item **between** x1 - x2 [ index ]

  **Does not affect old arrays.**

  ```
  data.slice(1,3)
  ```

  Example

  ```
  const data = [99, 200, 300, 999, 999];
  const lastdata = data.slice(1, 3);
  console.log(lastdata);
  ```

  Output

  ```
  [ 200, 300 ]
  ```
