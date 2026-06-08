import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary:    { main: '#7c8cff' },
    secondary:  { main: '#9aa6ff' },
    background: { default: '#0f1115', paper: '#16191f' },
    text:       { primary: '#e9eaec', secondary: '#9aa0ab' },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: 'var(--font-inter), "Helvetica Neue", Arial, sans-serif',
    allVariants: {
      fontFamily: 'var(--font-inter), "Helvetica Neue", Arial, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': { colorScheme: 'dark' },
        body: {
          background: '#0f1115',
          fontFamily: 'var(--font-inter), "Helvetica Neue", Arial, sans-serif',
        },
        '*':  { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#16191f',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(255,255,255,0.08)' },
      },
    },
  },
});
