// tests/App.test.tsx

import React from "react";
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import '@testing-library/jest-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'

describe('App', () => {
  it('renders main components', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    // Проверка заголовка, переключателя языка и темы
    expect(screen.getByText(/Мои задачи/i)).toBeInTheDocument()
    expect(screen.getByText(/RU/i)).toBeInTheDocument()
  })

  // Дополнительные тесты можно написать для проверки переключения темы и языка,
  // а также взаимодействия с TaskInput, FilterTabs, TaskList, Footer.
})
