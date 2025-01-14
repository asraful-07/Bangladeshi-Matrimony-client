// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNj32BBO1CvQKsfCsxCou4mx_1VcVFjn4",
  authDomain: "assignment-12-50161.firebaseapp.com",
  projectId: "assignment-12-50161",
  storageBucket: "assignment-12-50161.firebasestorage.app",
  messagingSenderId: "820148516607",
  appId: "1:820148516607:web:7b41590a2a7cd45f807eca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
