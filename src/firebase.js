import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGSS3vXS7FIiLg7fxWuUmmRMTT2DXpwWs",
  authDomain: "uyubananamango.firebaseapp.com",
  projectId: "uyubananamango",
  storageBucket: "uyubananamango.appspot.com",
  messagingSenderId: "912856437828",
  appId: "1:912856437828:web:61e2f89e944144659b1811",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
