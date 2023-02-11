import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATA = [
  {
    SKU: "JVC200123",
    Name: "Acrne DISC",
    Price: "1.00 $",
    Type: "size",
    Amount: "750",
    Ischecked: false,
  },
  {
    SKU: "JVC25323",
    Name: "Acrne DISC",
    Price: "5.00 $",
    Type: "size",
    Amount: "1700",
    Ischecked: false,
  },
  {
    SKU: "JVC2342343",
    Name: "Acrne DISC",
    Price: "110.00 $",
    Type: "weight",
    Amount: "3",
    Ischecked: false,
  },
  {
    SKU: "JVC523223",
    Name: "Acrne DISC",
    Price: "21.00 $",
    Type: "weight",
    Amount: "7",
    Ischecked: false,
  },
  {
    SKU: "JVC2033",
    Name: "Acrne DISC",
    Price: "12.00 $",
    Type: "dimensions",
    Amount: "24x45x15",
    Ischecked: false,
  },
];

const initialState = {
  protucts: DUMMY_DATA,
};

export const productsEditorSlice = createSlice({
  name: "productsEditor",
  initialState,
  reducers: {
    addX: (state) => {
      state.protucts.push({
        SKU: Math.floor(Math.random() * 100000),
        Name: "Acrne DISC",
        Price: "1.00 $",
        Type: "size",
        Amount: "750",
        Ischecked: false,
      });
    },
    addY: (state) => {
      state.protucts.push("zero");
    },
    arrRemoveAmount: (state, action) => {
      for (let index = 0; index < action.payload; index++) {
        state.protucts.pop();
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addX, addY, arrRemoveAmount } = productsEditorSlice.actions;

export default productsEditorSlice.reducer;
