import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, Timestamp } from "firebase/firestore";

// Function to handle user signup
async function signUpUser(email, username, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email,
      username,
      createdAt: Timestamp.now(),
      progress: { totalSwipes: 0, correctAnswers: 0 },
      studySets: []
    });

    console.log("User signed up & stored:", user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
}
