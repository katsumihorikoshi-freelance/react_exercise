import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { StateInspector } from 'reinspect';
import { counterSlice, EnhancedApp } from './ContainerApp';
import firebaseConfig from './firebase-config';

import 'semantic-ui-css/semantic.min.css';

import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);

const store = configureStore({ reducer: counterSlice.reducer });

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
