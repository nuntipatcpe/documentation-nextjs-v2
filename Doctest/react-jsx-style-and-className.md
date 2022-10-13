# JSX Style & ClassName

- In line

- style =**{{color:'red'}}**

Example 1

```
function App() {
  return (
    <div>
        <h1 style ={{color:'red',textAlign:'center'}}>Data Test Component</h1>
    </div>
  );
}
export default App;
```
Example 2

```
function App() {
  const desing = {
    color:'red',
    textAlign:'center'
    };
  return (
    <div>
      <h1 style ={desing}>Data Test Component</h1>
    </div>
  );
}

export default App;
```

## Create file.css and Import in component

```
import './Items.css'
```
```
const Items = () => {
    const Component = "Component"
    const num = 500
    return (
        <ul>
            <li className='item'>{Component} <span>{num}</span></li>
        </ul>
    )
}
export default Items
```
