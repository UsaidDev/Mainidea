import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNUkSKxdcwo7KS60N9SNkNFdYK2UlSa8w",
  authDomain: "mainidea-1cee4.firebaseapp.com",
  projectId: "mainidea-1cee4",
  storageBucket: "mainidea-1cee4.appspot.com",
  messagingSenderId: "1013242341572",
  appId: "1:1013242341572:web:1df53e489422099bd08191",
  measurementId: "G-FVC4EV408S"
};

export default firebase.initializeApp(firebaseConfig);
