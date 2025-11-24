// Importing Modules
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_INFO = {
  ID: null,
  USTA_PIN: null,
  NAME: "Guest",
  USER_TYPE: "GUEST",
  IS_LOGGED_IN: null,
};

const User_Slice = createSlice({
  name: "User",
  initialState: INITIAL_USER_INFO,
  reducers: {
    SET_USER: (state, action) => {
      return { ...state, ...action.payload, IS_LOGGED_IN: true };
    },
    UPDATE_USER: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Exportion Block
export const User_Info_Actions = User_Slice.actions;
export default User_Slice.reducer;
