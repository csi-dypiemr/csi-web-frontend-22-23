import react from 'react'
import { Container, Spacer, Show, Hide, Button, Flex, Image, VStack, Heading, Input, InputLeftAddon, InputRightAddon, Stack, InputGroup, Box } from '@chakra-ui/react'

const NewsLetter = () =>{
    return(
        <VStack ml='500'w='700px' mt='10'pt='5' h='150px' borderRadius='10px' bg='#78A4E7' alignItems='center' spacing={15}>

        {/* <Box  ml='100'w='510px' h='70px' bg='black'> */}
        <Input type='email' h='55px' m='5' borderRadius='10px' w='500px' bg='white' placeholder='Email' />
        <Button h='60px' borderRadius='10px' w='210px' bg='white' fontSize='40' textColor={'blue'}>Subscribe </Button>

        {/* </Box> */}
        </VStack>

    );
};

export default NewsLetter;