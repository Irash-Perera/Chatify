import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatify-82982.firebaseapp.com",
  projectId: "chatify-82982",
  storageBucket: "chatify-82982.appspot.com",
  messagingSenderId: "343206048651",
  appId: "1:343206048651:web:690169608ca3b0d66df58e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();