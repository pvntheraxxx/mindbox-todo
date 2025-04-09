// ============================
// Component: Footer
// Description: Показывает количество оставшихся задач и кнопку очистки завершённых задач.
// ============================

import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface FooterProps {
  remainingCount: number
  clearCompleted: () => void
}

const Footer: React.FC<FooterProps> = ({ remainingCount, clearCompleted }) => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}
    >
      <Typography variant="body2" color="text.secondary">
        {t('remaining')}: {remainingCount}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={clearCompleted}
      >
        {t('clear')}
      </Button>
    </Box>
  )
}

export default Footer
