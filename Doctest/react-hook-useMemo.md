# useMemo

- return **Value**
- Caching Data or Optimization
- if value **[_]** not Change with no Update Component.

```
const memorizedRandom = React.useMemo(()=>{
        return Math.random();
    })
    },[ ]);
```

Usage

```
const ChildentComponent = ({a,b} =>{

    const memorizedRandom = React.useMemo(()=>{
        return Math.random();
    })
    },[a]);

    const reandom = Math.random();

    return (
        <div>
            <h1> A/b {a}/{b} </h1>
            <h1> Reandom: {reandom} </h1>
            <h1> memorizedRandom: {memorizedRandom} </h1>
        </div>
    );
};
```
