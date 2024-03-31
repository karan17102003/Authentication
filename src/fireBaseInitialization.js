// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ2OMLGLbxFCFkSNXyw4QhdwBom8LW0Ko",
  authDomain: "authentication-786d3.firebaseapp.com",
  projectId: "authentication-786d3",
  storageBucket: "authentication-786d3.appspot.com",
  messagingSenderId: "162579778916",
  appId: "1:162579778916:web:0787a98bc3e25854147e71",
  measurementId: "G-26HZV2HJK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);