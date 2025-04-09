// ============================
// Component: TaskInput
// Description: Поле для ввода новой задачи и кнопка добавления в список задач.
// ============================

import React, { useState } from 'react'
import { TextField, IconButton, Paper } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface TaskInputProps {
  onAdd: (title: string) => void
}

const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed.length > 0) {
      onAdd(trimmed)
      setValue('')
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', alignItems: 'center', p: 1, mb: 2 }}
      elevation={3}
    >
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Добавить новую задачу..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton color="primary" type="submit" sx={{ ml: 1 }}>
        <AddIcon />
      </IconButton>
    </Paper>
  )
}

export default TaskInput
