import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  search: string;
  menubarTitle: Array<string>;
};
const initialValues: initialStateType = {
  search: "",
  menubarTitle: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialValues,

  reducers: {
    search: (state: initialStateType, actions) => {
      console.log(actions.payload);
      state.search = actions.payload;
    },
    setMenubarTital: (state: initialStateType, actions) => {
      state.menubarTitle = actions.payload;
    },
  },
});

export const { search, setMenubarTital } = searchSlice.actions;
export const searchSelector = (store: RootState) => store.postReducer;
export default searchSlice.reducer;
