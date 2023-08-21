import { configureStore } from "@reduxjs/toolkit";
import slices from "./feature/slices";

export const store = configureStore({
  reducer: {
    slices,
  },
});
