import { configureStore } from "@reduxjs/toolkit";
import { gameStateSlice } from "./gameStateSlice";

const store = configureStore({
  reducer: { gameState: gameStateSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
