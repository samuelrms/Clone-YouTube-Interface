import { Button } from '@mui/material';

import { Layout } from '@/components';

const Home = () => {
  return (
    <Layout
      title="YouTube"
      description="YouTube homepage, the best videos here!"
    >
      <Button variant="outlined" color="secondary">
        Hello
      </Button>
    </Layout>
  );
};

export default Home;
