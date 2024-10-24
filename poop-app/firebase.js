// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuvNobsre3xVdqyaqkf2LQSBGrjJzl4Rk",
  authDomain: "poop-app-ba87c.firebaseapp.com",
  projectId: "poop-app-ba87c",
  storageBucket: "poop-app-ba87c.appspot.com",
  messagingSenderId: "758414816441",
  appId: "1:758414816441:web:050e54e53ef91d2c401768",
  measurementId: "G-9ZFS19W581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);