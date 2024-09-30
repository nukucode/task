import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    open: false
  },
  reducers: {
    menuToggle(state) {
      state.open = !state.open;
    },

    closeMenu(state) {
      state.open = false;
    }
  }
});

export const { menuToggle, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
