import firebase from "firebase"
import 'firebase/auth';
// import 'firebase/auth/GoogleAuthProvider';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBAM0z020Z6HyC6ZqFlZpPECpMJ7-6mZf4",
    authDomain: "link-app-64a41.firebaseapp.com",
    databaseURL: "https://link-app-64a41-default-rtdb.firebaseio.com",
    projectId: "link-app-64a41",
    storageBucket: "link-app-64a41.appspot.com",
    messagingSenderId: "9168886798",
    appId: "1:9168886798:web:21be2c685c4b17a831705f",
    measurementId: "G-MPSED1Q5B6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;