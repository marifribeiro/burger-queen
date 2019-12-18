import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvGSs81TFTA4sIuYUEq0j9uEgdvxMoYVo",
  authDomain: "burger-queen-e1951.firebaseapp.com",
  databaseURL: "https://burger-queen-e1951.firebaseio.com",
  projectId: "burger-queen-e1951",
  storageBucket: "burger-queen-e1951.appspot.com",
  messagingSenderId: "241729453179",
  appId: "1:241729453179:web:1f7bcd3f85ccb5982576de",
  measurementId: "G-D1RE6Q6JBZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;