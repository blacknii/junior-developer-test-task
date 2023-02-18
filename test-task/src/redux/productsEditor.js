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
    addX: (state, action) => {
      state.protucts.push(action.payload);
    },
    addY: (state) => {
      state.protucts.push("zero");
    },
    arrRemoveAmount: (state) => {
      state.protucts = state.protucts.filter((task) => !task.Ischecked);
    },
    arrCheker: (state, action) => {
      state.protucts = state.protucts.map((task) => {
        if (task.SKU === action.payload) {
          task.Ischecked = !task.Ischecked;
        }
        return task;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addX, addY, arrRemoveAmount, arrCheker } =
  productsEditorSlice.actions;

export default productsEditorSlice.reducer;
