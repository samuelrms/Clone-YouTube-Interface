import { ExtendTheme } from '@/theme/theme.types';
import { List, ListItemButton, ListItemText, styled } from '@mui/material';

export const ListContainer = styled(List)<ExtendTheme>(({ theme }) => ({
  padding: 0,
}));

export const ListItemsButton = styled(ListItemButton)<ExtendTheme>(
  ({ theme }) => ({
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 16,
  }),
);

export const ListItemsText = styled(ListItemText)<ExtendTheme>(({ theme }) => ({
  fontSize: 14,
}));
