// ============================
// Component: App
// Description: Главный компонент приложения. Логотип и название по центру, переключатели вынесены в отдельные компоненты.
// ============================

import React, { useMemo, useState } from 'react'
import {
  Container,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  useMediaQuery,
  Box,
  CssBaseline,
  GlobalStyles,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterTabs from './components/FilterTabs'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTasks } from './hooks/useTasks'
import { getDesignTokens } from './theme'
import { useTranslation } from 'react-i18next'
import logo from './assets/logo.png'
// временно заменим на ручную строку


const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const isMobile = useMediaQuery('(max-width:768px)')
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  const { t, i18n } = useTranslation()
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
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <LanguageSwitcher language={i18n.language} onChange={i18n.changeLanguage} />
            <ThemeSwitcher mode={mode} toggleTheme={toggleTheme} />
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mt: 4,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: '80px', height: '80px', marginBottom: '16px' }}
          />
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            {t('Mindbox-Todo')}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: isMobile ? 'center' : 'flex-start',
            px: 2,
            mt: isMobile ? 0 : 5,
          }}
        >
          <Container maxWidth="sm">
            <Paper sx={{ p: 3 }} elevation={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                {t('title')}
              </Typography>
              <TaskInput onAdd={addTask} />
              <FilterTabs filter={filter} setFilter={setFilter} />
              <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
              <Footer remainingCount={remainingCount} clearCompleted={clearCompleted} />
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
