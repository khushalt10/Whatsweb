import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBjHYTlAQpRSAlKY0OhNEYuBZtk0q3SZho",
    authDomain: "real-time-chat-315ac.firebaseapp.com",
    databaseURL: "https://real-time-chat-315ac.firebaseio.com",
    projectId: "real-time-chat-315ac",
    storageBucket: "real-time-chat-315ac.appspot.com",
    messagingSenderId: "520069546310",
    appId: "1:520069546310:web:f4f2a04436d5e584c2a547",
    measurementId: "G-RHGW6FDRV7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;