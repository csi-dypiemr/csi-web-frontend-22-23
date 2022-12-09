import { ReactElement, useState } from 'react';
import { Button, Card, CardBody, Image, Stack, Heading, Divider, Container, Text, CardFooter, ButtonGroup, HStack, Flex, VStack, Box, useDisclosure, Collapse } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import React from 'react';


const breakpoints = {
  sm: '480px',
  md: '600px',
  // lg: '960px',
  xl: '1200px',
  // xxl: '1440px',
}

function CollapseEx() {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>know More</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p='5px'
          color='white'
          mt='4'
          bg='blue.200'
          rounded='md'
          shadow='md'>
          <Text fontSize={['2xs', 'xs', 'md']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, veniam.
          </Text>
        </Box>
      </Collapse>
    </>
  )
}


type Props = {};
// var border: string = 'solid #252526 1px';
var border: string = 'none';

// main function 

function Team({ }: Props) {
  return <Container border={border}
    margin={0}
    maxWidth={'100%'}
    backgroundColor={'rgba( 209, 231, 255 , 0.5)'}
    padding={1}
    overflow={'auto'} >
    <Heading
      as={'h4'}
      size={'lg'}
      marginTop={5}
      marginLeft={10}>
      Our Enthusiastic team
    </Heading>
    <Box
      marginTop={5}
      width={'100%'}
      overflow={"auto"}
      border={border}
      p={5}>

      <HStack
        marginTop={5}
        marginBottom={10}
        gap={4}>

        <Card
          border={border}
          minWidth={['300px', '350px', '400px', '450px']}
          maxWidth={['350px', '400px', '450px', '500px']}
          p={0}>

          <Box
            borderRadius={'inherit'} backgroundColor={'rgba(255, 255, 255, 68%)'}
            minW={['170px', '200px', '230px', '250px']}>

            <Text fontSize={'md'} p={'3'}>
              <Image
                float={'left'}
                marginTop={1}
                marginBottom={2}
                marginInlineEnd={3}
                boxSize={['100px', '150px', '180px', '220px']}
                src='https://www.seekpng.com/png/detail/72-729869_circled-user-female-skin-type-4-icon-profile.png' />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, unde.
            </Text>

          </Box>

          <Box textAlign={'center'}>

            <Heading size={'xs'}
              marginTop={2}>
              Name
            </Heading>
            <Text fontSize={'xs'}>
              Post : lorem ispin
            </Text>

            <Flex justifyContent={'space-evenly'}

              marginTop={1}
              marginBottom={1}>
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faCoffee} />
            </Flex>

          </Box>

        </Card>

        {/* Longcards are repeated from here  */}


        <Card
          border={border}
          minWidth={['300px', '350px', '400px', '450px']}
          maxWidth={['350px', '400px', '450px', '500px']}
          p={0}>

          <Box
            borderRadius={'inherit'} backgroundColor={'rgba(255, 255, 255, 68%)'}
            minW={['170px', '200px', '230px', '250px']}>

            <Text fontSize={'md'} p={'3'}>
              <Image
                float={'left'}
                marginTop={1}
                marginBottom={2}
                marginInlineEnd={3}
                boxSize={['100px', '150px', '180px', '220px']}
                src='https://www.seekpng.com/png/detail/72-729869_circled-user-female-skin-type-4-icon-profile.png' />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, unde.
            </Text>

          </Box>

          <Box textAlign={'center'}>

            <Heading size={'xs'}
              marginTop={2}>
              Name
            </Heading>
            <Text fontSize={'xs'}>
              Post : lorem ispin
            </Text>

            <Flex justifyContent={'space-evenly'}

              marginTop={1}
              marginBottom={1}>
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faCoffee} />
            </Flex>

          </Box>

        </Card>


        <Card
          border={border}
          minWidth={['300px', '350px', '400px', '450px']}
          maxWidth={['350px', '400px', '450px', '500px']}
          p={0}>

          <Box
            borderRadius={'inherit'} backgroundColor={'rgba(255, 255, 255, 68%)'}
            minW={['170px', '200px', '230px', '250px']}>

            <Text fontSize={'md'} p={'3'}>
              <Image
                float={'left'}
                marginTop={1}
                marginBottom={2}
                marginInlineEnd={3}
                boxSize={['100px', '150px', '180px', '220px']}
                src='https://www.seekpng.com/png/detail/72-729869_circled-user-female-skin-type-4-icon-profile.png' />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, unde.
            </Text>

          </Box>

          <Box textAlign={'center'}>

            <Heading size={'xs'}
              marginTop={2}>
              Name
            </Heading>
            <Text fontSize={'xs'}>
              Post : lorem ispin
            </Text>

            <Flex justifyContent={'space-evenly'}

              marginTop={1}
              marginBottom={1}>
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faCoffee} />
            </Flex>

          </Box>

        </Card>


        <Card
          border={border}
          minWidth={['300px', '350px', '400px', '450px']}
          maxWidth={['350px', '400px', '450px', '500px']}
          p={0}>

          <Box
            borderRadius={'inherit'} backgroundColor={'rgba(255, 255, 255, 68%)'}
            minW={['170px', '200px', '230px', '250px']}>

            <Text fontSize={'md'} p={'3'}>
              <Image
                float={'left'}
                marginTop={1}
                marginBottom={2}
                marginInlineEnd={3}
                boxSize={['100px', '150px', '180px', '220px']}
                src='https://www.seekpng.com/png/detail/72-729869_circled-user-female-skin-type-4-icon-profile.png' />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, unde.
            </Text>

          </Box>

          <Box textAlign={'center'}>

            <Heading size={'xs'}
              marginTop={2}>
              Name
            </Heading>
            <Text fontSize={'xs'}>
              Post : lorem ispin
            </Text>

            <Flex justifyContent={'space-evenly'}

              marginTop={1}
              marginBottom={1}>
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faCoffee} />
            </Flex>

          </Box>

        </Card>

        {/* Longcards repeted till here  */}

      </HStack>


    </Box>
    <Box
      width={'100%'}
      marginTop={5}
      overflow={"auto"}
      border={border}
      p={5}>

      <HStack gap={4}>


        <Card border={border}
          boxShadow={'none'}
          minW={['150', '170', '200', '220']}
          p={2}>
          <Box borderRadius={'inherit'}
            backgroundColor={'rgb(255,255,255,68%'}>

            <Box marginInline={'auto'}>

              <Image boxSize={['120px', '150px', '180px', '200px']}
                borderRadius={'50%'}
                boxShadow='md' p={['2px', '4px', '8px', '12px', '18px']} rounded='md' bg='white'
                marginInline={'auto'}
                src="https://pm1.narvii.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_hq.jpg"
              />

            </Box>

            <Box>

              <Heading size={'md'}
                marginTop={2}>
                Name
              </Heading>

              <Text fontSize={'md'}>
                Post : lorem ispin
                <CollapseEx />
              </Text>

              <Flex maxW={'80%'}
                marginTop={2}
                marginInline={'auto'}
                justifyContent={'space-evenly'}>
                <FontAwesomeIcon icon={faGithub} size={'lg'} />
                <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
                <FontAwesomeIcon icon={faTwitter} size={'lg'} />
              </Flex>

            </Box>

          </Box>
        </Card>

        <Card border={border}
          boxShadow={'none'}
          minW={['150', '170', '200', '220']}
          p={2}>
          <Box borderRadius={'inherit'}
            backgroundColor={'rgb(255,255,255,68%'}>

            <Box marginInline={'auto'}>

              <Image boxSize={['120px', '150px', '180px', '200px']}
                borderRadius={'50%'}
                boxShadow='md' p={['2px', '4px', '8px', '12px', '18px']} rounded='md' bg='white'
                marginInline={'auto'}
                src="https://pm1.narvii.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_hq.jpg"
              />

            </Box>

            <Box>

              <Heading size={'md'}
                marginTop={2}>
                Name
              </Heading>

              <Text fontSize={'md'}>
                Post : lorem ispin
                <CollapseEx />
              </Text>

              <Flex maxW={'80%'}
                marginTop={2}
                marginInline={'auto'}
                justifyContent={'space-evenly'}>
                <FontAwesomeIcon icon={faGithub} size={'lg'} />
                <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
                <FontAwesomeIcon icon={faTwitter} size={'lg'} />
              </Flex>

            </Box>

          </Box>
        </Card>


        <Card border={border}
          boxShadow={'none'}
          minW={['150', '170', '200', '220']}
          p={2}>
          <Box borderRadius={'inherit'}
            backgroundColor={'rgb(255,255,255,68%'}>

            <Box marginInline={'auto'}>

              <Image boxSize={['120px', '150px', '180px', '200px']}
                borderRadius={'50%'}
                boxShadow='md' p={['2px', '4px', '8px', '12px', '18px']} rounded='md' bg='white'
                marginInline={'auto'}
                src="https://pm1.narvii.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_hq.jpg"
              />

            </Box>

            <Box>

              <Heading size={'md'}
                marginTop={2}>
                Name
              </Heading>

              <Text fontSize={'md'}>
                Post : lorem ispin
                <CollapseEx />
              </Text>

              <Flex maxW={'80%'}
                marginTop={2}
                marginInline={'auto'}
                justifyContent={'space-evenly'}>
                <FontAwesomeIcon icon={faGithub} size={'lg'} />
                <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
                <FontAwesomeIcon icon={faTwitter} size={'lg'} />
              </Flex>

            </Box>

          </Box>
        </Card>


        <Card border={border}
          boxShadow={'none'}
          minW={['150', '170', '200', '220']}
          p={2}>
          <Box borderRadius={'inherit'}
            backgroundColor={'rgb(255,255,255,68%'}>

            <Box marginInline={'auto'}>

              <Image boxSize={['120px', '150px', '180px', '200px']}
                borderRadius={'50%'}
                boxShadow='md' p={['2px', '4px', '8px', '12px', '18px']} rounded='md' bg='white'
                marginInline={'auto'}
                src="https://pm1.narvii.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_hq.jpg"
              />

            </Box>

            <Box>

              <Heading size={'md'}
                marginTop={2}>
                Name
              </Heading>

              <Text fontSize={'md'}>
                Post : lorem ispin
                <CollapseEx />
              </Text>

              <Flex maxW={'80%'}
                marginTop={2}
                marginInline={'auto'}
                justifyContent={'space-evenly'}>
                <FontAwesomeIcon icon={faGithub} size={'lg'} />
                <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
                <FontAwesomeIcon icon={faTwitter} size={'lg'} />
              </Flex>

            </Box>

          </Box>
        </Card>


      </HStack>
    </Box>


  </Container>
}

export default Team;
