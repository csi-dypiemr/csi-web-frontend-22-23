import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Box w={"full"}>
      <Navbar />
      <Container maxW={"1200px"} mx="auto">
       {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
