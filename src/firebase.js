// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwD60g5LvnNjOhDlxd-0FfIinehkeIiXM",
  authDomain: "clone-ff3f5.firebaseapp.com",
  projectId: "clone-ff3f5",
  storageBucket: "clone-ff3f5.appspot.com",
  messagingSenderId: "673912701350",
  appId: "1:673912701350:web:d3ffb65b87c78391740f67",
  measurementId: "G-9JWKTF71NH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } ;
