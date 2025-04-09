// ============================
// Component: TaskItem
// Description: Отображает одну задачу с возможностью отметить, удалить или отметить выполненной.
// ============================

import React from 'react'
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Task } from '../types/task'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText
        primary={task.title}
        sx={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'gray' : 'inherit' }}
      />
    </ListItem>
  )
}

export default TaskItem
