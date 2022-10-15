---
title: "React"
popular: 0
name: "useEffect"
---

# useEffect

- import

  ```
  import {useEffect} from 'react';
  ```

  ```
  useEffect(()=>{
    console.log("useEffect");

    return () => {
      console.log("Destroyed");
    }
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
