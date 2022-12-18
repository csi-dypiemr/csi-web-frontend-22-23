import { Button, Card, CardBody, Image, Stack, Heading, Divider, Container, Text, CardFooter, ButtonGroup, HStack, Flex, VStack, Box, useDisclosure, Collapse } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { FC } from 'react';


const breakpoints = {
    sm: '480px',
    md: '600px',
    lg: '960px',
    xl: '1200px',
    xxl: '1440px',
}

interface cardContent {
    name: string;
    post: string;
    description: string;
    twitterLink : string;
    githubLink : string;
    linkedinLink : string;
  }  

// const border = " solid 2px black"
const border = "none"




const cardTemp: FC<cardContent> = ({ name, post, description, linkedinLink, githubLink, twitterLink }) => {

    function CollapseEx() {

        const { isOpen, onToggle } = useDisclosure()
        return (
            <>
                <Text onClick={onToggle}
                    cursor={'pointer'}
                    color={'blue.500'}>know More</Text>
                <Collapse in={isOpen} animateOpacity>
                    <Box
                        p='5px'
                        color='blackAlpha.900'
                        mt='4'
                        bg='blue.200'
                        rounded='md'
                        shadow='md'>
                        <Text fontSize={['2xs', 'xs', 'md']}>
                            {description}
                        </Text>
                    </Box>
                </Collapse>
            </>
        )
    }

    return (
        <>
            <Card border={border}
                boxShadow={'none'}
                minW={['200', '220', '250', '270']}
                p={2}>
                <Box borderRadius={'inherit'}
                    backgroundColor={'rgb(255,255,255,68%'}>

                    <Box marginInline={'auto'}>

                        <Image boxSize={['150px', '180px', '210px', '230px']}
                            borderRadius={'50%'}
                            boxShadow='md' p={['2px', '4px', '8px', '12px', '18px']} rounded='md' bg='white'
                            marginInline={'auto'}
                            src="https://pm1.narvii.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_hq.jpg"
                        />

                    </Box>

                    <Box>

                        <Text
                            marginLeft={5}
                            fontSize={'md'}>
                            <Heading size={'md'}
                                marginTop={2}>
                                {name}
                            </Heading>

                            Post : {post}
                            <CollapseEx />
                        </Text>

                        <Flex maxW={'80%'}
                            marginTop={2}
                            marginInline={'auto'}
                            justifyContent={'space-evenly'}>
                            <a href={githubLink} target={'_blank'}><FontAwesomeIcon color={'#333'} icon={faGithub} size={'lg'} /></a>
                            <a href={linkedinLink} target={'_blank'}><FontAwesomeIcon color={'black'} icon={faLinkedin} size={'lg'} /></a>
                            <a href={twitterLink} target={'_blank'}><FontAwesomeIcon color={'blue'} icon={faTwitter} size={'lg'} /></a>
                        </Flex>

                    </Box>

                </Box>
            </Card>
        </>
    );
};

export default cardTemp;