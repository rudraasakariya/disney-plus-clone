import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYQIWTR435z2YcciHex_VC9g-p__O6aPc",
  authDomain: "disney-plus-clone-356006.firebaseapp.com",
  projectId: "disney-plus-clone-356006",
  storageBucket: "disney-plus-clone-356006.appspot.com",
  messagingSenderId: "702757281301",
  appId: "1:702757281301:web:4ffbb57444b2ef9675381c",
  measurementId: "G-VQYZERQ7VZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
