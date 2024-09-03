import { configureStore } from "@reduxjs/toolkit";
import boardGameReducer from "./slices/BoardCellsSlice";
import userAttemptReducer from "./slices/AttemptSlice";

const store = configureStore({
  reducer: {
    boardGame: boardGameReducer,
    userAttempt: userAttemptReducer, // Add the userAttempt reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
