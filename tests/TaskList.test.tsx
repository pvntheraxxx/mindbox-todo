// tests/TaskList.test.tsx

import React from "react"
import { render, screen } from '@testing-library/react'
import TaskList from '../src/components/TaskList'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../src/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import '@testing-library/jest-dom'
import { Task } from '../src/types/task.ts'

const renderWithProviders = (tasks: Task[]) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
        <TaskList tasks={tasks} onToggle={() => {}} onDelete={() => {}} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

describe('TaskList', () => {
  it('renders tasks when tasks exist', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', completed: false, createdAt: Date.now() },
      { id: '2', title: 'Task 2', completed: true, createdAt: Date.now() },
    ]
    renderWithProviders(tasks)
    expect(screen.getByText(/Task 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument()
  })

  it('renders "Задач пока нет" when tasks array is empty', () => {
    renderWithProviders([])
    expect(screen.getByText(/Задач пока нет/i)).toBeInTheDocument()
  })
})
