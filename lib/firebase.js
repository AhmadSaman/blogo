import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA3Qq3jBEEnOVe-FrVrO_5gD2AIT-cRkkw",
    authDomain: "blogo-next.firebaseapp.com",
    projectId: "blogo-next",
    storageBucket: "blogo-next.appspot.com",
    messagingSenderId: "544268700498",
    appId: "1:544268700498:web:858e371290c0877e30c88b"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export const auth=firebase.auth();
export const firestore=firebase.firestore();
export const storage=firebase.storage();