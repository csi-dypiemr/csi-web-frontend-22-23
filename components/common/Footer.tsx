import React from 'react';
import { ReactNode } from 'react';
import {
  Box,
  Heading,
  Container,
  Center,
  Stack,
  SimpleGrid,
  Text,
  HStack,
  VStack,
  Link,
  VisuallyHidden,
  chakra,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaGithub} from 'react-icons/fa';

type Props = {};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      rounded={'full'}
      w={16}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = (props: Props) => {
  return (
    <Container w="full" p={0} bg="whiteAlpha.200" mx="auto">
      <Box w="full">
        <Flex py={20} direction={{ base: "row", md: "column", lg:"column"}} justifyContent="space-around" alignItems="center">
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
              <ListHeader>COMPANY</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
          </VStack>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
              <ListHeader>HELP AND SUPPORT</ListHeader>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Sponsorships</Link>
              <Link href={'#'}>Knowledge Support</Link>
              <Link href={'#'}>Premium</Link>
              <Link href={'#'}>Affiliate Program</Link>
          </VStack>
        </Flex>
      </Box>
      <Box pt={20}>
        <Heading pt={6} fontSize={'md'} textAlign={'center'}>CSI@DYPIEMR</Heading>
      </Box>
      <Box pt={5}>
        <Text  fontSize={'sm'} textAlign={'center'}>
          © 2022 CSI-DYPIEMR. All rights reserved
        </Text>
      </Box>
      <Center pt={15} pb={"50px"}> 
        <Stack alignItems="center" direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaGithub />
            </SocialButton>
          </Stack>
        </Center>
    </Container>
  );
}; 



export default Footer;
