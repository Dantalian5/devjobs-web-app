// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9dNTVyv--IdNM3Fg4VdP-sDXYhvJxkTY',
  authDomain: 'fem-devjobs.firebaseapp.com',
  projectId: 'fem-devjobs',
  storageBucket: 'fem-devjobs.appspot.com',
  messagingSenderId: '1011590841938',
  appId: '1:1011590841938:web:2b71eb4cd6b20bae53418b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
