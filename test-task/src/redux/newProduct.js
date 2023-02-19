import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addingProduct: {
    SKU: "",
    Name: "",
    Price: "",
    Type: "",
    AmountPrototype: ["", "", ""],
    Amount: "",
    Ischecked: false,
  },
};

export const newProductSlice = createSlice({
  name: "newProduct",
  initialState,
  reducers: {
    reset: (state) => {
      state.addingProduct = {
        SKU: "",
        Name: "",
        Price: "",
        Type: "",
        AmountPrototype: ["", "", ""],
        Amount: "",
        Ischecked: false,
      };
    },
    size2Updater: (state) => {
      console.log("Test 77");
      if (state.addingProduct.Type === "dimensions") {
        console.log("Test 78");
        state.addingProduct.Amount =
          state.addingProduct.Amount[0] +
          "x" +
          state.addingProduct.Amount[1] +
          "x" +
          state.addingProduct.Amount[2];
      }
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
    sizePrototypeUpdater: (state, action) => {
      const newDimentions = [...state.addingProduct.AmountPrototype]; // create a copy of the array
      console.log(newDimentions);
      newDimentions[action.payload[1]] = action.payload[0]; // change the desired element
      state.addingProduct.AmountPrototype = newDimentions;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  reset,
  size2Updater,
  SKUUpdater,
  nameUpdater,
  priceUpdater,
  typeUpdater,
  sizeUpdater,
  sizePrototypeUpdater,
} = newProductSlice.actions;

export default newProductSlice.reducer;
