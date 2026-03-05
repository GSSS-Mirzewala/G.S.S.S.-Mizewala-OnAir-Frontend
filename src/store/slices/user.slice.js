// External Modules
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoggedIn: false,
  _id: null,
  miPin: "",
  userType: "GUEST",
  accountStatus: "",
  name: "",
  profilePictureUrl:
    "https://res.cloudinary.com/dbelpwtoy/image/upload/v1767074898/Avatar_si1ngf.svg",
  gender: "",
  dateOfBirth: null,
  email: "",
  phone: null,
  reference: null,
  teacherInfo: {
    status: "",
    assignedClass: null,
    subject: "",
    designation: "",
  },
  studentInfo: {
    class: null,
    parentName: "",
    rollNumber: null,
    section: "",
  },
  adminInfo: {
    permissionsLevel: "",
    status: "",
  },
};

const User = createSlice({
  name: "User",
  initialState: INITIAL_STATE,
  reducers: {
    SETUP_NEW_USER: (state, action) => {
      state.isLoggedIn = true;
      state._id = action.payload._id;
      state.miPin = action.payload.miPin;
      state.userType = action.payload.userType;
      state.accountStatus = action.payload.accountStatus;
      state.name = action.payload.name;
      state.profilePictureUrl = action.payload.profilePictureUrl;
      state.gender = action.payload.gender;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.reference = action.payload.reference;
    },
    SETUP_TEACHER: (state, action) => {
      state.teacherInfo.status = action.payload.status;
      state.teacherInfo.assignedClass = action.payload.assignedClass;
      state.teacherInfo.subject = action.payload.subject;
      state.teacherInfo.designation = action.payload.designation;
    },
    SETUP_STUDENT: (state, action) => {
      state.studentInfo.class = action.payload.class;
      state.studentInfo.parentName = action.payload.parentName;
      state.studentInfo.rollNumber = action.payload.rollNumber;
      state.studentInfo.section = action.payload.section;
    },
    SETUP_ADMIN: (state, action) => {
      state.adminInfo.permissionsLevel = action.payload.permissionsLevel;
      state.adminInfo.status = action.payload.status;
    },
    LOGOUT: () => INITIAL_STATE,
  },
});

export const UserActions = User.actions;
export default User.reducer;
