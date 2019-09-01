import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDIjizGFPtDXu9VvnTqzfXO45KrA3bK4hY",
    authDomain: "todoist-cab59.firebaseapp.com",
    databaseURL: "https://todoist-cab59.firebaseio.com",
    projectId: "todoist-cab59",
    storageBucket: "todoist-cab59.appspot.com",
    messagingSenderId: "906389549047",
    appId: "1:906389549047:web:3f94c58ab0f87b5a"
});
export { firebaseConfig as firebase};