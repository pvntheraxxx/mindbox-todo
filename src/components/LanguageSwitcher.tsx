// ============================
// Component: LanguageSwitcher
// Description: Переключатель языка (RU / EN), используется в AppBar слева.
// ============================

import React from 'react'
import { Select, MenuItem, SelectChangeEvent } from '@mui/material'

interface LanguageSwitcherProps {
  language: string
  onChange: (lang: string) => void
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, onChange }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value)
  }

  return (
    <Select
      value={language}
      onChange={handleChange}
      variant="standard"
      disableUnderline
      sx={{
        color: 'text.primary',
        fontWeight: 500,
        minWidth: 60,
        '& .MuiSelect-icon': {
          color: 'text.primary',
        },
      }}
    >
      <MenuItem value="ru">RU</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </Select>
  )
}

export default LanguageSwitcher
