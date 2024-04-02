import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBq4Y1VagM_I9AQzkAPVd516loqfJ66zc",
  authDomain: "fir-b7eef.firebaseapp.com",
  projectId: "fir-b7eef",
  storageBucket: "fir-b7eef.appspot.com",
  messagingSenderId: "167344073619",
  appId: "1:167344073619:web:8e16049a01560016361666",
  measurementId: "G-BBGWKM5WRL"
};

export default firebase.initializeApp(firebaseConfig);
