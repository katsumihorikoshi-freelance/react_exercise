import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import express from 'express';
import cors from 'cors';

import { collectionName } from './services/constants';

admin.initializeApp();

// region
const func = functions.region('us-central1');

// fetch collection logic
const fetchByCollectionName = (name: string) =>
  func.https.onRequest(async (req, res) => {
    const snap = await admin.firestore().collection(name).get();
    const data = snap.docs.map((doc) => doc.data());

    res.send({ [name]: data });
  });

export const members = fetchByCollectionName(collectionName.members);

const expressApp = express();
expressApp.use(cors({}));
expressApp.get('/', (req, res) => {
  res.send({ status: 'alive' });
});

expressApp.get('/forces', async (req, res) => {
  const snap = await admin.firestore().collection('forces').get();
  const data = snap.docs.map((doc) => doc.data());

  res.send({ forces: data });
});

exports.app = func.https.onRequest(expressApp);
