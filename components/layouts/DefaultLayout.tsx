import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Team from '../Team';

var border: string = 'solid #252526 1px';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Container
      border={border}
      maxW="1200px">

      <Navbar />
      {children}
      <Footer />
      
    </Container>
  );
};

export default DefaultLayout;
