// Importing Modules
import { configureStore } from "@reduxjs/toolkit";

// Slices
import User from "./slices/user.slice.js";
import MarkerSheet from "./slices/MarkerSlice";

// Configuring Store
const STORE = configureStore({
  reducer: {
    User: User,
    MARKER_SHEET: MarkerSheet,
  },
});

// Exporting Store
export default STORE;
