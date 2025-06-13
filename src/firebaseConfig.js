// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkrG13hZ_ipKnq07RPuX4HdpZBVSzEmW4",
  authDomain: "fashion-ecommerce-89aad.firebaseapp.com",
  projectId: "fashion-ecommerce-89aad",
  storageBucket: "fashion-ecommerce-89aad.appspot.com",
  messagingSenderId: "261369581291",
  appId: "1:261369581291:web:a7a686b4aa3ca08fc7f8ae",
  measurementId: "G-LX99R5MH7G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ← أهم حاجة أضفناها دي

export { db };