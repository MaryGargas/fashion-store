import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmGwB27mXISQTiaMa8XxLMPtpKTw1Xb84",
  authDomain: "fashion-brand-d6870.firebaseapp.com",
  projectId: "fashion-brand-d6870",
  storageBucket: "fashion-brand-d6870.appspot.com", // ✅ اتعدلت
  messagingSenderId: "302662472305",
  appId: "1:302662472305:web:5fcaee36f5b75d7cef41d0",
  measurementId: "G-TMLTQ6SJY4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);