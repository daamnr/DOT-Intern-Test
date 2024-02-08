// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRw-azN5K_4n-5g6xkJjClJg5ShEfFV5Y",
  authDomain: "react-quiz-1ca75.firebaseapp.com",
  projectId: "react-quiz-1ca75",
  storageBucket: "react-quiz-1ca75.appspot.com",
  messagingSenderId: "589630544231",
  appId: "1:589630544231:web:0b84cd1727b7978f2437c2",
  measurementId: "G-CW1V0PZPBR",
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
