// tests/TaskInput.test.tsx

import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import TaskInput from '../src/components/TaskInput'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../src/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import '@testing-library/jest-dom'

const renderWithProviders = (onAdd: (title: string) => void) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
        <TaskInput onAdd={onAdd} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

describe('TaskInput', () => {
  it('renders input field with placeholder', () => {
    renderWithProviders(() => {})
    expect(screen.getByPlaceholderText(/Добавить новую задачу/i)).toBeInTheDocument()
  })

  it('calls onAdd with correct value and clears input', () => {
    const mockOnAdd = jest.fn()
    renderWithProviders(mockOnAdd)

    const input = screen.getByPlaceholderText(/Добавить новую задачу/i)
    fireEvent.change(input, { target: { value: 'New Task' } })

    // Находим ближайшую форму и отправляем её
    const form = input.closest('form')
    if (form) fireEvent.submit(form)

    expect(mockOnAdd).toHaveBeenCalledWith('New Task')
    expect(input).toHaveValue('')
  })
})
