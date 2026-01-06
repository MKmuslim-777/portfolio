import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBvOkBwNzEDai0k8GbwXgRzERhs_MdHAEo",
  authDomain: "portfolio-b6ced.firebaseapp.com",
  projectId: "portfolio-b6ced",
  storageBucket: "portfolio-b6ced.firebasestorage.app",
  messagingSenderId: "334334334334",
  appId: "1:334334334334:web:334334334334334334"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app