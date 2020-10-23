import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Force } from 'domains/force';

export type ForceState = { forces: Force[] };
const initialState: ForceState = { forces: [] };

export const forceSlice = createSlice({
  name: 'force',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Force[]>) => ({
      ...state,
      forces: action.payload,
    }),
  },
});
