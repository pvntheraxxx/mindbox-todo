// ============================
// Component: FilterTabs
// Description: Компонент для переключения фильтра задач: все, активные, завершённые.
// ============================

import React from 'react'
import { Tabs, Tab, Paper } from '@mui/material'
import { Filter } from '../hooks/useTasks'
import { useTranslation } from 'react-i18next'

interface FilterTabsProps {
  filter: Filter
  setFilter: (filter: Filter) => void
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filter, setFilter }) => {
  const { t } = useTranslation()

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
        <Tab value="all" label={t('all')} />
        <Tab value="active" label={t('active')} />
        <Tab value="completed" label={t('completed')} />
      </Tabs>
    </Paper>
  )
}

export default FilterTabs
