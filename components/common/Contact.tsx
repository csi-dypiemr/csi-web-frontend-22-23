import React from 'react'
import { Container, Spacer, Show, Hide, Button, Flex, Image, VStack, Heading, Input, InputLeftAddon, InputRightAddon, Stack, InputGroup, Box } from '@chakra-ui/react'



const Contact = () => {
  return (

    <Flex bg='#ADD8E6' borderWidth="1px"
      borderRadius="lg"
      boxShadow="1px 1px 3px rgba(0,0,0,0.3)" w={1500} p={4} m="20px 20px auto"  >

      <Box flex='1' bg='white' pt='100' mt='' w='600px' >
        <VStack alignItems='center' spacing={15}>
          <Heading color='black' mt='-50' as='h1' fontSize='60px' >Contact Us</Heading>
          <Input type='text' h='55px' borderRadius='10px' w='500px' bg='#78A4E7' placeholder='Name' />
          <Input type='text' h='55px' borderRadius='10px' bg='#78A4E7' w='500px' placeholder='Query' />
          <Input type='email' h='55px' borderRadius='10px' bg='#78A4E7' w='500px' placeholder='Email' />
          <Button h='60px' borderRadius='10px' w='210px' bg='#3A6EF2' fontSize='40' textColor={'white'}>Submit </Button>

        </VStack>

      </Box>
      <Hide below='1000px'>
        <Box flex='1' bg='white' w='600px' h='500px '>

          <Image boxSize='500' style={{ borderRadius: '30px' }} src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1670581927~exp=1670582527~hmac=cbb57146b39ca75b5977e45d1bc68d16b8673fc8f0b07edc065b4a9c494b9cc8'></Image>

        </Box>

      </Hide>



    </Flex>








  );
};

export default Contact;