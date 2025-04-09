// tests/TaskItem.test.tsx

import React from "react"
import { render, screen, fireEvent } from '@testing-library/react'
import TaskItem from '../src/components/TaskItem'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../src/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import '@testing-library/jest-dom'
import { Task } from '../src/types/task'

const renderWithProviders = (task: Task, onToggle: jest.Mock, onDelete: jest.Mock) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
        <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

describe('TaskItem', () => {
  const sampleTask: Task = { id: '1', title: 'Sample Task', completed: false, createdAt: Date.now() }

  it('renders the task title', () => {
    renderWithProviders(sampleTask, jest.fn(), jest.fn())
    expect(screen.getByText(/Sample Task/i)).toBeInTheDocument()
  })

  it('calls onToggle when checkbox is clicked', () => {
    const mockOnToggle = jest.fn()
    renderWithProviders(sampleTask, mockOnToggle, jest.fn())
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(mockOnToggle).toHaveBeenCalledWith('1')
  })

  it('calls onDelete when delete button is clicked', () => {
    const mockOnDelete = jest.fn()
    renderWithProviders(sampleTask, jest.fn(), mockOnDelete)
    const deleteButton = screen.getByLabelText(/delete/i)
    fireEvent.click(deleteButton)
    expect(mockOnDelete).toHaveBeenCalledWith('1')
  })
})
