// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3-xAdCxUiT5jmnbxtFAiASZSLmrfBhF4",
  authDomain: "sintak-565f6.firebaseapp.com",
  projectId: "sintak-565f6",
  storageBucket: "sintak-565f6.firebasestorage.app",
  messagingSenderId: "1086345640855",
  appId: "1:1086345640855:web:1e6ea4b2cca1ebd6ab62d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
