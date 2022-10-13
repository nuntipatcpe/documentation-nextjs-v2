# useEffect

**Check for changes In application.**
**This will render the new component.**

- import

```
import {useEffect} from 'react';
```

```
useEffect(()=>{
    console.log("useEffect");
},[listener]);
```

---

- Set Interval

  ```
  const [count,setCount] = useState(0);
  ```

  ```
  const doSomThing = () {
      setCount(previus => previus + 1);
  }
  ```

  ```
  useEffect(()=>{

      const intervalId = setInterval(doSomThing,1000)

      //Cleanup
      return () => {
          console.log("Destroyed");
          clearInterval(intervalId);
      }

  },[])
  ```

---

- useEffect feedJSON with Axios

  [API](https://jsonplaceholder.typicode.com/posts)

  Axios

  ```
  yarn add axios
  ```

  ```
  import axios from 'axios'
  import React,{userEffect , useState} from 'react'
  ```

  ```
  const [dataList,setDataList] = useState(null)
  ```

  ```
  useEffect(()=>{
    axios.get(https://jsonplaceholder.typicode.com/posts)
    ,then(res => {
        const {data} = res
        consol.log(data);
    })
  },[])
  ```
