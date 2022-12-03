import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Container maxW="1200px">
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
