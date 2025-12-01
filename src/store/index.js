// Importing Modules
import { configureStore } from "@reduxjs/toolkit";

// Slices
import User from "./Slices/User";
import ATM_Sheet from "./Slices/ATM_Sheet";

// Configuring Store
const STORE = configureStore({
  reducer: {
    USER: User,
    ATM_SHEET: ATM_Sheet,
  },
});

// Exporting Store
export default STORE;
