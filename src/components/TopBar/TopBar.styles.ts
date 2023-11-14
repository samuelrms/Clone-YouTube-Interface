import { ExtendTheme } from '@/theme/theme.types';
import { AppBar, styled } from '@mui/material';

export const Root = styled(AppBar)<ExtendTheme>(({ theme }) => ({
  boxShadow: 'none',
  zIndex: theme?.zIndex?.drawer + 1,
  backgroundColor: theme?.palette?.background?.default,
}));
