import { CardGrid, Group, Header, Spinner } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'
import { questions } from './data'
import QuestionCard from './QuestionCard'

export default function QuestionListContent({ answers, handleAnswerChange }) {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const imagePromises = questions.map((question) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = question.img
        img.onload = () => resolve()
        img.onerror = () => reject()
      })
    })

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(false))
  }, [])

  if (!imagesLoaded) {
    return (
      <Group>
        <Spinner size='large' style={{ marginTop: '35px' }} />
        <Header mode='secondary'>Загрузка...</Header>
      </Group>
    )
  }
  return (
    <Group
      mode='card'
      header={<Header mode='secondary'>Отвечайте на вопросы ниже</Header>}
    >
      <CardGrid size='l'>
        {questions.map((q, questionIndex) => (
          <QuestionCard
            key={q.id}
            question={q.question}
            img={q.img}
            options={q.options}
            questionIndex={questionIndex}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />
        ))}
      </CardGrid>
    </Group>
  )
}
