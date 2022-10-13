# Export

- **export**

  <code language="javascript">
  export let user = {
    id: "boom",
    password: "1234",
  };
  </code>

- Useage **{ user }**

  <code language="javascript">
  import { user } from './path';
  </code>

---

- **export Default**

  <code language="javascript">
  import React from 'react'
  function App() {
    return (
      &lt;div>app&lt;/div>
    )
  }
  export default App;
  </code>

- Usage **App**

  <code language="javascript">
  import App from './path';
  </code>
