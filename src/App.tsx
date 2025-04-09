// ============================
// Component: App
// Description: Главный компонент приложения. Собирает TaskInput, FilterTabs, TaskList и Footer вместе. Включает переключение светлой/тёмной темы.
// ============================

import React, { useMemo, useState } from 'react'
import {
  Container,
  Typography,
  Paper,
  IconButton,
  AppBar,
  Toolbar,
  useMediaQuery,
  Box,
  CssBaseline,
  GlobalStyles,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterTabs from './components/FilterTabs'
import Footer from './components/Footer'
import { useTasks } from './hooks/useTasks'
import { getDesignTokens } from './theme'

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    filter,
    setFilter,
    remainingCount,
  } = useTasks()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            margin: 0,
            padding: 0,
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
          html: {
            backgroundColor: theme.palette.background.default,
          },
          '#root': {
            minHeight: '100vh',
          },
        }}
      />

      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleTheme} sx={{ color: 'text.primary' }}>
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Paper sx={{ p: 3 }} elevation={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Мои задачи
            </Typography>
            <TaskInput onAdd={addTask} />
            <FilterTabs filter={filter} setFilter={setFilter} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
            <Footer remainingCount={remainingCount} clearCompleted={clearCompleted} />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
