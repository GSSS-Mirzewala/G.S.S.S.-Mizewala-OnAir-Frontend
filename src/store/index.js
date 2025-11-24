// Importing Modules
import { configureStore } from "@reduxjs/toolkit";

// Slices
import UserSlice from "./Slices/User";
import ATM_SheetSlice from "./Slices/ATM_Sheet";

// Configuring Store
const STORE = configureStore({
  reducer: {
    USER: UserSlice,
    ATM_SHEET: ATM_SheetSlice,
  },
});

// Exporting Store
export default STORE;
