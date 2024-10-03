import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    menu: true,
    taskEditor: false
  },
  reducers: {
    // Menu Reducers
    toggleMenu(state, action) {
      state.menu = action.payload;
    },

    openMenu(state, action) {
      state.menu = action.payload;
    },

    // Task Editor Reducers
    toggleTaskEditor(state, action) {
      state.taskEditor = action.payload;
    }
  }
});
export const selectButton = (state) => state.button;
export const { toggleMenu, openMenu, toggleTaskEditor } = buttonSlice.actions;
export default buttonSlice.reducer;
