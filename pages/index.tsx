import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Event from '../components/Event';
import Title from '../components/Title';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Team from '../components/Team';
import TeamSec from '../components/TeamSec';
import type { NextPageWithLayout } from './_app';
import Contribute from '../components/contribute';

const Home: NextPageWithLayout = () => {
  return (
    // changed container width
    <Container
      maxW={'1200px'}
      marginInline={'auto'}>
      <Title />
      <TeamSec></TeamSec>
      <Contribute></Contribute>
      {/* <Event />
      <Team /> */}
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
