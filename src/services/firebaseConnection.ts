import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZutkKl7ofiuqRIFvDEL7HNBYbx00fgc0",
  authDomain: "webcarros-339db.firebaseapp.com",
  projectId: "webcarros-339db",
  storageBucket: "webcarros-339db.firebasestorage.app",
  messagingSenderId: "247162346959",
  appId: "1:247162346959:web:20e4360d04181a1d1e86ba",
  measurementId: "G-4V64GMSGPG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
