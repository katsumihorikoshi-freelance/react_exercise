import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

type CounterProps = {
  count?: number;
  add?: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
};

const PresentationalApp: FC<Required<CounterProps>> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <button onClick={() => add}>add</button>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
);

export default PresentationalApp;
