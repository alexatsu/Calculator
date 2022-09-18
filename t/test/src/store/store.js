import { configureStore } from "@reduxjs/toolkit"
import calculatorSlice from "./calculatorSlice.js"

const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
})

export default store
