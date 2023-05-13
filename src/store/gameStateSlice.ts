import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import GameState from "../GameStates";

const initialState = {
  gameState: GameState.Pending,
  guesses: ["...", "...", "...", "...", "..."],
  guessIndex: 0,
};

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setGameState: (state, action) => {
      state.gameState = action.payload.gameState;
    },
    setGuess: (state, action) => {
      const { guess, guessIndex } = action.payload;
      state.guesses[guessIndex] = guess;
    },
    setGuessIndex: (state, action) => {
      state.guessIndex = action.payload.guessIndex;
    },
  },
});

export const { setGameState, setGuessIndex, setGuess } = gameStateSlice.actions;
export const selectGameState = (state: RootState) => state.gameState.gameState;
