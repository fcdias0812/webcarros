import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-tIzQR5uc7H8MH6G4X0kD70GnokH8wwA",
  authDomain: "webcarros-32ff4.firebaseapp.com",
  projectId: "webcarros-32ff4",
  storageBucket: "webcarros-32ff4.firebasestorage.app",
  messagingSenderId: "300449769655",
  appId: "1:300449769655:web:b62ced78254d928be98532",
  measurementId: "G-VY2H5ZHLTP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
