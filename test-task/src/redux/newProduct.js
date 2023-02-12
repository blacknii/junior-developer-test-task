import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addingProduct: {
    SKU: "",
    Name: "",
    Price: "",
    Type: "size",
    Amount: "",
    Ischecked: false,
  },
};

export const newProductSlice = createSlice({
  name: "newProduct",
  initialState,
  reducers: {
    testPrint: (state) => {
      console.log(state.addingProduct.SKU);
    },
    dateUpdater: (state, action) => {
      state.addingProduct.SKU = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { testPrint, dateUpdater } = newProductSlice.actions;

export default newProductSlice.reducer;
