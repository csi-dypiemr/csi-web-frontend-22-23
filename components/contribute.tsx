import React from 'react';
import { Container, Box,Button,Center, Text } from '@chakra-ui/react';
// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }

type Props = {};

const Contribute = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop:'200px'
      }}
    >
      {' '}
      <Text  style={{ display: 'flex', justifyContent: 'center' }}fontSize="6xl" ml="40px" as="b">
        {' '}
        The More You Contribute ,
      </Text>{' '}
      <Text
        style={{ display: 'flex', justifyContent: 'center' }}
        fontSize="6xl"
        ml="40px"
        as="b"
      >
        {' '}
        The More You Learn.
      </Text>
      
      <Center>
      <Button style={{display:'flex',justifyContent:'center'}} mt='50px'bg='#C0EEF2' w='200px'>Join</Button></Center>
      
    </div>
  );
};

export default Contribute;
