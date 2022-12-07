---
title: "Redux lib"
popular: 0
name: "Store "
---

## store

- store.ts

  ```
  import { configureStore } from "@reduxjs/toolkit";
  import { useDispatch } from "react-redux";
  import userReducer from "@/store/slices/userSlice";

  const reducer = {
  users: userReducer,
  };

  export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
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
