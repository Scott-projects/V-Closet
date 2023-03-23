// Import initilization SDK
import { initializeApp } from "firebase/app";

// Import additional SDKs and releveant methods
import { getAnalytics} from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// V-Closet Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8kRGwhXfMUspInMbSdyAyq407FTx3CfQ",
  authDomain: "v-closet-f9736.firebaseapp.com",
  projectId: "v-closet-f9736",
  storageBucket: "v-closet-f9736.appspot.com",
  messagingSenderId: "482526602179",
  appId: "1:482526602179:web:5698a2afbd93bee85dd376",
  measurementId: "G-T8YZENSRRP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Initiilize SDKs
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
