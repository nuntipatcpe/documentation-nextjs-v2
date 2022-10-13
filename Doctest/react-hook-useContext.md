# useContext

Parent Component -----> Childent Component

- TemeContext.js

  ```
  import React from 'react

  const ThemeContext = React.createContext(null);
  export default ThemeContext
  ```

- Parent Component

  ```
  import ThemeContext from "./ThemeContext"
  ```

  ```
      <ThemeContext.Provider value="red">
          <ChildentComponent>
      </ThemeContext.Provider>
  ```

- Childent Component

  ```
  import ThemeContext from "./ThemeContext"
  ```

  ```
  const color = React.useContext(ThemeContext)
  ```

  ```
  <div style{{color}}>
      {color}
  </div>
  ```
