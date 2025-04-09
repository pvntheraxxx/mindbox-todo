// ============================
// Component: ThemeSwitcher
// Description: Переключатель светлой/тёмной темы, используется в AppBar справа.
// ============================

import React from 'react'
import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

interface ThemeSwitcherProps {
  mode: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ mode, toggleTheme }) => {
  return (
    <IconButton onClick={toggleTheme} sx={{ color: 'text.primary' }}>
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}

export default ThemeSwitcher
