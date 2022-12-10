import { Container, Flex, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import type { NextPageWithLayout } from './_app';
import Event from '../components/common/Event';

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Heading>Hello CSI</Heading>
      <Flex>
      <Event />
      </Flex>
    </Container>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
