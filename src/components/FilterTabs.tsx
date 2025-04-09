// ============================
// Component: FilterTabs
// Description: Компонент для переключения фильтра задач: все, активные, завершённые.
// ============================

import React from 'react'
import { Tabs, Tab, Paper } from '@mui/material'
import { Filter } from '../hooks/useTasks'

interface FilterTabsProps {
  filter: Filter
  setFilter: (filter: Filter) => void
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filter, setFilter }) => {
  const handleChange = (_: React.SyntheticEvent, newValue: Filter) => {
    setFilter(newValue)
  }

  return (
    <Paper sx={{ mb: 2 }} elevation={1}>
      <Tabs
        value={filter}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab value="all" label="Все" />
        <Tab value="active" label="Активные" />
        <Tab value="completed" label="Завершённые" />
      </Tabs>
    </Paper>
  )
}

export default FilterTabs
