---
title: "React"
popular: 0
name: "JSX style css"
---

# JSX style css

- Internal css

  ```
  const styles = {
    container : {
      backgroundColor: "#f0f",
      height: 200
    }
  }
  ```

  ```
  return(
    <div style={ styles.container }> </div>
  )
  ```

- External css

  - **Create file.css and Import in component**

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
