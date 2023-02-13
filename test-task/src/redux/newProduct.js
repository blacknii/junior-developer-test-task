import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addingProduct: {
    SKU: "",
    Name: "",
    Price: "",
    Type: "Type",
    Amount: "Amount",
    Ischecked: false,
  },
};

export const newProductSlice = createSlice({
  name: "newProduct",
  initialState,
  reducers: {
    testPrint: (state) => {
      console.log(state.addingProduct.SKU);
      console.log(state.addingProduct.Name);
      console.log(state.addingProduct.Price);
      console.log(state.addingProduct.Type);
      console.log(state.addingProduct.Amount);
    },
    SKUUpdater: (state, action) => {
      state.addingProduct.SKU = action.payload;
    },
    nameUpdater: (state, action) => {
      state.addingProduct.Name = action.payload;
    },
    priceUpdater: (state, action) => {
      state.addingProduct.Price = action.payload;
    },
    typeUpdater: (state, action) => {
      console.log("Test");
      state.addingProduct.Type = action.payload;
    },
    sizeUpdater: (state, action) => {
      state.addingProduct.Amount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  testPrint,
  SKUUpdater,
  nameUpdater,
  priceUpdater,
  typeUpdater,
  sizeUpdater,
} = newProductSlice.actions;

export default newProductSlice.reducer;
