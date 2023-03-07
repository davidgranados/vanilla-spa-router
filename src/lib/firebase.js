import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Firestore conection

export const onAuthStateChange = (callback) => {
  onAuthStateChanged(auth, callback);
};
