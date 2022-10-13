# Client side data fetching

- **SWR** stale-while-revalidate

  - swr [Doc](https://www.npmjs.com/package/swr) [Doc2](https://swr.vercel.app/)

    ```
    pnpm i swr
    ```

  - axios

    ```
    pnpm i axios
    ```

- Exam

```
import axios from "axios";
import useSWR from "swr";
import React from "react";

export default function Client() {
    //   const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const fetcher = (...args) => axios(...args).then((res) => res.data);

    const url = " ";
    const { data, error } = useSWR(url, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return <h1>{JSON.stringify(data)}</h1> ;
}
```

- useEffect

  ```
  function Client() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/profile-data')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return <h1>{JSON.stringify(data)}</h1> ;
  }
  ```
