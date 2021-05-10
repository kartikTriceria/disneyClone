import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClw1_g2sQE_jksG_0jqUDYISvkk8N-75Q",
  authDomain: "tinder-clone-a4ff5.firebaseapp.com",
  projectId: "tinder-clone-a4ff5",
  storageBucket: "tinder-clone-a4ff5.appspot.com",
  messagingSenderId: "414144467357",
  appId: "1:414144467357:web:bdfd226069b3e5a2439f74",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
