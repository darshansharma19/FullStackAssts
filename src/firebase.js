
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjhh1ZeQv4PuJ3bXE_s4_pVPfbkpQe25o",
  authDomain: "project-backend-ff3d5.firebaseapp.com",
  projectId: "project-backend-ff3d5",
  storageBucket: "project-backend-ff3d5.firebasestorage.app",
  messagingSenderId: "153911828414",
  appId: "1:153911828414:web:c19ea7c82dcc3e1e57a3ef",
  measurementId: "G-WRR5W3L4ZS"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app); 
const auth = getAuth(app); 


const analytics = getAnalytics(app);


export { db, auth, addDoc, collection};
