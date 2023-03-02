import React from 'react';
import { Button, Center, Text } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }


type Props = {};

const KnowMore = (props: Props) => {
  return <div
    style={{
      background: 'white',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '200px',
      padding: '5em'
    }}
  >
    <div className="content"
      style={{
        width: '80%',
        marginInline: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'Center',
        height: '500px'
      }}>
      <Text style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '3em'
      }}>
        The More You Contribute ,
        <br />The More You Learn.
      </Text>

      <Center>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
          mt='50px' bg='#C0EEF2' w='200px'>
          Join
        </Button>
      </Center>
    </div>
  </div>;
};

export default KnowMore;
