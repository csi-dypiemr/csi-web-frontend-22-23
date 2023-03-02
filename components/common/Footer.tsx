import React from 'react';
import {
  Container,
  Stack,
  HStack,
  VStack,
  Text,
  Image,
} from '@chakra-ui/react';
type Props = {};

const Footer = (props: Props) => {
  return (
    <div style={{ display: 'flex' }}>
      <Image
        w="50px"
        mr='10px'
        ml='10px'
        src="https://www.acpce.org/en/wp-content/uploads/2017/06/csi-logo.png"
      ></Image>
      <div style={{ display: 'flex', flexDirection:'column',marginLeft:'30px' }}>
        <Text style={{fontSize:'20px',fontWeight:'bold'}}>Computer Society of India</Text>
        <Text style={{fontSize:'10px',fontWeight:'bold'}}>
          {' '}
          D. Y. Patil Institute of Engineering, Management and Research
        </Text>
      </div>
      
      
    </div>
  );
};

export default Footer;
