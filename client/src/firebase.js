
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    // YOUR CONFIG
    apiKey: "AIzaSyBRDMp1c-2G2g052aeTmBeG1qkbE6DoDJk",
    authDomain: "g-commerce-b636d.firebaseapp.com",
    projectId: "g-commerce-b636d",
    storageBucket: "g-commerce-b636d.appspot.com",
    messagingSenderId: "1062906590463",
    appId: "1:1062906590463:web:0980b0c1ae3cd82b2f08ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };