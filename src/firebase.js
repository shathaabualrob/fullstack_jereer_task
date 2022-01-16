import firebase from "firebase";
// import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVfqBDeBa3dG9u6AwG1Bf6JAsu0sU6zcU",
  authDomain: "twitter-clone-12353.firebaseapp.com",
  databaseURL: "https://twitter-clone-12353-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-12353",
  storageBucket: "twitter-clone-12353.appspot.com",
  messagingSenderId: "1081247503791",
  appId: "1:1081247503791:web:7aed78f65ea298b4414b5a",
  measurementId: "G-CZ0ENK397L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
