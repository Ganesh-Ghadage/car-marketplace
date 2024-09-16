// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { conf } from "@/conf/conf";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: conf.FIREBASE_API_KEY,
  authDomain: "car-marketplace-183b1.firebaseapp.com",
  projectId: "car-marketplace-183b1",
  storageBucket: "car-marketplace-183b1.appspot.com",
  messagingSenderId: "467105765792",
  appId: "1:467105765792:web:85dff3e511466d36482cc5",
  measurementId: "G-T5YW48DDYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);