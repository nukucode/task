import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./feature/toggleSlice";

export const store = configureStore({
  reducer: {
    toggleSlice,
  },
});
