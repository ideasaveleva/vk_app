import bridge from '@vkontakte/vk-bridge'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

bridge.send('VKWebAppInit')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>
)
