---
title: "Redux lib"
popular: 0
name: "Usage"
---

# usage

- **main.tsx** sent store to component by provider

  ```
  import { store } from "./store/store";
  import { Provider } from "react-redux";
  ```

  ```
  <Provider store={store}>
    <App />
  </Provider>
  ```

- **Component.tsx**

  - useSelector

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

  - useAppDispatch

  ```
  let dispatch = useAppDispatch();
  ```

  ```
  dispatch(demoAction("demoTest"));
  dispatch(setAsynchronousDemo(1));
  ```
