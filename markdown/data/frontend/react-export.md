---
title: "React"
popular: 0
name: "Export"
---

# Export

- **export**

  ```
  export let user = {
    id: "boom",
    password: "1234",
  };
  ```

- Useage **{ user }**

  ```
  import { user } from './path';
  ```

---

- **export Default**

  ```
  function App() {
    return (
      &lt;div>app&lt;/div>
    )
  }
  export default App;
  ```

- Usage **App**

  ```
  import App from './path';
  ```
