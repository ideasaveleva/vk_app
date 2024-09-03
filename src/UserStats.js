import { Cell, Group, Header } from '@vkontakte/vkui'
import './style.css'

function UserStats({ allUsers, testUsers }) {
  return (
    <Group header={<Header mode='secondary'>Общая информация</Header>}>
      <Cell>
        <div className='cell-text'>
          Количество пользователей зашедших в приложение: {allUsers.length}
        </div>
      </Cell>
      <Cell>
        <div className='cell-text'>
          Количество пользователей прошедших тест: {testUsers.length}
        </div>
      </Cell>
    </Group>
  )
}

export default UserStats
