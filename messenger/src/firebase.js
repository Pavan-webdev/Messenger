import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAoQ_wQAhnGNJI9Yeym62WmfbwDdDqYWFA",
    authDomain: "messenger-clone-cbc95.firebaseapp.com",
    projectId: "messenger-clone-cbc95",
    storageBucket: "messenger-clone-cbc95.appspot.com",
    messagingSenderId: "179749954099",
    appId: "1:179749954099:web:bd1131098635f69c71b946",
    measurementId: "G-YSYM032TJK"
  });

  const db = firebaseApp.firestore();

  export default db;