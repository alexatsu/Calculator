import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./displaySlice";

const store = configureStore({
  reducer: {
    display: displaySlice,
  },
});

export default store;
