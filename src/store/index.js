// Importing Modules
import { configureStore } from "@reduxjs/toolkit";

// Slices
import CommonInfo from "./slices/CommonInfoSlice";
import SpecialInfo from "./slices/SpecialInfoSlice";
import MarkerSheet from "./slices/MarkerSlice";

// Configuring Store
const STORE = configureStore({
  reducer: {
    COMMON_INFO: CommonInfo,
    SPECIAL_INFO: SpecialInfo,
    MARKER_SHEET: MarkerSheet,
  },
});

// Exporting Store
export default STORE;
