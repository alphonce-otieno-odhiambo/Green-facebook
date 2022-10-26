// Import the functions you need from the SDKs you need
import { initializeApp ,getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCgU19Y13tnsMsT9so0QPxEF0SyvAUD2bc",
    authDomain: "green-facebook-94f11.firebaseapp.com",
    projectId: "green-facebook-94f11",
    storageBucket: "green-facebook-94f11.appspot.com",
    messagingSenderId: "730374491495",
    appId: "1:730374491495:web:3394054c88665942dfb3c2"
  };


  // Initialize Firebase
if (!getApps().length) {
    initializeApp(firebaseConfig)
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  const storage = getStorage();
  
  export {  db, storage};