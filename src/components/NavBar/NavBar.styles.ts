import { ExtendTheme } from '@/theme/theme.types';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';

export const DesktopDrawer = styled(Drawer)<ExtendTheme>(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    top: 64,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
}));
