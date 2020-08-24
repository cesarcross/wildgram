import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNnp2sZKlQweCDuxqfO1JiASvK_S57F0w",
  authDomain: "wildgram-7811e.firebaseapp.com",
  databaseURL: "https://wildgram-7811e.firebaseio.com",
  projectId: "wildgram-7811e",
  storageBucket: "wildgram-7811e.appspot.com",
  messagingSenderId: "524987814495",
  appId: "1:524987814495:web:6a305081414f0b363e01ea",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
