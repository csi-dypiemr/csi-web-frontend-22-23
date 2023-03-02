import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Event from '../components/Event';
import Title from '../components/Title';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Team from '../components/Team';
import Values from '../components/values';

{/* changed below this */}
import TeamSec from '../components/TeamSec';
import KnowMore from '../components/KnowMore';
{/* changed above this */}

import type { NextPageWithLayout } from './_app';
import styles from "../styles/Home.module.css"

const Home: NextPageWithLayout = () => {
  return (
    // changed container width
    <Container
      className={styles.home}
      maxW={'1500px'}
      marginInline={'auto'}>
      <Title />
      <Values />
      <Event />

      {/* changed below this */}
      <TeamSec />
      <KnowMore />
      {/* changed above this */}
      <Team />
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
