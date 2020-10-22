import React, { FC } from 'react';
import { Route } from 'react-router';

import { EnhancedHome } from 'containers/Home';

import './App.css';
import { EnhancedCrews } from 'containers/Crews';

const App: FC = () => (
  <>
    <Route exact path="/" component={EnhancedHome} />
    <Route exact path="/crews" component={EnhancedCrews} />
  </>
);

export default App;
