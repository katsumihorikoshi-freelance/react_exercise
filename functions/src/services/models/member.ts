import { firestore } from 'firebase/app';

export type Member = {
  id?: string;
  name: string;
  nameReading: string | null;
  bloodType: string | null;
  birthDay: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankMember: Member = {
  name: '',
  nameReading: null,
  bloodType: null,
  birthDay: null,
  createdAt: null,
  updatedAt: null,
};
