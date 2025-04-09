// ============================
// Theme: theme.ts
// Description: Поддержка светлой и тёмной темы с кастомными цветами из MUI.
// ============================

import { ThemeOptions } from '@mui/material/styles'
import {
  deepPurple,
  amber,
  grey,
  red,
  blue,
  teal,
} from '@mui/material/colors'


export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: deepPurple[500],
          },
          secondary: {
            main: amber[500],
          },
          background: {
            default: grey[50],
            paper: '#fff',
          },
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
        }
      : {
          primary: {
            main: deepPurple[200],
          },
          secondary: {
            main: amber[300],
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#fff',
            secondary: grey[400],
          },
        }),
    error: { main: red[500] },
    info: { main: blue[500] },
    success: { main: teal[400] },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontSize: 14,
    h1: { fontWeight: 700, fontSize: '2.4rem' },
    h4: { fontWeight: 600, fontSize: '1.6rem' },
    button: { textTransform: 'none', fontWeight: 500 },
  },
})
