import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "بياناتك اللي نسختيها",
  authDomain: "بياناتك",
  projectId: "بياناتك",
  storageBucket: "بياناتك",
  messagingSenderId: "بياناتك",
  appId: "بياناتك"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);