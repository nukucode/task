import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../features/buttonSlice";

export const store = configureStore({
  reducer: {
    button: buttonSlice
  }
});
