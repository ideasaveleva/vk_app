import { Button } from '@vkontakte/vkui'
import React from 'react'

function ClearDataButtons({
  onClick = () => {},
  buttonText = 'Очистить список',
}) {
  return (
    <Button
      style={{ marginTop: '20px', width: '200px', marginBottom: '20px' }}
      size='s'
      stretched
      mode='tertiary'
      onClick={onClick}
    >
      {buttonText}
    </Button>
  )
}

export default ClearDataButtons
