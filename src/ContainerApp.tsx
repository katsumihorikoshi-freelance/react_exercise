import React, { FC } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useReducer } from 'reinspect';
import './App.css';
import PresentationalApp from './PresentationalApp';

type CounterState = { count: number };
const initialState: CounterState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrement: (state) => ({ ...state, count: state.count - 1 }),
    increment: (state) => ({ ...state, count: state.count + 1 }),
  },
});

const EnhancedApp: FC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count }),
    1,
  );
  const { add, decrement, increment } = counterSlice.actions;

  return (
    <PresentationalApp
      count={state.count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedApp;
