import { Cell, Div, Group, Header } from '@vkontakte/vkui'
import React from 'react'
import ClearDataButtons from './ClearDataButtons'
import { deleteAllUsers } from './firebaseService'
import './style.css'

function UserList({ sortedUsers, setAllUsers, formatTimestamp }) {
  // Вызов функции для удаления всех пользователей
  const handleDeleteAllUsers = () => {
    deleteAllUsers(setAllUsers)
  }

  return (
    <Group header={<Header mode='secondary'>{'Все пользователи'}</Header>}>
      {sortedUsers && sortedUsers.length > 0 ? (
        sortedUsers.map((user, index) => (
          <Cell key={user?.timestamp ?? index}>
            <div className='cell-text'>
              {user?.name || 'Имя неизвестно'} (ID:{' '}
              {user?.id || 'ID неизвестен'}){' '}
              <span style={{ fontStyle: 'italic', color: '#999' }}>
                {user?.timestamp
                  ? `Время визита: ${formatTimestamp(user.timestamp)}`
                  : 'Время не указано'}
              </span>
            </div>
          </Cell>
        ))
      ) : (
        <Cell>
          <div className='cell-text'>{'Нет данных о пользователях.'}</div>
        </Cell>
      )}
      <Div>
        <ClearDataButtons
          onClick={handleDeleteAllUsers}
          buttonText='Очистить пользователей'
        />
      </Div>
    </Group>
  )
}

export default UserList
