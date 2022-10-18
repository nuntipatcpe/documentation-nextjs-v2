import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

//interface_____________________
interface initialStateInterface {
  isAuthen: boolean;
}

//initial________________________
const initialState: initialStateInterface = {
  isAuthen: true,
};

//createSlice________________________
const authenSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAuthen: (state, action: PayloadAction<any>) => {
      state.isAuthen = action.payload;
    },
  },
});

//actionCreator
export const { setAuthen } = authenSlice.actions;
//Selector
export const authenSelector = (store: RootState) => store.authenReducer;

export default authenSlice.reducer;
