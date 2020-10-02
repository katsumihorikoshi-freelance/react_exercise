import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

import './index.css';
import axios from 'axios';
import App from './App';
import firebaseConfig from './firebase-config';

import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);

void axios.get('/members').then((res) => console.dir(res));

console.log('hoge');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
