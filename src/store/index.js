// Importing Modules
import { configureStore } from "@reduxjs/toolkit";

// Slices
import CommonIdentity from "./slices/CommonIdentitySlice";
import SpecialIdentity from "./slices/SpecialIdentitySlice";
import MarkerSheet from "./slices/MarkerSlice";

// Configuring Store
const STORE = configureStore({
  reducer: {
    COMMON_IDENTITY: CommonIdentity,
    SPECIAL_IDENTITY: SpecialIdentity,
    MARKER_SHEET: MarkerSheet,
  },
});

// Exporting Store
export default STORE;
