import { Icon16Cancel, Icon16GearOutline } from '@vkontakte/icons'
import { Footer } from '@vkontakte/vkui'
import React, { useState } from 'react'
import AdminPanel from './AdminPanel'
import PasswordCard from './PasswordCard'
import './style.css'

export default function FooterList({
  allUsers,
  setAllUsers,
  testUsers,
  setTestUsers,
}) {
  const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(false)
  const [correctPassword, setCorrectPassword] = useState(false)
  const [enteredPassword, setEnteredPassword] = useState('')

  // Функция для показа панели администратора
  const showAdminPanel = () => {
    setIsAdminPanelVisible(true)
    setEnteredPassword('') // Скрыть карточку ввода пароля при открытии админ панели
  }

  // Функция для открытия карточки ввода пароля
  const handleAdminClick = () => {
    if (correctPassword) {
      showAdminPanel()
    } else {
      setIsAdminPanelVisible(true)
    }
  }

  // Функция для обработки отправки пароля
  const handlePasswordSubmit = () => {
    if (enteredPassword === 'admin') {
      setCorrectPassword(true)
      showAdminPanel()
    } else {
      alert('Неверный пароль')
    }
  }
  // Функция для обработки нажатия на клавишу Enter в поле ввода пароля
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handlePasswordSubmit()
    }
  }

  // Функция для закрытия панели администратора и карточки ввода пароля
  const handleAdminClose = () => {
    setIsAdminPanelVisible(false)
    setCorrectPassword(false)
  }

  return (
    <Footer>
      {!isAdminPanelVisible ? (
        <Icon16GearOutline width={20} height={20} onClick={handleAdminClick} />
      ) : (
        <Icon16Cancel width={20} height={20} onClick={handleAdminClose} />
      )}
      {isAdminPanelVisible && !correctPassword && (
        <PasswordCard
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.currentTarget.value)}
          handlePasswordSubmit={handlePasswordSubmit}
          onKeyDown={handleKeyPress}
        />
      )}
      {isAdminPanelVisible && correctPassword && (
        <AdminPanel
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          testUsers={testUsers}
          setTestUsers={setTestUsers}
        />
      )}
    </Footer>
  )
}
