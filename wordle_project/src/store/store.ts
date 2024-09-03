import { configureStore } from "@reduxjs/toolkit";
import boardGameReducer from "./slices/BoardCellsSlice";
import userAttemptReducer from "./slices/AttemptSlice";
import selectedWordReducer from "./slices/SelectedWordSlice";
import keyboardReducer from "./slices/KeyboardSlice";
const store = configureStore({
  reducer: {
    boardGame: boardGameReducer,
    userAttempt: userAttemptReducer,
    selectedWord: selectedWordReducer,
    keyboard: keyboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
