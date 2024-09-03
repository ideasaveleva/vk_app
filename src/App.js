import vkBridge from '@vkontakte/vk-bridge'
import { AppRoot, Panel, View } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'
import FooterList from './FooterList'
import HeaderList from './HeaderList'
import QuestionList from './QuestionList'
import {
  addUser,
  defaultUser,
  getAllUsers,
  getTestUsers,
} from './firebaseService'

const App = () => {
  const [vkUser, setVkUser] = useState(null)
  const [allUsers, setAllUsers] = useState([])
  const [testUsers, setTestUsers] = useState([])

  useEffect(() => {
    async function fetchUser() {
      // console.log('Запуск загрузки данных пользователя')

      const TIMEOUT = 5000 // Время ожидания для инициализации VK Bridge

      const initializeVkBridge = async () => {
        // console.log('До попытки инициализации VK Bridge')
        const initPromise = vkBridge.send('VKWebAppInit')
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error('Таймаут инициализации VK Bridge')),
            TIMEOUT
          )
        )

        try {
          await Promise.race([initPromise, timeoutPromise])
          // console.log('VK Bridge инициализирован')
        } catch (error) {
          console.error('Ошибка при инициализации VK Bridge:', error.message)
          throw error
        }
        // console.log('После попытки инициализации VK Bridge')
      }

      try {
        await initializeVkBridge()

        // console.log('Попытка получения информации о пользователе из VK')
        const vkUserInfo = await vkBridge.send('VKWebAppGetUserInfo')
        // console.log('Получены данные пользователя из ВКонтакте:', vkUserInfo)

        if (vkUserInfo && vkUserInfo.id) {
          // console.log('Пользователь найден, установка данных')
          setVkUser(vkUserInfo)

          // console.log('Добавление пользователя в базу данных')
          await addUser({
            id: vkUserInfo.id,
            name: `${vkUserInfo.first_name} ${vkUserInfo.last_name}`,
          })
          // console.log('Пользователь добавлен в базу данных')
        } else {
          throw new Error('Получены неверные данные пользователя из ВКонтакте')
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных из ВКонтакте:', error)

        // Установка дефолтного пользователя
        // console.log('Установка дефолтного пользователя')
        setVkUser(defaultUser)

        // console.log('Добавление дефолтного пользователя в базу данных')
        try {
          await addUser({
            id: defaultUser.id,
            name: `${defaultUser.first_name} ${defaultUser.last_name}`,
          })
          // console.log('Дефолтный пользователь добавлен в базу данных')
        } catch (addDefaultUserError) {
          console.error(
            'Ошибка при добавлении дефолтного пользователя в базу данных:',
            addDefaultUserError
          )
        }
      }

      try {
        // console.log('Загрузка всех пользователей из базы данных')
        const users = await getAllUsers()
        setAllUsers(users)
        // console.log('Все пользователи загружены:', users)

        // console.log('Загрузка тестовых пользователей')
        const testUsers = await getTestUsers()
        setTestUsers(testUsers)
        // console.log('Тестовые результаты загружены:', testUsers)
      } catch (error) {
        console.error(
          'Ошибка при получении данных о пользователях или тестовых результатах:',
          error
        )
      }
    }

    fetchUser()
  }, [])

  return (
    <AppRoot>
      <View activePanel='main'>
        <Panel id='main'>
          <HeaderList />
          <QuestionList
            vkUser={vkUser || defaultUser}
            setVkUser={setVkUser}
            setAllUsers={setAllUsers}
            setTestUsers={setTestUsers}
          />
          <FooterList
            allUsers={allUsers}
            setAllUsers={setAllUsers}
            testUsers={testUsers}
            setTestUsers={setTestUsers}
          />
        </Panel>
      </View>
    </AppRoot>
  )
}

export default App
