import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

//interface_____________________
interface initialStateInterface {
  isAuthen: boolean;
}

//initial________________________
const initialState: initialStateInterface = {
  isAuthen: false,
};

//createSlice________________________
const authenSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAuthen: (state, action: PayloadAction<any>) => {
      state.isAuthen = action.payload;
    },
    singOut: (state, action: PayloadAction<any>) => {
      state.isAuthen = false;
    },
  },
});

//actionCreator
export const { setAuthen, singOut } = authenSlice.actions;
//Selector
export const authenSelector = (store: RootState) => store.authenReducer;

export default authenSlice.reducer;
