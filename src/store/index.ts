import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { miceReducer } from "./features/mice/miceSlice";

export const store = configureStore({
  reducer: {
    mice: miceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
