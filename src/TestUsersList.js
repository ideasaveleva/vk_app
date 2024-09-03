import { Button, Cell, Div, Group, Header } from '@vkontakte/vkui'
import React from 'react'
import ClearDataButtons from './ClearDataButtons'
import { questions } from './data'
import { deleteAllTestResults } from './firebaseService'
import './style.css'

function TestUsersList({
  testUsers,
  expandedIndex,
  toggleExpand,
  formatTimestamp,
  setTestUsers,
}) {
  // Вызов функции для удаления всех результатов тестов
  const handleDeleteAllTestResults = () => {
    deleteAllTestResults(setTestUsers)
  }

  // Сортировка пользователей по времени визита (последний визит - внизу)
  const sortedTestUsers = testUsers
    .slice() // Создаем копию массива, чтобы не изменять исходный
    .sort((a, b) => {
      // Если у одного из пользователей нет времени визита, ставим его в начало списка
      if (!a.timestamp) return 1
      if (!b.timestamp) return -1

      // Сортируем по убыванию времени визита
      return a.timestamp - b.timestamp
    })

  return (
    <Group
      header={<Header mode='secondary'>{'Пользователи с результатами'}</Header>}
    >
      {sortedTestUsers && sortedTestUsers.length > 0 ? (
        sortedTestUsers.map((user) => {
          const results = Array.isArray(user.results) ? user.results[0] : {}

          const userName = results?.name || 'Имя неизвестно'
          const userId = results?.id || 'ID неизвестен'
          const visitTime = user.timestamp
            ? `Время визита: ${formatTimestamp(user.timestamp)}`
            : 'Время не указано'

          return (
            <Cell key={user.timestamp}>
              <div className='cell-text'>
                {userName} (ID: {userId}){' '}
                <span
                  style={{
                    fontStyle: 'italic',
                    color: '#999',
                  }}
                >
                  {visitTime}
                </span>
              </div>
              {results.answers && results.answers.length > 0 && (
                <div className='cell-text' style={{ textAlign: 'left' }}>
                  <Button
                    size='s'
                    mode='tertiary'
                    onClick={() => toggleExpand(user.timestamp)}
                    style={{ margin: '10px 0 10px 10px', width: '100px' }}
                  >
                    {expandedIndex === user.timestamp
                      ? 'Свернуть'
                      : 'Развернуть'}
                  </Button>
                  {expandedIndex === user.timestamp && (
                    <div style={{ marginLeft: '20px' }}>
                      {results.answers.map((answer, i) => {
                        const question = questions[i]
                        if (!question) {
                          return <div key={i}>Вопрос не найден</div>
                        }

                        const option = question.options[answer]
                        return (
                          <div key={i}>
                            <strong>
                              {question.question || 'Вопрос не найден'}
                            </strong>
                            <div>{option?.text || 'Не выбрано'}</div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </Cell>
          )
        })
      ) : (
        <Cell>
          <div className='cell-text'>
            Нет данных о пользователях с результатами.
          </div>
        </Cell>
      )}
      <Div>
        <ClearDataButtons
          onClick={handleDeleteAllTestResults}
          buttonText='Очистить результаты'
        />
      </Div>
    </Group>
  )
}

export default TestUsersList
