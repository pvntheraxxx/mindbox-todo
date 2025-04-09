// tests/FilterTabs.test.tsx

import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import FilterTabs from '../src/components/FilterTabs'
import { Filter } from '../src/hooks/useTasks'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from '../src/theme';
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import '@testing-library/jest-dom'

const renderWithProviders = (filter: Filter, setFilter: jest.Mock) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
        <FilterTabs filter={filter} setFilter={setFilter} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

describe('FilterTabs', () => {
  it('renders tabs correctly', () => {
    const setFilterMock = jest.fn()
    renderWithProviders("all", setFilterMock)

    // Предполагаем, что переводы дают "Все", "Активные", "Завершённые"
    expect(screen.getByText(/Все/i)).toBeInTheDocument()
    expect(screen.getByText(/Активные/i)).toBeInTheDocument()
    expect(screen.getByText(/Завершённые/i)).toBeInTheDocument()
  })

  it('changes filter when a tab is clicked', () => {
    const setFilterMock = jest.fn()
    renderWithProviders("all", setFilterMock)

    // При клике на вкладку "Завершённые" вызывается setFilter с 'completed'
    fireEvent.click(screen.getByText(/Завершённые/i))
    expect(setFilterMock).toHaveBeenCalledWith('completed')
  })
})
