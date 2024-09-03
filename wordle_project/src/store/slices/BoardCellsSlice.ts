import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state of the boardGame as a 2D array (6 rows, 5 columns)
const initialState: BoardCell[][] = Array(6)
  .fill(null)
  .map(() =>
    Array(5)
      .fill(null)
      .map(() => ({ letter: "", colorState: "def" }))
  );

// Create a slice for the boardGame
const boardGameSlice = createSlice({
  name: "boardGame",
  initialState,
  reducers: {
    setLetter: (
      state,
      action: PayloadAction<{ row: number; col: number; letter: string }>
    ) => {
      const { row, col, letter } = action.payload;
      if (state[row] && state[row][col]) {
        state[row][col].letter = letter;
      }
    },
    setColorState: (
      state,
      action: PayloadAction<{ row: number; col: number; colorState: string }>
    ) => {
      const { row, col, colorState } = action.payload;
      if (state[row] && state[row][col]) {
        state[row][col].colorState = colorState;
      }
    },
    resetBoard: () => initialState, // Reset the board to the initial state
  },
});

// Export actions for use in components
export const { setLetter, setColorState, resetBoard } = boardGameSlice.actions;

// Export the reducer to be used in the store
export default boardGameSlice.reducer;
