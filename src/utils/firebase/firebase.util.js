// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Form, useSearchParams } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmnkAt4qEI6FjPGTvMdKNPGEb0rKgHOU4",
  authDomain: "crown-clothing-final.firebaseapp.com",
  projectId: "crown-clothing-final",
  storageBucket: "crown-clothing-final.appspot.com",
  messagingSenderId: "713359378536",
  appId: "1:713359378536:web:7f57bf94b9fb35e51ed3dd",
};

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig);
console.log(fireBase);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

//! Storage

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
};
