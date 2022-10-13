# Server side

- getStaticProps

```
export default function Movies({ movies }) {
    return (
    <div>
        <h1>Movies</h1>
        <ul>
            {movies.map((e, index) => (
                <li key={index}>{e}</li>
            ))}
        </ul>
    </div>
    );
}
```

```
export async function getStaticProps() {
  return {
    props: {
      movies: ["M1", "M2", (Math.random() * 100).toFixed().toString()],
    },
  };
}

```

- getStaticPaths **DynamicRoute**

[id].js

```
http://localhost:3000/DynamicRoute/2
```

```
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
        ],
        fallback: true,
    };
}
```

```

export async function getStaticProps({ params }) {
    return {
        props: {
        data: [
            "M1",
            "M2",
            `Random ${(Math.random() * 100).toFixed().toString()}`,
            `${params.id}`,
        ],
        },
    };
}

```

```
export default function Dynamic({ data }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Load...</div>;
    }
    return (
    <div>
        <h1>data</h1>
        <ul>
            {data.map((e, index) => (
                <li key={index}>{e}</li>
            ))}
        </ul>
    </div>
    );
}
```

- **Fallback** true

  ```
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  ```

- **Fallback** false 404

- getServerSideProps

  ```
  export async function getServerSideProps() {
    return {
        props: {
            movies: ["M1", "M2", (Math.random() * 100).toFixed().toString()],
        },
    };
  }
  ```

  ```
  export default function Movies({ movies }) {
  return (
      <div>
      <h1>Movies</h1>
      <ul>
          {movies.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
      </ul>
      </div>
  );
  }
  ```

- getSlug **\[pid\].js**

  ```
  const router = useRouter();
  const { pid } = router.query;
  ```
