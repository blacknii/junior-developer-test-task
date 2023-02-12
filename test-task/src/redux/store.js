import { configureStore } from "@reduxjs/toolkit";
import productsEditorReducer from "./productsEditor";
import newProductReducer from "./newProduct";

export const store = configureStore({
  reducer: {
    productsEditor: productsEditorReducer,
    newProduct: newProductReducer,
  },
});
