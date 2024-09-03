import { Div, Title } from '@vkontakte/vkui'
import {
  typeDescriptions,
  typeFour,
  typeOne,
  typeThree,
  typeTwo,
} from './data.js'

export default function ResultCard({ type }) {
  return (
    <Div>
      {type !== undefined ? (
        <Div>
          <Title>Ты веришь... в {typeDescriptions[type]}.</Title>
          <p>
            {type === 1 && typeOne.text}
            {type === 2 && typeTwo.text}
            {type === 3 && typeThree.text}
            {type === 4 && typeFour.text}
          </p>
					<pre id='wish-only' style={{ color: '#333333' }}>
            {type === 1 && typeOne.poem}
            {type === 2 && typeTwo.poem}
            {type === 3 && typeThree.poem}
            {type === 4 && typeFour.poem}
          </pre>
        </Div>
      ) : (
        <Div>Результаты не определены.</Div>
      )}
    </Div>
  )
}
