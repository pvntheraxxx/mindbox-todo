// ============================
// Hook: useTasks
// Description: Хук для управления списком задач в ToDo-приложении.
// ============================

import { useState } from 'react'
import { Task } from '../types/task'
import { v4 as uuidv4 } from 'uuid'

export type Filter = 'all' | 'active' | 'completed'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>('all')

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: Date.now(),
    }
    setTasks(prev => [...prev, newTask])
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const remainingCount = tasks.filter(t => !t.completed).length

  return {
    tasks: filteredTasks,
    allTasks: tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    filter,
    setFilter,
    remainingCount,
  }
}
