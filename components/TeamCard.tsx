import {
  Container,
  Card,
  CardHeader,
  Button,
  HStack,
  Image,
  ButtonGroup,
  Divider,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  Box,
  StackDivider,
  Center,
} from '@chakra-ui/react';
import React from 'react';

// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }

type Props = {};

const TeamCard = (prop) => {
  return (
    <div>
      <Card maxW="sm" style={{marginLeft:'10px'}}>
        <CardBody bg="#181823" style={{ color: 'white' }}>
          <Image
            src={prop.pic}
            alt="Green double couch with wooden legs"
            // borderRadius="lg"
            w="300px"
            h="300px"
          />
          <Stack mt="6" spacing="3">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Heading size="md">{prop.name}</Heading>
              </div>
              <div style={{ display: 'flex' }}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  w="20px"
                  h="20px"
                ></Image>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png
"
                  w="20px"
                  h="20px"
                  ml='10px'
                ></Image>
              </div>
            </div>
            {console.log(prop.position)}
            <Text>{prop.position}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
};

export default TeamCard;
