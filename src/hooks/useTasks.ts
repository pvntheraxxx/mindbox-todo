// ============================
// Hook: useTasks
// Description: Хук для управления списком задач в ToDo-приложении.
// ============================

import { useState } from 'react'
import { Task } from '../types/task'
import { v4 as uuidv4 } from 'uuid'

export type Filter = 'all' | 'active' | 'completed'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]) // Список всех задач
  const [filter, setFilter] = useState<Filter>('all') // Статус фильтра

  // Функция добавления новой задачи
  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,  // Задача по умолчанию не завершена
      createdAt: Date.now(),
    }
    setTasks(prev => [...prev, newTask]) // Добавляем задачу в массив
  }

  // Функция переключения статуса задачи
  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Функция удаления задачи — теперь задача помечается как завершённая
  const deleteTask = (id: string) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: true } : task // Помечаем задачу как завершённую
    ))
  }

  // Функция для удаления всех завершённых задач
  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed)) // Удаляем завершённые задачи
  }

  // Фильтруем задачи в зависимости от выбранного фильтра
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed // Отображаем только активные задачи
    if (filter === 'completed') return task.completed // Отображаем только завершённые задачи
    return true // Для фильтра "all" показываем все задачи
  })

  // Подсчёт оставшихся активных задач
  const remainingCount = tasks.filter(t => !t.completed).length

  return {
    tasks: filteredTasks,  // Отфильтрованные задачи
    allTasks: tasks,       // Все задачи
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    filter,
    setFilter,
    remainingCount,
  }
}
