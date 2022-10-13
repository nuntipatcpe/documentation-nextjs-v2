## Context API

- Create context **StoreContext.js**

```
import { createContext } from "react";

const StoreContext = createContext()

export default StoreContext;
```

- Provider

```
import StoreContext from "pathfile StoreContext.js";
```
```
function App() {

return (
    <StoreContext.Provider value={"value"}>
      <div>

      </div>
    </StoreContext.Provider>
  );
}
export default App;
```

- Consumer

```
import StoreContext from "pathfile StoreContext.js";
```

```
      <StoreContext.Consumer>{(value) =>
        <div>
            {value}
        </div>
        }
      </StoreContext.Consumer>
```