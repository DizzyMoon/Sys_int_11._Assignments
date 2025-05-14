document.addEventListener('DOMContentLoaded', () => {
    console.log("Script running")
})

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCImfJhSPObjTl6Sc_a-MNGvrpa9qevzEE",
    authDomain: "sys-int-auth.firebaseapp.com",
    projectId: "sys-int-auth",
    storageBucket: "sys-int-auth.firebasestorage.app",
    messagingSenderId: "391289900493",
    appId: "1:391289900493:web:2f3003cde830e1e0978884",
    measurementId: "G-K0X3L0T9KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleSignInPopup = () => {
    console.log('Button clicked!')
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-button').addEventListener('click', googleSignInPopup);
});