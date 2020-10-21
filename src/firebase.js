import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCD1OkPoUvUkIQBt7VbhOUgRKgPwnNpcRk",
  authDomain: "whats-app-clone-614ac.firebaseapp.com",
  databaseURL: "https://whats-app-clone-614ac.firebaseio.com",
  projectId: "whats-app-clone-614ac",
  storageBucket: "whats-app-clone-614ac.appspot.com",
  messagingSenderId: "922142778992",
  appId: "1:922142778992:web:307d06f1f45f43154476b5",
  measurementId: "G-0FZ3TXM6M4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;