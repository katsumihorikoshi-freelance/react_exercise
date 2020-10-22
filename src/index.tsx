import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

import './index.css';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateInspector } from 'reinspect';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { crewSlice } from 'features/crew';
import { forceSlice } from './containers/Home';
import firebaseConfig from './firebase-config';

import 'semantic-ui-css/semantic.min.css';

import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);

const store = configureStore({
  reducer: combineReducers({
    force: forceSlice.reducer,
    crew: crewSlice.reducer,
  }),
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <StateInspector name="EnhancedApp">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StateInspector>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
