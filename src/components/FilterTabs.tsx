// ============================
// Component: FilterTabs
// Description: Компонент для переключения фильтра задач: все, активные, завершённые.
// ============================

import React from 'react'
import { Tabs, Tab, Paper, useMediaQuery } from '@mui/material'
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

  const isMobile = useMediaQuery('(max-width: 768px)')
  const isSmallMobile = useMediaQuery('(max-width: 480px)')

  return (
    <Paper sx={{ mb: 2 }} elevation={1}>
      <Tabs
        value={filter}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{
          '& .MuiTab-root': {
            padding: isMobile ? '0 6px' : '0 16px', // уменьшение отступов на мобильных
            fontSize: isMobile ? '0.75rem' : '1rem', // уменьшение шрифта на мобильных
            whiteSpace: 'nowrap', // предотвращаем перенос
            overflow: 'hidden', // скрытие текста, который не помещается
            textOverflow: 'ellipsis', // многоточие для текста, который не помещается
            wordBreak: 'break-word', // добавляем перенос на более мелких экранах
          },
          '& .MuiTabs-flexContainer': {
            flexWrap: isSmallMobile ? 'wrap' : 'nowrap', // перенос на маленьких экранах
          },
        }}
      >
        <Tab value="all" label={t('all')} />
        <Tab value="active" label={t('active')} />
        <Tab value="completed" label={t('completed')} />
      </Tabs>
    </Paper>
  )
}

export default FilterTabs
