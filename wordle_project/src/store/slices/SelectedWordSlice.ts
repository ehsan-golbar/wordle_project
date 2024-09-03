import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for selectedWord
const initialState: string = "right";

// Create a slice for selectedWord
const selectedWordSlice = createSlice({
  name: "selectedWord",
  initialState,
  reducers: {
    setSelectedWord: (state, action: PayloadAction<string>) => {
      return action.payload; // Set the new selected word
    },
    resetSelectedWord: () => initialState, // Reset the selected word to the initial state
  },
});

// Export actions for use in components
export const { setSelectedWord, resetSelectedWord } = selectedWordSlice.actions;

// Export the reducer to be used in the store
export default selectedWordSlice.reducer;
