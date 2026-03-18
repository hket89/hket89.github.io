import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#7dd3fc' },
      secondary: { main: '#22d3ee' },
      background: {
        default: '#020617',
        paper: '#0f172a'
      },
      text: {
        primary: '#e2e8f0',
        secondary: '#94a3b8'
      }
    },
    shape: { borderRadius: 18 },
    typography: {
      fontFamily: '"Sora", "Avenir Next", sans-serif',
      h1: {
        fontWeight: 750,
        lineHeight: 1.03
      },
      h3: {
        fontWeight: 700
      },
      h4: {
        fontWeight: 700
      },
      overline: {
        fontFamily: '"IBM Plex Mono", monospace',
        fontWeight: 500,
        letterSpacing: '0.16em'
      },
      button: {
        textTransform: 'none',
        fontWeight: 600
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            colorScheme: 'dark'
          },
          body: {
            background:
              'linear-gradient(135deg, rgba(2, 6, 23, 0.98) 0%, rgba(8, 47, 73, 0.86) 45%, rgba(2, 6, 23, 0.98) 100%)'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(7px)',
            boxShadow: '0 16px 42px rgba(2, 8, 20, 0.32)',
            borderWidth: 1
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.02em'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: '1.1rem'
          },
          contained: {
            background: 'linear-gradient(110deg, #0284c7 0%, #0ea5e9 60%, #22d3ee 100%)',
            color: '#e0f2fe'
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: 'rgba(125, 211, 252, 0.2)'
          }
        }
      }
    }
  })
);

