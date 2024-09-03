import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db, Timestamp } from './firebase'

export const defaultUser = {
  id: 20068076,
  first_name: 'Вася',
  last_name: 'Пупкин',
}

// Функция для добавления пользователя
export const addUser = async (user) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      ...user,
      timestamp: Timestamp.now(), // Используем текущую временную метку
    })
  } catch (e) {
    console.error('Ошибка при добавлении пользователя: ', e)
  }
}

// Функция для добавления результатов пользователя
export const addUserResults = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, 'userResults'), {
      results: userData,
      timestamp: Timestamp.now(), // Используем текущую временную метку
    })
    // console.log('Результаты добавлены с ID: ', docRef.id)
  } catch (e) {
    console.error('Ошибка при добавлении результатов: ', e)
  }
}

// Функция для получения всех пользователей
export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'))
    const users = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const timestamp = data.timestamp?.toDate() || 'No timestamp' // Обрабатываем временную метку
      users.push({ ...data, timestamp })
    })
    return users
  } catch (e) {
    console.error('Ошибка при получении пользователей: ', e)
  }
}

// Функция для получения данных пользователей, прошедших тест
export const getTestUsers = async () => {
  try {
    // console.log('Получение пользователей, прошедших тест')
    const querySnapshot = await getDocs(collection(db, 'userResults'))
    const testUsers = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const timestamp = data.timestamp?.toDate() || 'No timestamp' // Обрабатываем временную метку
      testUsers.push({ ...data, timestamp })
    })
    // console.log('Пользователи, прошедшие тест, получены::', testUsers)
    return testUsers
  } catch (e) {
    console.error('Error fetching test users: ', e)
  }
}

// Функция для удаления всех пользователей
export const deleteAllUsers = async (setAllUsers) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'))
    const deletePromises = []

    querySnapshot.forEach((document) => {
      deletePromises.push(deleteDoc(doc(db, 'users', document.id)))
    })

    await Promise.all(deletePromises)
    // console.log('All users deleted successfully.')

    // Обновление состояния allUsers после удаления
    const updatedAllUsers = await getAllUsers()
    setAllUsers(updatedAllUsers)
  } catch (e) {
    console.log('Error deleting all users: ', e.message)
  }
}

// Функция для удаления всех результатов тестов
export const deleteAllTestResults = async (setTestUsers) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'userResults'))
    const deletePromises = []

    querySnapshot.forEach((document) => {
      deletePromises.push(deleteDoc(doc(db, 'userResults', document.id)))
    })

    await Promise.all(deletePromises)
    // console.log('All test results deleted successfully.')

    // Обновление состояния testUsers после удаления
    const updatedTestUsers = await getTestUsers()
    setTestUsers(updatedTestUsers)
  } catch (e) {
    console.log('Error deleting all test results: ', e.message)
  }
}
