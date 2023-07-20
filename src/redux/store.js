import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

export const Store = configureStore({
  reducer: Reducers,
  middleware: [thunk],
});
