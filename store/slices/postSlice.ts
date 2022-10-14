import { Posts } from "@/models/post.model";
import { Action, createSlice } from "@reduxjs/toolkit";
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
  },
});

export const { search } = searchSlice.actions;
export const searchSelector = (store: RootState) => store.postReducer;
export default searchSlice.reducer;
