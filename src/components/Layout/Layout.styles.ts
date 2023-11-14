import { ExtendTheme } from '@/theme/theme.types';
import { Stack, styled } from '@mui/material';

export const Root = styled('main')<ExtendTheme>(({ theme }) => ({
  background: theme?.background?.dark,
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
}));

export const Wrapper = styled(Stack)<ExtendTheme>(({ theme }) => ({
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [theme?.breakpoints?.up?.('lg') ?? '']: {
    paddingLeft: 256,
  },
}));

export const ContentContainer = styled(Stack)(() => ({
  flex: '1 1 auto',
  overflow: 'hidden',
}));

export const Content = styled(Stack)(() => ({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
}));
