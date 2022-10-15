---
title: "React"
popular: 0
name: "Props Type and Default"
---

# Props Type and Default

- lib prop-types

  ```
  npm i prop-types
  ```

- ex_prop **Children component**

  ```
  import PropTypes from 'prop-types'
  ```

  ```
  export default function ex_prop(props){
      return(
          <div>
              {props.name}
          </div>
      )
  }
  ```

- Useage

  Props Type

  ```
  ex_prop.propsType = {
      name: PropTypes.number
  };
  ```

  Default Props

  ```
  ex_prop.defaultProps = {
      name: 10
  };
  ```
