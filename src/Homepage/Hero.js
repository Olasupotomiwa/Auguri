import { Avatar, Box, Flex, Heading, Image, Text, HStack } from "@chakra-ui/react";
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
      data-aos="fade-up"
      data-aos-duration="1500" 
     
     
    >
      <Flex w="full" direction={{ base: "column", md: "row" }}  px={{ base: 4, md: 8 }}
      py={8}>
        <Box flex="1" textAlign='left' mt={{base: '0', md: '14'}}>
        <Heading fontSize={{ base: "40px", md: "60px" }} fontWeight="bold" fontFamily={"Poppins"} >
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
                bgGradient="linear(to-r, #FFD700, #FFA500)"
              />
            </Text>{" "}
            with{" "}
            <Box as="span" color="#9D7C49" fontFamily={"Francois One"}  >
              AUGURI TRAVEL AGENCY &
            </Box>{" "}
            <Box as="span" color="#9D7C49" fontFamily={"Francois One"}>
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

     

    
    </Flex>
  );
};

export default Hero;
