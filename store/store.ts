import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import postReducer from "./slices/postSlice";
import authenReducer from "./slices/authenSlice";

const reducer = {
  postReducer,
  authenReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
