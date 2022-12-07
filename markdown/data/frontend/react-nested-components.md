---
title: "React"
popular: 0
name: "Nested components"
---

# Nested components

```
const TitleComponent = () => <h1>Data Test Component</h1>

const ItemComponent = () => {
  return (
    <ul>
      <li>Component 1 <span>100</span></li>
      <li>Component 2 <span>200</span></li>
      <li>Component 3 <span>30</span></li>
    </ul>
  )
}

function App() {
  return (
    <div>
      <TitleComponent />
      <ItemComponent />
    </div>
  );
}

export default App;
```
