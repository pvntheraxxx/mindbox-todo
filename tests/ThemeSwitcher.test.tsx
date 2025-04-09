// tests/ThemeSwitcher.test.tsx

import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeSwitcher from '../src/components/ThemeSwitcher'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../src/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import '@testing-library/jest-dom'

describe('ThemeSwitcher', () => {
  it('renders and calls toggleTheme when clicked', () => {
    const mockToggleTheme = jest.fn()
    render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
          <ThemeSwitcher toggleTheme={mockToggleTheme} mode="light" />
        </ThemeProvider>
      </I18nextProvider>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockToggleTheme).toHaveBeenCalled()
  })
})
