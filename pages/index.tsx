import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Event from '../components/Event';
import Title from '../components/Title';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Team from '../components/Team';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    // changed container width
    <Container
      maxW={'1200px'}
      marginInline={'auto'}>
      <Title />
      <Event />
      <Team />
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
