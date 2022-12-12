import { Container, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Event from '../components/Event';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Team from '../components/Team';
import type { NextPageWithLayout } from './_app';


const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Hero />
      <Team />
      <Event />
      <Contact />
    </Container>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
