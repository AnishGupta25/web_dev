import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzt1Y0Qcbarm9eKSCO_7KgW9jNMKaD59I",
    authDomain: "reels-4cd5e.firebaseapp.com",
    projectId: "reels-4cd5e",
    storageBucket: "reels-4cd5e.appspot.com",
    messagingSenderId: "70807333391",
    appId: "1:70807333391:web:3d5e3cda821ff12281917a"
};

firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();

//object jiske ander login/logout/signup
export const auth = firebase.auth();

export const signInWithGoogle = () => {
  //ki muje popup ko use krke sign up krna with google
  auth.signInWithPopup(provider);
};

export default firebase;