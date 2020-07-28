import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTZSTAvZ3Tl4MJObbG6WWXXDFPoGpWLww",
  authDomain: "crnw-db-react.firebaseapp.com",
  databaseURL: "https://crnw-db-react.firebaseio.com",
  projectId: "crnw-db-react",
  storageBucket: "crnw-db-react.appspot.com",
  messagingSenderId: "450347201371",
  appId: "1:450347201371:web:a2708c95ec2f81e8c9607e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
