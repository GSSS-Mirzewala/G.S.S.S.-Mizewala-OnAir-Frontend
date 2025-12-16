import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_INFO = {
  isLoggedIn: false,
  userType: "GUEST",
  name: null,
  gender: null,
  photoUrl: null,
};

const User_Slice = createSlice({
  name: "User",
  initialState: INITIAL_USER_INFO,
  reducers: {
    SET_USER: (state, action) => {
      state.isLoggedIn = true;
      state.userType = action.payload.userType;
      state.name = action.payload.name;
      state.gender = action.payload.gender;
      state.photoUrl = action.payload.photoUrl;
    },

    UPDATE_USER: (state, action) => {
      Object.assign(state, action.payload);
    },

    LOGOUT: () => INITIAL_USER_INFO,
  },
});

export const User_Actions = User_Slice.actions;
export default User_Slice.reducer;
