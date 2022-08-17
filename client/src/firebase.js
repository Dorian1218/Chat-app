import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-u3djBGrerOl0KBtNr1bRFHW6fpkJ5WU",
    authDomain: "test-chat-8f649.firebaseapp.com",
    projectId: "test-chat-8f649",
    storageBucket: "test-chat-8f649.appspot.com",
    messagingSenderId: "507940521635",
    appId: "1:507940521635:web:4b9cac65ac96ad0b622116"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);