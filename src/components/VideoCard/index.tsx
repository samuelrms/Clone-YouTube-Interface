import { Stack, Typography, Avatar } from '@mui/material';
import { Img } from '..';
import { TitleVideo } from './VideoCard.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const VideoCard = ({ item }: any) => {
  return (
    <Stack>
      <Img src={item.thumb} alt={item.title} />
      <Stack flexDirection={'row'} mt={1}>
        <Avatar src={item.authorAvatar} alt={item.authorName} />
        <Stack>
          <TitleVideo gutterBottom variant="body1" color={'textPrimary'}>
            {item.title}
          </TitleVideo>
          <Typography display={'block'} variant="body2" color={'textSecondary'}>
            {item.authorName}
          </Typography>
          <Typography display={'block'} variant="body2" color={'textSecondary'}>
            {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
