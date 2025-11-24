import { createSlice } from "@reduxjs/toolkit";

const ATM_Sheet_Slice = createSlice({
  name: "ATM_Sheet",
  initialState: [],
  reducers: {
    Mark: (state, action) => {
      const entryIndex = state.findIndex(
        (entry) => entry.ID === action.payload.ID
      );

      if (entryIndex !== -1) {
        // Update existing Attendence entry Status
        state[entryIndex] = {
          ...state[entryIndex],
          ...action.payload,
        };
      } else {
        state.push(action.payload); // Mark new Attendence
      }
    },
  },
});

export const ATM_Sheet_Actions = ATM_Sheet_Slice.actions;
export default ATM_Sheet_Slice.reducer;
