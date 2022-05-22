// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf4JjezfKp471WDEyKG3VUrNozXWOs3Gs",
  authDomain: "sawland-e5251.firebaseapp.com",
  projectId: "sawland-e5251",
  storageBucket: "sawland-e5251.appspot.com",
  messagingSenderId: "679362231017",
  appId: "1:679362231017:web:97fc831d12dfd57ef3ce78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
