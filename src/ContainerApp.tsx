import React, { FC } from 'react';
import { useReducer } from 'reinspect';
import logo from './logo.svg';
import './App.css';
import PresentationalApp from './PresentationalApp';

const CounterActionType = {
  add: 'counter/add',
  decrement: 'counter/decrement',
  increment: 'counter/increment',
} as const;

type ValueOf<T> = T[keyof T];
type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  payload?: number;
};

type CounterState = { count: number };
const initializeState: CounterState = { count: 0 };
const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case CounterActionType.add:
      return {
        ...state,
        count: state.count + (action.payload ?? 0),
      };
    case CounterActionType.decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case CounterActionType.increment:
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
const add = (payload: number): CounterAction => ({
  type: CounterActionType.add,
  payload,
});
const decrement = (): CounterAction => ({
  type: CounterActionType.decrement,
});
const increment = (): CounterAction => ({
  type: CounterActionType.increment,
});

const EnhancedApp: FC = () => {
  const [state, dispatch] = useReducer(
    counterReducer,
    initializeState,
    (state) => state,
    1,
  );

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
