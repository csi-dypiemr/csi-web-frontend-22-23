import { chakra, Flex, Button, IconButton } from '@chakra-ui/react';
import React from 'react';
import NextLink from "next/link";
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type Props = {};


const Navbar = (props: Props) => {
  const [display, changeDisplay] = useState("none")
  return (
    <Flex
    justifyContent="space-between"
    >
      <Flex 
       display={["none", "none", "flex", "flex"]}
      >
        <NextLink href="/" passHref>
          <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                my={5}
                w="100%"
          >
                Home
          </Button>
        </NextLink>

        <NextLink href="/" passHref>
          <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%"
          >
                About
          </Button>
        </NextLink>

        <NextLink href="/" passHref>
          <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
          >
                Contact
          </Button>
        </NextLink>

        <NextLink href="/" passHref>
          <Button
                as="a"
                variant="ghost"
                aria-label="Features"
                my={5}
                w="100%"
          >
                Features
          </Button>
        </NextLink>

        <NextLink href="/" passHref>
          <Button
                
                as="a"
                variant="ghost"
                aria-label="Company"
                my={5}
                w="100%"
          >
                Company
          </Button>
        </NextLink>
      </Flex>

      <Flex
       display={["none", "none", "flex", "flex"]}
      >
       <NextLink href="/" passHref>
          <Button
                as="a"
                variant="ghost"
                aria-label="Company"
                my={5}
                w="100%"
          >
                Log In
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button
                as="a"
                variant="solid"
                colorScheme="blue"
                aria-label="Company"
                my={5}
                w="100%"
          >
                Get started
          </Button>
        </NextLink>        
      </Flex>

      <Flex
      my={2}
      alignItems="right"
      >
            <IconButton 
                  aria-label={'open Menu'}
                  size="lg"
                  icon={<HamburgerIcon/>}
                  mr={2}
                  display ={['flex', 'flex', 'none', 'none']}
                  onClick = {() => changeDisplay("flex")}
            />
        </Flex>

      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
          mt={2}
          mr={2}
          aria-label="Close Menu"
          size="lg"
          icon={<CloseIcon/>}
          onClick = {() => changeDisplay("none")}
          />
        </Flex>
        <Flex
        flexDir={"column"}
        align="center"
        >
          <NextLink href="/" passHref>
              <Button
                    as="a"
                    variant="ghost"
                    aria-label="Home"
                    my={5}
                    w="100%"
              >
                    Home
              </Button>
            </NextLink>

            <NextLink href="/" passHref>
              <Button
                    as="a"
                    variant="ghost"
                    aria-label="About"
                    my={5}
                    w="100%"
              >
                    About
              </Button>
            </NextLink>

            <NextLink href="/" passHref>
              <Button
                    as="a"
                    variant="ghost"
                    aria-label="Contact"
                    my={5}
                    w="100%"
              >
                    Contact
              </Button>
            </NextLink>

            <NextLink href="/" passHref>
              <Button
                    as="a"
                    variant="ghost"
                    aria-label="Features"
                    my={5}
                    w="100%"
              >
                    Features
              </Button>
            </NextLink>

            <NextLink href="/" passHref>
              <Button
                    as="a"
                    variant="ghost"
                    aria-label="Company"
                    my={5}
                    w="100%"
              >
                    Company
              </Button>
            </NextLink>

          <NextLink href="/" passHref>
              <Button
                    as="a"
                    variant="ghost"
                    aria-label="Company"s
                    my={5}
                    w="100%"
              >
                    Log In
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button
                    as="a"
                    variant="solid"
                    colorScheme="blue"
                    aria-label="Company"
                    my={5}
                    w="100%"
              >
                    Get started
              </Button>
            </NextLink>        
          </Flex>
      </Flex> 

      
    </Flex>
  )
}

export default Navbar;
