import { Button, FormItem, Group, Input } from '@vkontakte/vkui'

export default function PasswordCard({
  value,
  onChange,
  handlePasswordSubmit,
  onKeyDown,
}) {
  return (
    <Group style={{ marginTop: '10px' }} mode='card'>
      <FormItem>
        <Input
          type='password'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder='Введите пароль'
          style={{ width: '140px' }}
        />
        <Button
          style={{ width: '200px', marginTop: '16px' }}
          size='l'
          stretched
          onClick={handlePasswordSubmit}
        >
          Подтвердить
        </Button>
      </FormItem>
    </Group>
  )
}
