import { Heading, Container, HStack, Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import Cards from './teamCards'


const breakpoints = {
  sm: '480px',
  md: '600px',
  lg: '960px',
  xl: '1200px',
  xxl: '1440px',
}
const card1 = { name: "Name1", post: "lorem isn", description: "card text 1" }

// add border to elements for outline view
// var border: string = 'none';
var border: string = 'solid #252526 1px';

type Props = {};

interface cardContent {
  name: string;
  post: string;
  description: string;
}

// main function 
function Team({ }: Props) {

  // final return statement
  return <Container border={border}
    margin={0}
    maxWidth={'100%'}
    backgroundColor={'#fff'}
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
      width={'100%'}
      marginTop={5}
      overflow={"auto"}
      sx={{
        '&::-webkit-scrollbar': {
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
      }}
      border={border}
      p={5}>

      <HStack gap={7}>


        <Cards 
        name='name1' 
        description='hey card 1' 
        post='my post'
        twitterLink='#'
        githubLink='#' 
        linkedinLink='#'/>

        <Cards 
        name='name2' 
        description='hey card 2' 
        post='my post'
        twitterLink='#'
        githubLink='#' 
        linkedinLink='#' />

        <Cards 
        name='name3' 
        description='hey card 3' 
        post='my post'
        twitterLink='#'
        githubLink='#' 
        linkedinLink='#' />

        <Cards 
        name='name4' 
        description='hey card 4' 
        post='my post'
        twitterLink='#'
        githubLink='#' 
        linkedinLink='#' />

        <Cards 
        name='name5' 
        description='hey card 5' 
        post='my post'
        twitterLink='#'
        githubLink='#' 
        linkedinLink='#' />

      </HStack>
    </Box>


  </Container >
}

export default Team;
