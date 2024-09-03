import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Attempt = { row: 0, col: 0 };

// Create a slice for userAttempt
const userAttemptSlice = createSlice({
  name: "userAttempt",
  initialState,
  reducers: {
    setAttempt: (state, action: PayloadAction<Attempt>) => {
      state.row = action.payload.row;
      state.col = action.payload.col;
    },
    resetAttempt: () => initialState, // Reset the attempt to the initial state
  },
});

// Export actions for use in components
export const { setAttempt, resetAttempt } = userAttemptSlice.actions;

// Export the reducer to be used in the store
export default userAttemptSlice.reducer;
