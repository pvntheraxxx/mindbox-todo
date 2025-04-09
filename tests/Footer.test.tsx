// tests/Footer.test.tsx

import React from "react"
import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '../src/components/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../src/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import '@testing-library/jest-dom'

const renderWithProviders = (remainingCount: number, clearCompleted: jest.Mock) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
        <Footer remainingCount={remainingCount} clearCompleted={clearCompleted} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

describe('Footer', () => {
  it('displays the correct remaining count', () => {
    renderWithProviders(3, jest.fn())
    expect(screen.getByText(/Осталось задач: 3/i)).toBeInTheDocument()
  })

  it('calls clearCompleted when the button is clicked', () => {
    const mockClearCompleted = jest.fn()
    renderWithProviders(3, mockClearCompleted)
    const button = screen.getByRole('button', { name: /Очистить завершённые/i })
    fireEvent.click(button)
    expect(mockClearCompleted).toHaveBeenCalled()
  })
})
