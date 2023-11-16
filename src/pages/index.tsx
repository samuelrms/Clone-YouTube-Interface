import { Grid, Stack } from '@mui/material';

import { Layout, VideoCard } from '@/components';

const Home = ({ data }: { data: [] }) => {
  console.log(data);
  return (
    <Layout
      title="YouTube"
      description="YouTube homepage, the best videos here!"
    >
      <Stack p={2}>
        <Grid container gap={4}>
          {data.map((item: any) => (
            <Grid item xs={12} sm={6} md={3} xl={2.5} key={item.id}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = [
    {
      id: 1,
      title: 'The best video ever!',
      authorID: 1,
      authorName: 'John Doe',
      authorAvatar: '/avatar.png',
      views: 100,
      thumb: '/thumb1.png',
      videoURL: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'The best video ever!',
      authorID: 1,
      authorName: 'John Doe',
      authorAvatar: '/avatar.png',
      views: 100,
      thumb: '/thumb2.png',
      videoURL: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'The best video ever!',
      authorID: 1,
      authorName: 'John Doe',
      authorAvatar: '/avatar.png',
      views: 100,
      thumb: '/thumb3.png',
      videoURL: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'The best video ever!',
      authorID: 1,
      authorName: 'John Doe',
      authorAvatar: '/avatar.png',
      views: 100,
      thumb: '/thumb4.png',
      videoURL: 'url',
      updatedAt: new Date(),
    },
    {
      id: 5,
      title: 'The best video ever!',
      authorID: 1,
      authorName: 'John Doe',
      authorAvatar: '/avatar.png',
      views: 100,
      thumb: '/thumb5.png',
      videoURL: 'url',
      updatedAt: new Date(),
    },
    {
      id: 6,
      title: 'The best video ever!',
      authorID: 1,
      authorName: 'John Doe',
      authorAvatar: '/avatar.png',
      views: 100,
      thumb: '/thumb6.png',
      videoURL: 'url',
      updatedAt: new Date(),
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default Home;
