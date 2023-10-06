import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3LCfvl13cy-4Po9CD1i-r3NxOw9AN-6M",
  authDomain: "calling-webapp.firebaseapp.com",
  projectId: "calling-webapp",
  storageBucket: "calling-webapp.appspot.com",
  messagingSenderId: "770163387323",
  appId: "1:770163387323:web:e1496c59a3c1e56a60729e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
