import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useReducer } from 'reinspect';
import './App.css';
import PresentationalApp, { Force } from './PresentationalApp';

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
  const [dummy, setDummy] = useState<Force[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);
      axios
        .get(
          'https://us-central1-react-exercise2.cloudfunctions.net/app/forces',
        )
        .then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          setDummy(res.data.forces);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    };

    void load();
  }, []);

  return (
    <PresentationalApp
      count={state.count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
      isLoading={isLoading}
      data={dummy}
    />
  );
};

export { counterSlice, EnhancedApp };
