import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3Qq3jBEEnOVe-FrVrO_5gD2AIT-cRkkw",
  authDomain: "blogo-next.firebaseapp.com",
  projectId: "blogo-next",
  storageBucket: "blogo-next.appspot.com",
  messagingSenderId: "544268700498",
  appId: "1:544268700498:web:858e371290c0877e30c88b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const googleAutoProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

//helper functions

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();

  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
