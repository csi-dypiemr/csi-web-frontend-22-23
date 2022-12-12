import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Contact from '../common/Contact';
import NewsLetter from '../common/NewsLetter';
type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Container maxW="1200px">
      <Navbar />
      {children}
      <Contact/>
      <NewsLetter/>      
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
