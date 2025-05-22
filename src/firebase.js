import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfGw9yQMLvPrOnn5lK6dEcvOKm3fogAS4",
  authDomain: "spring25-86b89.firebaseapp.com",
  projectId: "spring25-86b89",
  storageBucket: "spring25-86b89.firebasestorage.app",
  messagingSenderId: "321055015241",
  appId: "1:321055015241:web:c4f9df168cc72100f45a98"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);