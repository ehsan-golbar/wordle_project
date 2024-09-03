import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Attempt = { row: 0, col: 0, resultOfGame: "process" };

// Create a slice for userAttempt
const userAttemptSlice = createSlice({
  name: "userAttempt",
  initialState,
  reducers: {
    setAttempt: (
      state,
      action: PayloadAction<{ row: number; col: number }>
    ) => {
      state.row = action.payload.row;
      state.col = action.payload.col;
    },
    setResult: (state, action: PayloadAction<{ res: GameResult }>) => {
      state.resultOfGame = action.payload.res;
    },
    resetAttempt: () => initialState, // Reset the attempt to the initial state
  },
});

// Export actions for use in components
export const { setAttempt, resetAttempt, setResult } = userAttemptSlice.actions;

// Export the reducer to be used in the store
export default userAttemptSlice.reducer;
