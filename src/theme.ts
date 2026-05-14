import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f5b944' },
    secondary: { main: '#4ade80' },
    background: {
      default: '#0d0f12',
      paper: '#111318'
    },
    text: {
      primary: '#c9d1d9',
      secondary: '#7d8590'
    }
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace',
    allVariants: {
      fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': { colorScheme: 'dark' },
        body: {
          background: '#0d0f12',
          fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace',
        },
        '*': { boxSizing: 'border-box' },
        'html': { scrollBehavior: 'smooth' },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#111318',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 6,
          boxShadow: 'none',
          backgroundImage: 'none',
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(255,255,255,0.1)' }
      }
    }
  }
});
