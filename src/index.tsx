import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootSlice } from 'slice';
import { StateInspector } from 'reinspect';
import EnhancedApp from './ContainerApp';
import firebaseConfig from './firebase-config';

import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);

void axios.get('/members').then((res) => console.dir(res));

const store = configureStore({ reducer: rootSlice.reducer });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <StateInspector name="EnhancedApp">
        <EnhancedApp />
      </StateInspector>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
