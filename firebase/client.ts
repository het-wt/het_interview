import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9NtsB5lAKRDqkhqWY1JWb8kL90rKUPac",
    authDomain: "prepwise-23eca.firebaseapp.com",
    projectId: "prepwise-23eca",
    storageBucket: "prepwise-23eca.firebasestorage.app",
    messagingSenderId: "753375283494",
    appId: "1:753375283494:web:153bc28156eff3a63f99e7",
    measurementId: "G-DCL5BF9NQD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);