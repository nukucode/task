import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionToggleValue: false,
  createCollectionToggleValue: false,
};

export const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    collectionToggle: (state) => {
      state.collectionToggleValue = !state.collectionToggleValue;
    },
    createCollectionToggle: (state, action) => {
      state.createCollectionToggleValue = action.payload;
    },
  },
});

export const { collectionToggle, createCollectionToggle } =
  toggleSlice.actions;

export default toggleSlice.reducer;
