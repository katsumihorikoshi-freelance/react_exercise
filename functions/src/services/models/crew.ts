import { firestore } from 'firebase/app';

export type Force = {
  id?: string;
  code: string;
  forceCode: string;
  name: string;
  nameReading: string | null;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankForce: Force = {
  code: '',
  forceCode: '',
  name: '',
  nameReading: null,
  createdAt: null,
  updatedAt: null,
};
