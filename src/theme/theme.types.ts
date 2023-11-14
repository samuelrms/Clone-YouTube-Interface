import { TypeBackground } from '@mui/material';
import { theme } from '.';

export type ExtendedBackground = {
  dark: string;
} & TypeBackground;

export type CustomTheme = typeof theme;

export type ExtendTheme = {
  theme?: {
    background: ExtendedBackground;
  } & CustomTheme;
};
