import { Posts } from "@/models/post.model";
import { Action, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  search: string;
  menubarTitle: Array<string>;
  title: Posts;
};
const initialValues: initialStateType = {
  search: "",
  menubarTitle: [""],
  title: {
    posts: [
      {
        slug: "",
        frontmatter: {
          name: "",
          popular: 0,
          title: "",
        },
      },
    ],
  },
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
    getTitle(state: initialStateType, { payload }) {},
  },
});

export const { search, setMenubarTital, getTitle } = searchSlice.actions;
export const searchSelector = (store: RootState) => store.postReducer;
export default searchSlice.reducer;
