import { IconButton, Stack, Theme, useMediaQuery } from '@mui/material';
import {
  Menu,
  MoreVertOutlined,
  NotificationsNoneOutlined,
  Search as SearchIcon,
  VideoCallOutlined,
} from '@mui/icons-material';

import { SignInButton } from '../SignInButton';
import {
  Logo,
  Root,
  Search,
  SearchButton,
  SearchInput,
  Toolbar,
} from './TopBar.styles';

export const TopBar = () => {
  const hiddenUpLG = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up('lg'),
  );

  return (
    <Root color="default">
      <Toolbar>
        <Stack direction={'row'} alignItems={'center'}>
          <Menu />
          <Logo src={'/new-youtube-logo.svg'} alt="logo" loading="lazy" fill />
        </Stack>
        {hiddenUpLG && (
          <Search component={'form'} elevation={0}>
            <SearchInput
              placeholder="Search"
              variant="outlined"
              size="small"
              fullWidth
              color="secondary"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Search>
        )}
        <Stack direction={'row'}>
          <SearchButton size="small">
            <VideoCallOutlined />
          </SearchButton>
          <SearchButton size="small">
            <NotificationsNoneOutlined />
          </SearchButton>
          <SearchButton size="small">
            <MoreVertOutlined />
          </SearchButton>
          <SignInButton />
        </Stack>
      </Toolbar>
    </Root>
  );
};
