import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./displaySlice";

export default configureStore({
    reducer: {
        display: displaySlice,
    }
})