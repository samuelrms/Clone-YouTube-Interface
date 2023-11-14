import { IconButton, Stack, Toolbar } from '@mui/material';
import { Root } from './TopBar.styles';
import { Menu } from '@mui/icons-material';
import Image from 'next/image';

export const TopBar = () => {
  return (
    <Root color="default">
      <Toolbar>
        <Stack>
          <IconButton>
            <Menu />
          </IconButton>
          <Image src={'/new-youtube-logo.svg'} alt="logo" fill />
        </Stack>
        <Stack></Stack>
        <Stack></Stack>
      </Toolbar>
    </Root>
  );
};
