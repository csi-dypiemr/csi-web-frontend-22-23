import { Image, 
    Card, 
    CardBody, 
    GridItem, 
    Heading, 
    SimpleGrid, 
    VStack, 
    Divider, 
    Button, 
    ButtonGroup, 
    Stack, 
    CardFooter, 
    Text, 
    HStack, 
    Spacer,
    useBreakpointValue
   } from '@chakra-ui/react';
import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {};

const Event = (props: Props) => {
const colspan = useBreakpointValue({Base: 3, md: 1});
return <div>
<VStack bg={"white"} h={'full'} w={'full'} spacing={5} p={10}>
 <Heading size={"2xl"}>Events</Heading>
 <VStack align={'flex-start'}>
   <SimpleGrid columns={[1,2,3]} columnGap={9} rowGap={6} w={'full'}>
     <GridItem colSpan={colspan}>
       <Card maxW="lg" h={420}>
         <CardBody>
         <Stack  spacing='5'>
           <Image src='https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0' alt='photo1' borderRadius='xl' />
           <HStack>
           <Heading size={'lg'}>Data Structures & Algorithms</Heading>
           <Spacer />
           <Button size={'sm'} colorScheme={"gray"}>Ongoing</Button>
           </HStack>
           <Text>Regration: </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
           <ButtonGroup spacing={[10,12,20]}>
             <Button size={"sm"}>
               Register
             </Button>
             <Spacer />
             <Button variant='link' size={""}>
               details
               <FaAngleDoubleRight size={''} />
             </Button>
           </ButtonGroup>
         </CardFooter>
       </Card>
     </GridItem>
     <GridItem colSpan={colspan}>
       <Card maxW="lg" h={420}>
         <CardBody>
         <Stack  spacing='5'>
           <Image src='https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0' alt='photo1' borderRadius='xl' />
           <HStack>
           <Heading size={'lg'}>The Silver Lining</Heading>
           <Spacer />
           <Button size={'sm'} colorScheme={"gray"}>Past</Button>
           </HStack>
           <Text>Date of Event: </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
           <ButtonGroup spacing={[10,12,20]}>
             <Button size={"sm"}>
               Register
             </Button>
             <Spacer />
             <Button variant='link' size={""}>
               details
               <FaAngleDoubleRight size={''} />
             </Button>
           </ButtonGroup>
         </CardFooter>
       </Card>
     </GridItem>
     <GridItem colSpan={colspan}>
       <Card maxW="lg" h={420}>
         <CardBody>
         <Stack  spacing='5'>
           <Image src='https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0' alt='photo1' borderRadius='xl' />
           <HStack>
           <Heading size={'lg'}>Blockchain Bootcamp</Heading>
           <Spacer />
           <Button size={'sm'} colorScheme={"gray"}>Upcoming</Button>
           </HStack>
           <Text>Date of Condution: </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
           <ButtonGroup spacing={[10,12,20]}>
             <Button size={"sm"}>
               Register
             </Button>
             <Spacer />
             <Button variant='link' size={""}>
               details
               <FaAngleDoubleRight size={''} />
             </Button>
           </ButtonGroup>
         </CardFooter>
       </Card>
     </GridItem>
     <GridItem colSpan={colspan}>
       <Card maxW="lg" h={420}>
         <CardBody>
         <Stack  spacing='5'>
           <Image src='https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0' alt='photo1' borderRadius='xl' />
           <HStack>
           <Heading size={'lg'}>Linux Bootcamp</Heading>
           <Spacer />
           <Button size={'sm'} colorScheme={"gray"}>Upcoming</Button>
           </HStack>
           <Text>Date of Condution: </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
           <ButtonGroup spacing={[10,12,20]}>
             <Button size={"sm"}>
               Register
             </Button>
             <Spacer />
             <Button variant='link' size={""}>
               details
               <FaAngleDoubleRight size={''} />
             </Button>
           </ButtonGroup>
         </CardFooter>
       </Card>
     </GridItem>
     <GridItem colSpan={colspan}>
       <Card maxW="lg" h={420}>
         <CardBody>
         <Stack  spacing='5'>
           <Image src='https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0' alt='photo1' borderRadius='xl' />
           <HStack>
           <Heading size={'lg'}>Career With Cyber Security</Heading>
           <Spacer />
           <Button size={'sm'} colorScheme={"gray"}>Past</Button>
           </HStack>
           <Text>Date of Condution: </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
           <ButtonGroup spacing={[10,12,20]}>
             <Button size={"sm"}>
               Register
             </Button>
             <Spacer />
             <Button variant='link' size={""}>
               details
               <FaAngleDoubleRight size={''} />
             </Button>
           </ButtonGroup>
         </CardFooter>
       </Card>
     </GridItem>
       <GridItem colSpan={colspan}>
       <Card maxW="lg" h={420}>
         <CardBody>
         <Stack  spacing='5'>
           <Image src='https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0' alt='photo1' borderRadius='xl' />
           <HStack>
           <Heading size={'lg'}>Git-GitHub Bootcamp</Heading>
           <Spacer />
           <Button size={'sm'} colorScheme={"gray"}>Past</Button>
           </HStack>
           <Text>Date of Condution: </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
           <ButtonGroup spacing={[10,12,20]}>
             <Button size={"sm"}>
               Register
             </Button>
             <Spacer />
             <Button variant='link' size={""}>
               details
               <FaAngleDoubleRight size={''} />
             </Button>
           </ButtonGroup>
         </CardFooter>
       </Card>
     </GridItem>
   </SimpleGrid>
 </VStack>
</VStack>
</div>;
};

export default Event;
