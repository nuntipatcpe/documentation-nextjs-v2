# Nested components

```
const Title = () => <h1>Data Test Component</h1>
const Item = () => {
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
      <Title />
      <Item />
    </div>
  );
}

export default App;

```
