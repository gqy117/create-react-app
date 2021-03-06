import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currencyReducer from '../currency/currencyReducer';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
