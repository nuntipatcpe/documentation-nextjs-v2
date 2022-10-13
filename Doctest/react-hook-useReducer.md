# useReducer

- import

```
import { useReducer } from "react";
```

- use

```
function App() {

  const [count,setcont] = useState(0)
  const reducer = (state,action) => {
    switch(action.type){
      case "ADD":
        return state+action.payload
      case "SUB":
        return state+action.payload
      case "CLEAR":
        return 0
    }
  }

  const [result,dispatch] = useReducer(reducer,count)
  return (

    <div align ="center">
      <h1>{result}</h1>
       <button onClick={()=>dispatch({type:"ADD",payload:10})}>ADD</button>
      <button onClick={()=>dispatch({type:"SUB",payload:5})}>DELETE</button>
      <button onClick={()=>dispatch({type:"CLEAR"})}>CANCLE</button>
    </div>
  );
}
export default App;
```
