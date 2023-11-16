import { Theme, useMediaQuery } from '@mui/material';
import { DesktopDrawer } from './NavBar.styles';
import { ContentNavBar } from '..';

const styles = {
  mobileDrawer: {
    width: 256,
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
};

export const NavBar = () => {
  const hiddenUpLG = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up('lg'),
  );

  return (
    hiddenUpLG && (
      <DesktopDrawer anchor="left" open variant="persistent">
        <ContentNavBar />
      </DesktopDrawer>
    )
  );
};
