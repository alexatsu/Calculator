import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    display: 0,
  },
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});
export const { setDisplay } = displaySlice.actions;
export default displaySlice.reducer;