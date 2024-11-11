import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuvNobsre3xVdqyaqkf2LQSBGrjJzl4Rk",
  authDomain: "poop-app-ba87c.firebaseapp.com",
  projectId: "poop-app-ba87c",
  storageBucket: "poop-app-ba87c.appspot.com",
  messagingSenderId: "758414816441",
  appId: "1:758414816441:web:050e54e53ef91d2c401768",
  measurementId: "G-9ZFS19W581"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_STORAGE = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});