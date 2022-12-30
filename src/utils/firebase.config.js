import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-auth-1e1f0.firebaseapp.com",
  projectId: "react-auth-1e1f0",
  storageBucket: "react-auth-1e1f0.appspot.com",
  messagingSenderId: "728532478017",
  appId: "1:728532478017:web:e79dc12021ca179655bec0"
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
