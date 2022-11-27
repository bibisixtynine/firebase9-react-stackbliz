import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLdZaRIo8T9GZcr5EnbFG27Y8n4qd46sY",
  authDomain: "fir-9-bbe31.firebaseapp.com",
  projectId: "fir-9-bbe31",
  storageBucket: "fir-9-bbe31.appspot.com",
  messagingSenderId: "983516342138",
  appId: "1:983516342138:web:f8640f92d125aa3fd2d8c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

