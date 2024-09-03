import { Button, Div } from '@vkontakte/vkui'
import React, { useState } from 'react'
import { questions, typeDescriptions } from './data'
import { determineType } from './determineType'
import { addUserResults, getAllUsers, getTestUsers } from './firebaseService'
import QuestionListContent from './QuestionListContent'
import ResultCard from './ResultCard'

export default function QuestionList({
  vkUser,
  setVkUser,
  setAllUsers,
  setTestUsers,
}) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [userData, setUserData] = useState([])

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = optionIndex
    setAnswers(newAnswers)
    // Выводим новый массив ответов в консоль
    // console.log('Updated answers:', newAnswers)
  }

  const type = showResults ? determineType(answers) : null

  const handleShowResults = async () => {
    if (answers.every((answer) => answer !== null)) {
      setShowResults(true)

      const newUserData = [
        ...userData,
        {
          name: `${vkUser?.first_name} ${vkUser?.last_name}`,
          id: vkUser?.id,
          answers,
        },
      ]

      try {
        // Сохранение данных о пользователе, прошедшем тест
        await addUserResults(newUserData) // Используйте Firestore для добавления данных
        setUserData(newUserData)

        // Обновляем состояние vkUser, добавляя информацию о завершении теста
        const updatedVkUser = { ...vkUser, testCompleted: true }
        setVkUser(updatedVkUser)

        // Обновляем список всех пользователей и тестовых пользователей
        const updatedAllUsers = await getAllUsers()
        const updatedTestUsers = await getTestUsers()

        setAllUsers(updatedAllUsers)
        setTestUsers(updatedTestUsers)
      } catch (error) {
        console.error('Ошибка сохранения данных:', error)
      }
    } else {
      alert('Пожалуйста, ответьте на все вопросы.')
    }
  }

  const handleCloseResults = () => {
    setShowResults(false)
    setAnswers(Array(questions.length).fill(null)) // Сбрасываем ответы
  }

  return (
    <Div>
      <QuestionListContent
        answers={answers}
        handleAnswerChange={handleAnswerChange}
      />
      {showResults ? (
        <>
          <Button
            size='l'
            stretched
            onClick={handleCloseResults}
            style={{ width: '200px', margin: '0 auto' }}
          >
            Закрыть результат
          </Button>
          <ResultCard
            type={type}
            typeDescriptions={typeDescriptions}
            onClose={handleCloseResults}
          />
        </>
      ) : (
        <Button
          size='l'
          stretched
          onClick={handleShowResults}
          style={{ width: '200px', margin: '0 auto' }}
        >
          Показать результат
        </Button>
      )}
    </Div>
  )
}
