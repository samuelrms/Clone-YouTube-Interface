import { Typography, styled } from '@mui/material';

export const TitleVideo = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
}));
