import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAscFNXFN8KB2zPWAOjPR1_MC8Moi91H7M",
  authDomain: "readinglistapp-e7d6b.firebaseapp.com",
  projectId: "readinglistapp-e7d6b",
  storageBucket: "readinglistapp-e7d6b.appspot.com",
  messagingSenderId: "83686294878",
  appId: "1:83686294878:web:4e48ea246d96d97ae6bbcf",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
