import { ExtendTheme } from '@/theme/theme.types';
import {
  AppBar,
  styled,
  Toolbar as MuiToolbar,
  IconButton,
  TextField,
  darken,
  Paper,
  PaperProps,
  IconButtonProps,
} from '@mui/material';
import { Img } from '../Image';

export const Root = styled(AppBar)<ExtendTheme>(({ theme }) => ({
  boxShadow: 'none',
  zIndex: theme?.zIndex?.drawer + 1,
  backgroundColor: theme?.palette?.background?.default,
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: 56,
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const Logo = styled(Img)(({ theme }) => ({
  height: '18px !important',
  cursor: 'pointer',
  marginLeft: theme?.spacing(3),
}));

export const Search = styled(Paper)<PaperProps>(({ theme }) => ({
  backgroundColor: darken(theme?.palette?.background?.paper, 0.05),
  border: `1px solid ${theme?.palette?.divider}`,
  padding: '2px 16px 2px 0',
  alignItems: 'center',
  borderLeft: 'none',
  borderRadius: 20,
  display: 'flex',
  height: 40,
  width: 700,
  gap: 8,
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
  [`& .MuiOutlinedInput-root`]: {
    borderRadius: '20px 0 0 20px',
    backgroundColor: theme?.palette?.common?.white,
  },
}));

export const SearchButton = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({}),
);
