// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6a8wCHuALP6_tXgvclUEsodLWbPxQq_E",
  authDomain: "gym-web-application-4e483.firebaseapp.com",
  projectId: "gym-web-application-4e483",
  storageBucket: "gym-web-application-4e483.appspot.com",
  messagingSenderId: "804506683570",
  appId: "1:804506683570:web:214f3ffed5d6404393a1ab",
  measurementId: "G-KC25C35W0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
 export const UserInformation = collection(db ,'UserInformation');
export default app;