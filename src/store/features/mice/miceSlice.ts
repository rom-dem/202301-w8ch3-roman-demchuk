import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mice } from "../../../data/types";

const initialMice: Mice = [];

const miceSlice = createSlice({
  name: "mice",
  initialState: initialMice,
  reducers: {
    loadMice: (currentState, action: PayloadAction<Mice>) => [
      ...action.payload,
    ],
  },
});

export const miceReducer = miceSlice.reducer;
export const { loadMice: loadMiceActionCreator } = miceSlice.actions;
