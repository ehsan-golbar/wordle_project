import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BoardCell[][] = Array(6)
  .fill(null)
  .map(() =>
    Array(5)
      .fill(null)
      .map(() => ({ letter: "", colorState: "def" }))
  );

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
      action: PayloadAction<{ row: number; col: number; colorState: Colors }>
    ) => {
      const { row, col, colorState } = action.payload;
      if (state[row] && state[row][col]) {
        state[row][col].colorState = colorState;
      }
    },
    resetBoard: () => initialState,
  },
});

export const { setLetter, setColorState, resetBoard } = boardGameSlice.actions;

export default boardGameSlice.reducer;
