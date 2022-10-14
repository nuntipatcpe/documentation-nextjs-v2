import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  search: string;
  menubarTitle: Array<string>;
};
const initialValues: initialStateType = {
  search: "",
  menubarTitle: [""],
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialValues,

  reducers: {
    search: (state: initialStateType, actions) => {
      state.search = actions.payload;
    },
    setMenubarTital: (state: initialStateType, actions) => {
      state.menubarTitle = actions.payload;
    },
    getTitle(state: initialStateType, actions) {},
  },
});

export const { search, setMenubarTital, getTitle } = searchSlice.actions;
export const searchSelector = (store: RootState) => store.postReducer;
export default searchSlice.reducer;
