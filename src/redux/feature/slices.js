import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionToggleValue: false,
  createCollectionToggleValue: false,
  userData: null,
};

export const slices = createSlice({
  name: "slices",
  initialState,
  reducers: {
    collectionToggle: (state) => {
      state.collectionToggleValue = !state.collectionToggleValue;
    },
    createCollectionToggle: (state, action) => {
      state.createCollectionToggleValue = action.payload;
    },
    addUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { collectionToggle, createCollectionToggle, addUser } = slices.actions;

export default slices.reducer;
