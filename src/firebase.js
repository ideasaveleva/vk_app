// firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore, Timestamp } from 'firebase/firestore'

// Ваши настройки Firebase
const firebaseConfig = {
  apiKey: 'настройки из Firebase',
  authDomain: 'настройки из Firebase',
  projectId: 'настройки из Firebase',
  storageBucket: 'настройки из Firebase',
  messagingSenderId: 'настройки из Firebase',
  appId: 'настройки из Firebase',
  measurementId: 'настройки из Firebase',
}

// Инициализация Firebase
const app = initializeApp(firebaseConfig)

// Инициализация Firestore
const db = getFirestore(app)

export { db, Timestamp }
