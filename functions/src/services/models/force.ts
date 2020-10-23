import { firestore } from 'firebase/app';

export type Force = {
  id?: string;
  code: string;
  name: string;
  nameReading: string | null;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankForce: Force = {
  code: '',
  name: '',
  nameReading: null,
  createdAt: null,
  updatedAt: null,
};
