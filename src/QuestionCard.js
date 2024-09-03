import { Card, Div, Radio, Title } from '@vkontakte/vkui'
import './style.css'

export default function QuestionCard({
  question,
  img,
  options,
  questionIndex,
  answers,
  handleAnswerChange,
}) {
  return (
    <Card mode='shadow' className='question-card'>
      <Div className='question-card__image'>
        <img src={img} alt={question} />
      </Div>
      <Div className='question-card__options'>
        <Title level={3} style={{ textAlign: 'center' }}>
          {question}
        </Title>
        {options.map((option, optionIndex) => (
          <Radio
            key={optionIndex}
            name={`question-${questionIndex}`}
            value={optionIndex}
            checked={answers[questionIndex] === optionIndex}
            onChange={() => handleAnswerChange(questionIndex, optionIndex)}
            style={{ margin: '5px 0' }}
          >
            {option.text}
          </Radio>
        ))}
      </Div>
    </Card>
  )
}
