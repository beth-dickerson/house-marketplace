import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8UkXgvUDYphG_pjCnTbwt45mnHl3Uo80",
  authDomain: "house-marketplace-app-e0ff6.firebaseapp.com",
  projectId: "house-marketplace-app-e0ff6",
  storageBucket: "house-marketplace-app-e0ff6.appspot.com",
  messagingSenderId: "244104898969",
  appId: "1:244104898969:web:02e762492094c2d1798b08"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();