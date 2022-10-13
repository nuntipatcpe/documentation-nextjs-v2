# Props Type and Default

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
