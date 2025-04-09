// ============================
// Component: TaskList
// Description: Отображает список задач, используя TaskItem. Обрабатывает события toggle и delete.
// ============================

import React from 'react'
import { List, Typography } from '@mui/material'
import TaskItem from './TaskItem'
import { Task } from '../types/task'

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return <Typography variant="body2" color="text.secondary">Задач пока нет</Typography>
  }

  return (
    <List>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  )
}

export default TaskList