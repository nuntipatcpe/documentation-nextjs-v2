# usage

- main.tsx

  ```
  import { store } from "./store/store";
  import { Provider } from "react-redux";
  ```

  ```
  <Provider store={store}>
    <App />
  </Provider>
  ```
- Component.tsx

  - getValueState

  ```
  import {
    demoAction,
    setAsynchronousDemo,
    sliceSelector,
  } from "../../../store/slices/login.slice";
  ``` 
  ```
  let reducer = useSelector(sliceSelector);
  ```

  ```
  {reducer.valueTest}
  ```

  - dispatch

  ```
  let dispatch = useAppDispatch();
  ```
  ```
  dispatch(demoAction("demoTest"));
  dispatch(setAsynchronousDemo(1));
  ```
  
