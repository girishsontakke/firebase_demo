import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmh67s6arraUDYSdqEXdSEnRJQYkPCjvE",
  authDomain: "firegram-8f2ac.firebaseapp.com",
  databaseURL: "https://firegram-8f2ac.firebaseio.com",
  projectId: "firegram-8f2ac",
  storageBucket: "firegram-8f2ac.appspot.com",
  messagingSenderId: "263375323545",
  appId: "1:263375323545:web:1f9bb4888f775df6c3d308",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, storage, timestamp };
