import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
   authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
   measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);