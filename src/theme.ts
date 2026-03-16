import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#60a5fa' },
      secondary: { main: '#22c55e' },
      background: {
        default: '#050816',
        paper: 'rgba(15, 23, 42, 0.9)'
      }
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    },
    components: {
      MuiAppBar: {
        defaultProps: { color: 'transparent', elevation: 0 }
      }
    }
  })
);

