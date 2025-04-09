// ============================
// Component: Footer
// Description: Показывает количество оставшихся задач и кнопку очистки завершённых задач.
// ============================

import React from 'react'
import { Box, Typography, Button } from '@mui/material'

interface FooterProps {
  remainingCount: number
  clearCompleted: () => void
}

const Footer: React.FC<FooterProps> = ({ remainingCount, clearCompleted }) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}
    >
      <Typography variant="body2" color="text.secondary">
        Осталось задач: {remainingCount}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={clearCompleted}
      >
        Очистить завершённые
      </Button>
    </Box>
  )
}

export default Footer