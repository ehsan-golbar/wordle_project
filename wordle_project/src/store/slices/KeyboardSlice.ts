import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the BoardCell type

// Define the initial state for each row
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

// Create a slice for the board rows
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
      //   let targetRow;
      //   console.log(rowIndex);
      // Determine which row to update

      console.log("here");
      state.row1 = state.row1.map((cell) => {
        if (cell.letter.toUpperCase() === letter.toUpperCase()) {
          //   console.log("here");
          found = true;
          return { ...cell, colorState: newColorState };
        } else {
          return cell;
        }
      });

      if (!found) {
        //   else if (rowIndex === 2) {
        state.row2 = state.row2.map((cell) => {
          if (cell.letter.toUpperCase() === letter.toUpperCase()) {
            // console.log("here");
            found = true;
            return { ...cell, colorState: newColorState };
          } else {
            return cell;
          }
        });
        //  else if (rowIndex === 3) {
        if (!found) {
          state.row3 = state.row3.map((cell) => {
            if (cell.letter.toUpperCase() === letter.toUpperCase()) {
              // console.log("here");
              return { ...cell, colorState: newColorState };
            } else {
              return cell;
            }
          });
        }
      }
      //   }

      //   if (targetRow) {
      //     const cell = targetRow.find((cell) => cell.letter === letter);
      //     if (cell) {
      //       cell.colorState = newColorState;
      //     }
      //   }
    },
  },
});

// Export actions for use in components
export const { updateKeyboardColor } = keyboardSlice.actions;

// Export the reducer to be used in the store
export default keyboardSlice.reducer;
