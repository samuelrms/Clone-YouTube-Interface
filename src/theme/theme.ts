import { Roboto } from 'next/font/google';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#065fd4',
    },
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white,
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
};

export const customTheme = createTheme(theme);
