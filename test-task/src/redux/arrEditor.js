import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: ["zero", "one", "zero", "one"],
};

export const arrEditorSlice = createSlice({
  name: "arrEditor",
  initialState,
  reducers: {
    arrAddZero: (state) => {
      console.log("Test");
      state.arr.push("zero");
    },
    arrAddOne: (state) => {
      state.arr.push("zero");
    },
    arrRemove: (state, action) => {
      for (let index = 0; index < action.payload; index++) {
        state.arr.pop();
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { arrAddZero, arrAddOne, arrRemove } = arrEditorSlice.actions;

export default arrEditorSlice.reducer;
