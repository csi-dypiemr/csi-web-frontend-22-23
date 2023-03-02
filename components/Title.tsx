import React from 'react';
import { Container,Box } from '@chakra-ui/react';
// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }


type Props = {};

const Title = (props: Props) => {
  return <div><Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box></div>;
};

export default Title;
