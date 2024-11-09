import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDch3-hImhB2LZieHKxuQmZCJPVpSDwAxY",
  authDomain: "kali-novels.firebaseapp.com",
  projectId: "kali-novels",
  storageBucket: "kali-novels.firebasestorage.app",
  messagingSenderId: "490331063507",
  appId: "1:490331063507:web:770d5181b54f00349a4026",
  measurementId: "G-XXZK3GD9KR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;