import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  row1: BoardCell[];
  row2: BoardCell[];
  row3: BoardCell[];
} = {
  row1: [
    { letter: "Q", colorState: "def" },
    { letter: "W", colorState: "def" },
    { letter: "E", colorState: "def" },
    { letter: "R", colorState: "def" },
    { letter: "T", colorState: "def" },
    { letter: "Y", colorState: "def" },
    { letter: "U", colorState: "def" },
    { letter: "I", colorState: "def" },
    { letter: "O", colorState: "def" },
    { letter: "P", colorState: "def" },
  ],
  row2: [
    { letter: "A", colorState: "def" },
    { letter: "S", colorState: "def" },
    { letter: "D", colorState: "def" },
    { letter: "F", colorState: "def" },
    { letter: "G", colorState: "def" },
    { letter: "H", colorState: "def" },
    { letter: "J", colorState: "def" },
    { letter: "K", colorState: "def" },
    { letter: "L", colorState: "def" },
  ],
  row3: [
    { letter: "Delete", colorState: "def" },
    { letter: "Z", colorState: "def" },
    { letter: "X", colorState: "def" },
    { letter: "C", colorState: "def" },
    { letter: "V", colorState: "def" },
    { letter: "B", colorState: "def" },
    { letter: "N", colorState: "def" },
    { letter: "M", colorState: "def" },
    { letter: "Enter", colorState: "def" },
  ],
};

const keyboardSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    updateKeyboardColor: (
      state,
      action: PayloadAction<{
        letter: string;
        newColorState: Colors;
      }>
    ) => {
      let found: boolean = false;
      const { letter, newColorState } = action.payload;

      state.row1 = state.row1.map((cell) => {
        if (cell.letter.toUpperCase() === letter.toUpperCase()) {
          found = true;

          return { ...cell, colorState: newColorState };
        } else {
          return cell;
        }
      });

      if (!found) {
        state.row2 = state.row2.map((cell) => {
          if (cell.letter.toUpperCase() === letter.toUpperCase()) {
            found = true;

            return { ...cell, colorState: newColorState };
          } else {
            return cell;
          }
        });

        if (!found) {
          state.row3 = state.row3.map((cell) => {
            if (cell.letter.toUpperCase() === letter.toUpperCase()) {
              return { ...cell, colorState: newColorState };
            } else {
              return cell;
            }
          });
        }
      }
    },
  },
});

export const { updateKeyboardColor } = keyboardSlice.actions;

export default keyboardSlice.reducer;
