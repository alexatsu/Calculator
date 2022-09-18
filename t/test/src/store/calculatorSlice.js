import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  current_value: 0,
}

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    assign_current_value(state, action) {
      state.current_value = action.payload
    },
  },
})

export const { assign_current_value } = calculatorSlice.actions

export default calculatorSlice

export const current_value_selector = (state) => state.calculator.current_value
