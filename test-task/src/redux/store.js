import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import arrEditorReducer from "./arrEditor";
import productsEditorReducer from "./productsEditor";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    arrEditor: arrEditorReducer,
    productsEditor: productsEditorReducer,
  },
});
