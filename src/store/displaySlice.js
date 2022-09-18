import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    display: "",
  },
  reducers: {
    add7(state) {
      state.display = state.display + "7";
    },
    add8(state) {
      state.display = state.display + "8";
    },
    add9(state) {
      state.display = state.display + "9";
    },
    deleteNum(state) {
      state.display = state.display.slice(0, -1);
    },
    add4(state) {
      state.display = state.display + "4";
    },
    add5(state) {
      state.display = state.display + "5";
    },
    add6(state) {
      state.display = state.display + "6";
    },
    increment(state, action) {
      state.display = +state.display + +action.payload;
    },
    add1(state) {
      state.display = state.display + "1";
    },
    add2(state) {
      state.display = state.display + "2";
    },
    add3(state) {
      state.display = state.display + "3";
    },
    decrement(state) {
      state.display = state.display - 1;
    },
    addDot(state) {
      state.display = state.display + ".";
    },
    add0(state) {
      state.display = state.display + "0";
    },
    addFslash(state) {
      state.display = state.display + "/";
    },
    multiply(state) {
      state.display = state.display * 1;
    },
    resetCalc(state) {
      state.display = "";
    }
  },
});
export const { increment, decrement, add7, add8, add9, deleteNum, resetCalc } = displaySlice.actions;
export const displayValue = state => state.display.display
export default displaySlice.reducer;