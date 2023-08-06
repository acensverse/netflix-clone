// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUfsxzdepyPgH3jyRf159mRnKqfZg4bJg",
  authDomain: "netflix-clone-133a1.firebaseapp.com",
  projectId: "netflix-clone-133a1",
  storageBucket: "netflix-clone-133a1.appspot.com",
  messagingSenderId: "721833333477",
  appId: "1:721833333477:web:6846b2bc606a8e90fc3a0c",
  measurementId: "G-D9TR97GXYY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }