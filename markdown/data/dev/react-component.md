---
title: "React"
popular: 0
name: "Component"
---

# Component

- Create page web by JavaScript that has HTML inserted **JSX** (JavaScript XML)

- The first one is capitalized only. **N**ameComponent.jsx

---

## Functional Component **Recommend**

crate file Name.js outside and apply

```
const Name = ()=>{
    return (
        <h1> External Component </h1>
    )
}
export default Data
```

## Class Component

- component

  ```
  class Data extemds React.Component{
      render(){
          <h1> Class Component </h1>
      }
  }
  ```

- usage

  ```
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <Data/>
  );
  ```
