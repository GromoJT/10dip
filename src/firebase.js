import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirebase, getFirestore} from 'firebase/firestore'
import {getStorage, storage} from 'firebase/storage'


import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
 } from 'firebase/auth';

const firebasConfig = {
    apiKey: "AIzaSyCzjjN4zX8ss5QLyfxVEq52g9PMTRQLGi4",
    authDomain: "dip-d9e82.firebaseapp.com",
    projectId: "dip-d9e82",
    storageBucket: "dip-d9e82.appspot.com",
    messagingSenderId: "808549743956",
    appId: "1:808549743956:web:d9001371974aaa9dbadcc1"
};

const app = initializeApp(firebasConfig);
export const st = getStorage(app)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const provider = new GoogleAuthProvider();

export default app;