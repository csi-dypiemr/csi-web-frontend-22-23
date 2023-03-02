import { Container, Text } from '@chakra-ui/react';
import React from 'react';
// import { map } from 'rxjs/operators';
import data from '../public/data.js';

import TeamCard from './TeamCard';

// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }

type Props = {};
// var map = new Map();
const TeamCards = data.map((card) => {
  return <TeamCard name={card.name} pic={card.pic} position={card.position} />;
});
const TeamSec = (props: Props) => {
  return (
    <div style={{ backgroundColor: '#181823' }}>
      <Text
        fontSize="3xl"
        ml="40px"
        as="b"
        style={{ color: 'white', display: 'flex' }}
      >
        MEET OUR TEAM
      </Text>
      <hr
        style={{
          width: '300px',
          backgroundColor: 'white',
          marginLeft: '40px',
          height: '3px',
        }}
      ></hr>
      <div style={{ display: 'flex', backgroundColor: '#181823' }}>
        {TeamCards}
      </div>
      
    </div>
  );
};

export default TeamSec;