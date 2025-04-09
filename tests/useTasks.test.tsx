// tests/useTasks.test.tsx

import { renderHook, act } from '@testing-library/react'
import { useTasks } from '../src/hooks/useTasks'

describe('useTasks hook', () => {
  it('adds a task correctly', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('New Task')
    })
    expect(result.current.allTasks).toHaveLength(1)
    expect(result.current.allTasks[0].title).toBe('New Task')
  })

  it('toggles a task correctly', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('Task to Toggle')
    })
    const taskId = result.current.allTasks[0].id
    act(() => {
      result.current.toggleTask(taskId)
    })
    expect(result.current.allTasks[0].completed).toBe(true)
  })

  it('marks a task as completed on delete', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('Task to Delete')
    })
    const taskId = result.current.allTasks[0].id
    // Вместо удаления задача помечается как завершённая
    act(() => {
      result.current.deleteTask(taskId)
    })
    expect(result.current.allTasks[0].completed).toBe(true)
  })

  it('filters tasks correctly', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('Active Task')
      result.current.addTask('Completed Task')
    })
    const secondTaskId = result.current.allTasks[1].id
    // Помечаем вторую задачу как завершённую
    act(() => {
      result.current.toggleTask(secondTaskId)
    })
    act(() => {
      result.current.setFilter('completed')
    })
    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.tasks[0].title).toBe('Completed Task')
  })

  it('clears completed tasks correctly', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('Active Task')
      result.current.addTask('Task to Complete')
    })
    const secondTaskId = result.current.allTasks[1].id
    act(() => {
      result.current.toggleTask(secondTaskId)
    })
    act(() => {
      result.current.clearCompleted()
    })
    expect(result.current.allTasks).toHaveLength(1)
    expect(result.current.allTasks[0].title).toBe('Active Task')
  })
})
