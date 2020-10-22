import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import express from 'express';
import cors from 'cors';

import { collectionName } from './services/constants';

admin.initializeApp();

// region
const func = functions.region('us-central1');

const expressApp = express();
expressApp.use(cors({}));
expressApp.get('/', (req, res) => {
  res.send({ status: 'alive' });
});

// collection allselect logic
[collectionName.forces, collectionName.crews].forEach((name) => {
  expressApp.get(`/${name}`, async (req, res) => {
    const snap = await admin.firestore().collection(name).get();
    const data = snap.docs.map((doc) => doc.data());

    res.send({ forces: data });
  });
});

exports.app = func.https.onRequest(expressApp);
