
## store

- store.ts

  ```
  import { configureStore } from "@reduxjs/toolkit";
  import { useDispatch } from "react-redux";

  import sliceReducer from "./slices/sliceDemo.slice";

  const reducer = {
    sliceReducer
  };

  export const store = configureStore({
    reducer,
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch = () => useDispatch<AppDispatch>();

  ```

  **DevTools** redux-logger Mode dev

    ```
    export const store = configureStore({
      reducer,
    devTools
    });
    ```

    Create type useDispatch

    ```
    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;
    export const useAppDispatch = () => useDispatch<AppDispatch>();
    ```
