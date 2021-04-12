import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhEfsWwVUTqXO-ILIL3dFNsTP7ry6qUrM",
    authDomain: "colonoscopia-webversion.firebaseapp.com",
    databaseURL: "https://colonoscopia-webversion-default-rtdb.firebaseio.com",
    projectId: "colonoscopia-webversion",
    storageBucket: "colonoscopia-webversion.appspot.com",
    messagingSenderId: "139173310007",
    appId: "1:139173310007:web:85637785772e5f27b219b2",
    measurementId: "G-929YGJW244"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;