import { Avatar, Box, Flex, Heading, Image, Text, HStack } from "@chakra-ui/react";
import { ChatIcon } from '@chakra-ui/icons';
import Bg from "../assets/BG.png";
import Pics from "../assets/Pics.png";
import Pics2 from "../assets/Pics2.png";
import CAC  from "../assets/CAC.jfif"



const Hero = () => {
  return (
    <Flex
      bgImage={Bg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      px={{ base: 4, md: 8 }}
      py={8}
    >
      <Flex w="full" direction={{ base: "column", md: "row" }}>
        <Box flex="1" textAlign='left' mt={{base: '0', md: '14'}}>
        <Heading fontSize={{ base: "40px", md: "60px" }} fontWeight="bold">
            <Text as="span" position="relative" display="inline-block">
              Explore the world
              <Box
                as="span"
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                height="8px"
                bg="gold"
                zIndex="-1"
              />
            </Text>{" "}
            with{" "}
            <Box as="span" color="#9D7C49">
              AUGURI TRAVEL AGENCY &
            </Box>{" "}
            <Box as="span" color="#9D7C49">
              LAWAL TOUR GUIDE !
            </Box>
          </Heading>

          <Heading
            fontSize={{ base: "20px", md: "30px" }}
            color={"gray"}
            py={6}
            fontFamily="Poppins"
          >
            Where Adventure meets Experience
          </Heading>

          <HStack>
            <Avatar size='sm' src={CAC}/>
            <Text fontWeight={"BOLD"} fontFamily={"Poppins"} fontSize={'18px'}>Registered by CAC</Text>
          </HStack>
        </Box>

        <Box flex="1" mt={{ base: 10, md: 0 }} display="flex">
          <Box alt="Placeholder image">
            <Image src={Pics} px={2} w={{ base: "200%" }} />
          </Box>

          <Box>
            <Image
              src={Pics2}
              alt="Placeholder image"
              px={2}
              mt={{ base: 14, md: 20 }}
            />
          </Box>
        </Box>
      </Flex>

      <Box pos={'relative'}>
      <Box
      position="fixed"
      bottom={8}
      right={8}
      bg="#9D7C49"
      color="white"
      borderRadius="50%"
      width={{base: '80px', md: '100px'}}
      height={{base: '80px', md: '100px'}}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
      cursor="pointer"
      zIndex="999"
      fontFamily={"Poppins"}
      fontWeight={"600"}
      animation="bubble 3s infinite"
     
    >
      <Flex flexDirection="column" alignItems="center" >
      <ChatIcon boxSize={{base: '4', md: '6'}} />
        <Text fontSize="sm" fontWeight="bold" textAlign="center">
          24/7
        </Text>
        <Text fontSize="xs" textAlign="center">
          Live Chat
        </Text>
      </Flex>
    </Box>
    </Box>

    
    </Flex>
  );
};

export default Hero;
