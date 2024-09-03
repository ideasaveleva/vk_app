// firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore, Timestamp } from 'firebase/firestore'

// Ваши настройки Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAfjiSU_aFX8eCWnZN6_-Ev3Zv7sNKMFPU',
  authDomain: 'vk-my-store.firebaseapp.com',
  projectId: 'vk-my-store',
  storageBucket: 'vk-my-store.appspot.com',
  messagingSenderId: '647386621302',
  appId: '1:647386621302:web:645bb3d84068e5e3788657',
  measurementId: 'G-X9Y762THVJ',
}

// Инициализация Firebase
const app = initializeApp(firebaseConfig)

// Инициализация Firestore
const db = getFirestore(app)

export { db, Timestamp }
