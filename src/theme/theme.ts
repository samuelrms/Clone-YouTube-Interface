import { Roboto } from 'next/font/google';
import { ThemeOptions, createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: '#fff',
  //   },
  // },
};

export const customTheme = createTheme(theme);
