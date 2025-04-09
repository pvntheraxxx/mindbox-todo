import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import LanguageSwitcher from '../src/components/LanguageSwitcher'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../src/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import '@testing-library/jest-dom'

describe('LanguageSwitcher', () => {
  it('renders language switcher with current language', () => {
    const mockChangeLanguage = jest.fn()

    render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
          <LanguageSwitcher language={i18n.language} onChange={mockChangeLanguage} />
        </ThemeProvider>
      </I18nextProvider>
    )

    // Проверим, что селект отрисовался с текущим языком
    expect(screen.getByRole('combobox')).toHaveTextContent(/RU|EN/)
  })

  it('calls onChange when a new language is selected', () => {
    const mockChangeLanguage = jest.fn()

    render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
          <LanguageSwitcher language="ru" onChange={mockChangeLanguage} />
        </ThemeProvider>
      </I18nextProvider>
    )

    // находим select по роли combobox
    const combobox = screen.getByRole('combobox')
    fireEvent.mouseDown(combobox)

    // открывается список — ищем и кликаем по "EN"
    const option = screen.getByRole('option', { name: 'EN' })
    fireEvent.click(option)

    expect(mockChangeLanguage).toHaveBeenCalledWith('en')
  })
})
