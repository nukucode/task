import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    open: true
  },
  reducers: {
    toggleMenu(state, action) {
      state.open = action.payload;
    },

    openMenu(state, action) {
      state.open = action.payload;
    }
  }
});

export const { toggleMenu, openMenu } = menuSlice.actions;
export default menuSlice.reducer;
