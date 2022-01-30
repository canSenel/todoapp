import { createSlice } from "@reduxjs/toolkit";

export interface itemState {
  value: string;
}

const initialState: itemState = {
  value: "add item"
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    add: (state: { value: string }, action: any) => {
      state.value = "m " + action.payload;
    },
    minus: (state: { value: string }, action: any) => {
      state.value = "m " + action.payload;
    },
    storeItem: (state: { value: Array<Object> }, action: any) => {
      state.value = action.payload;
      // console.log("reducerstates", action.payload);
      // console.log("state.value", state.value);
    },
    removeItem: (state: { value: Array<Object> }, action: any) => {
      state.value = [];
      // console.log("reducerstates", action.payload);
      // console.log("state.value", state.value);
    }
  }
});

// Action creators are generated for each case reducer function
export const { add, minus, storeItem, removeItem } = itemSlice.actions;

export default itemSlice.reducer;
