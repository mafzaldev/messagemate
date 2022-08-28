import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApkn7YEMg70NHaW2v41teVQdgTVPkvijA",
  authDomain: "chatter-27642.firebaseapp.com",
  projectId: "chatter-27642",
  storageBucket: "chatter-27642.appspot.com",
  messagingSenderId: "798763299780",
  appId: "1:798763299780:web:c8d0f578bb073c956b2a91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
