import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  
    apiKey: "AIzaSyAIjXuXX7_wYAlceVoLab6wzPm3Lt-xoQM",
    authDomain: "mutalo-studio-3f612.firebaseapp.com",
    projectId: "mutalo-studio-3f612",
    storageBucket: "mutalo-studio-3f612.appspot.com",
    messagingSenderId: "402771960599",
    appId: "1:402771960599:web:47d46581f1e0184ab1cd52",
    measurementId: "G-70JY9JKC1G"
  }
);

var db = firebaseApp.firestore();

export { db };