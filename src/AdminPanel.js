import { Div, Title } from '@vkontakte/vkui'
import { useState } from 'react'
import TestUsersList from './TestUsersList'
import UserList from './UserList'
import UserStats from './UserStats'

function AdminPanel({ allUsers, setAllUsers, testUsers, setTestUsers }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (timestamp) => {
    // console.log('Текущий expandedIndex:', expandedIndex)
    // console.log('Выбранный timestamp:', timestamp)

    setExpandedIndex((prevIndex) => {
      const newIndex = prevIndex === timestamp ? null : timestamp
      // console.log('Новый expandedIndex:', newIndex)
      return newIndex
    })
  }

  // Проверка входных данных
  if (!Array.isArray(allUsers)) {
    console.error('allUsers не является массивом:', allUsers)
    return <Div>Ошибка загрузки данных</Div>
  }

  // Сортировка пользователей по времени визита
  const sortedUsers = [...allUsers].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  )

  // Форматирование временной метки
  const formatTimestamp = (date) => {
    let parsedDate

    // Если входное значение является строкой, преобразуем ее в объект Date
    if (typeof date === 'string') {
      parsedDate = new Date(date)
    }
    // Если входное значение уже является объектом Date
    else if (date instanceof Date) {
      parsedDate = date
    }
    // Если входное значение не является корректным типом
    else {
      return 'Неизвестное время'
    }

    // Проверяем, является ли parsedDate корректной датой
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleString() // Форматируем дату
    }

    return 'Неизвестное время' // Если дата некорректна
  }

  return (
    <Div>
      <Title level={1} style={{ marginBottom: '15px' }}>
        Административная панель
      </Title>

      {/* Статистика пользователей */}
      <UserStats allUsers={allUsers} testUsers={testUsers} />

      {/* Отображение всех пользователей */}
      <UserList
        sortedUsers={sortedUsers}
        setAllUsers={setAllUsers}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
        formatTimestamp={formatTimestamp}
        showResults={false} // Для отображения всех пользователей
      />

      {/* Отображение пользователей с результатами теста */}
      <TestUsersList
        testUsers={testUsers}
        setTestUsers={setTestUsers}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
        formatTimestamp={formatTimestamp}
        showResults={true} // Для отображения пользователей с результатами
      />
    </Div>
  )
}

export default AdminPanel
