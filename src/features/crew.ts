import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Crew } from 'domains/crew';

export type CrewState = { crews: Crew[] };
const initialState: CrewState = { crews: [] };

export const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Crew[]>) => ({
      ...state,
      crews: action.payload,
    }),
  },
});
