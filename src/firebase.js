// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDG8EFmOWpJPn1PMn60GL7YuVIhvp1UYHU",
authDomain: "amigos-bea84.firebaseapp.com",
projectId: "amigos-bea84",
storageBucket: "amigos-bea84.appspot.com",
messagingSenderId: "482074344661",
appId: "1:482074344661:web:48e4ce17a64d04435c365c",
measurementId: "G-X4YX54HKP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {db}