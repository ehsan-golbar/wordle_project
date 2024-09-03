import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "right";

const selectedWordSlice = createSlice({
  name: "selectedWord",
  initialState,
  reducers: {
    setSelectedWord: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return action.payload;
    },
    resetSelectedWord: () => initialState,
  },
});

export const { setSelectedWord, resetSelectedWord } = selectedWordSlice.actions;

export default selectedWordSlice.reducer;
