import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    menu: true,
    taskEditor: false,
    modal: false,
    createTask: false
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
    },

    // toggle Modal Reducers
    toggleModal(state, action) {
      state.modal = action.payload;
    },

    // toggle Create Task Reducers
    toggleCreateTask(state, action) {
      state.createTask = action.payload;
    }
  }
});
export const selectButton = (state) => state.button;
export const {
  toggleMenu,
  openMenu,
  toggleTaskEditor,
  toggleModal,
  toggleCreateTask
} = buttonSlice.actions;
export default buttonSlice.reducer;
