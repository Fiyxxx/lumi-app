import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARhZuuMPZejMyHzI2QVcDTtJQbEKlV5R0",
    authDomain: "lumi-app-b6b41.firebaseapp.com",
    projectId: "lumi-app-b6b41",
    storageBucket: "lumi-app-b6b41.firebasestorage.app",
    messagingSenderId: "555563529816",
    appId: "1:555563529816:web:c8732dff3ba4a492b7fc2d"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };