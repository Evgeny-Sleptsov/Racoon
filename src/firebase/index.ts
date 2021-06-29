import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: 'AIzaSyD_bPmhM8i-7AXzTObaLYn4Q7KUim3IRT8',
  authDomain: 'racoon-app-b6e1b.firebaseapp.com',
  projectId: 'racoon-app-b6e1b',
  storageBucket: 'racoon-app-b6e1b.appspot.com',
  messagingSenderId: '782416872093',
  appId: '1:782416872093:web:33b2332d81f884ff9e0a74',
  databaseURL: 'https://racoon-app-b6e1b-default-rtdb.firebaseio.com/',
  measurementId: 'G-1WE2M4DHY3',
});


const db = firebase.database();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };
export default app;
