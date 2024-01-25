import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAGfgcVL4xgHzPY7qAWVdtkZiOFJ0irB40",
  authDomain: "mainidea-482b3.firebaseapp.com",
  projectId: "mainidea-482b3",
  storageBucket: "mainidea-482b3.appspot.com",
  messagingSenderId: "138744001762",
  appId: "1:138744001762:web:b786ade7ae85e5ebda1abb",
  measurementId: "G-4XMG81L29D"
};

export default firebase.initializeApp(firebaseConfig);