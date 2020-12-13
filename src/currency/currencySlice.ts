import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRow } from '../CurrencyTable';

interface CurrencyState {
  rows: IRow[];
}

const initialState: CurrencyState = {
  rows: [],
};

export const currencySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<IRow[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('load:', action.payload);
      state.rows = action.payload;
    },
  },
});

export const { load } = currencySlice.actions;

export default currencySlice.reducer;
