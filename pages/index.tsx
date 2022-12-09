import { Container, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import type { NextPageWithLayout } from './_app';


const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Heading>Hello CSI</Heading>
    </Container>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
