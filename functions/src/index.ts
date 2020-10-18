import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import { collectionName } from './services/constants';

admin.initializeApp();

// region
const func = functions.region('asia-northeast1');

// fetch collection logic
const fetchByCollectionName = (name: string) =>
  func.https.onRequest(async (req, res) => {
    const snap = await admin.firestore().collection(name).get();
    const data = snap.docs.map((doc) => doc.data());

    res.send({ [name]: data });
  });

export const members = fetchByCollectionName(collectionName.members);
export const forces = fetchByCollectionName(collectionName.forces);
