import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Divider,
    Icon,
    Button
  } from "@chakra-ui/react";
  import { FaCheck } from "react-icons/fa";
  import SampleImage from "../assets/pre.jfif";
  import path from "../assets/path.png";
  
  const GradientComponent = () => {
    return (
        <Box py={8} bg={"#f2f2f2"}>
      <Box
       h='auto'
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgImage={`linear-gradient(to left, #434A5490, #434A5490), url(${SampleImage})`}
        fontFamily="Poppins"
        bgSize="cover"
        bgPosition="center"
        p={{base: '1' , md: '4'}}
        my={12}
      >
        <Flex
          width="100%"
          boxShadow="lg"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <Image src={path} alt="Sample" objectFit="cover" width="75%" height="80%" />
          </Box>
          <Box flex="1" p={{ base: 4, md: 8 }}>
          <Heading as="h1" size="2xl" color="white" mb={4} fontFamily="Francois One">
            Embrace the Thrill of the Unknown with{" "}
            <Text as="span" color="#FFD700">
              AUGURI TRAVEL AGENT & LAWAL TOUR GUIDE
            </Text>
          </Heading>
            <Text fontSize="16px" color="white" mb={4}>
              Are you tired of the typical tourist destinations and looking to
              step out of your comfort zone? Adventure travel may be the perfect
              solution for you! Here are four reasons why you should book an
              adventure travel experience, assistance with airline tickets, visa
              appointments, sport talent hunting, and knowledgeable tour guides
              with AUGURI.
            </Text>
  
            <Flex align="center">
              <Icon as={FaCheck} color="white" boxSize={6} mr={4} />
              <Text fontSize="md" color="white">
                Seamless Travel Arrangements
              </Text>
            </Flex>
            <Divider borderColor="whiteAlpha.700" my={2} />
  
            <Flex align="center">
              <Icon as={FaCheck} color="white" boxSize={6} mr={4} />
              <Text fontSize="md" color="white">
                Expertly Guided Experiences
              </Text>
            </Flex>
            <Divider borderColor="whiteAlpha.700" my={2} />
  
            <Flex align="center">
              <Icon as={FaCheck} color="white" boxSize={6} mr={4} />
              <Text fontSize="md" color="white">
                Stress-free Planning
              </Text>
            </Flex>

            <Button
            color={"white"}
            bg={"#9D7C49"}
            variant="solid"
            fontWeight={"400"}
            size="md"
            px={10}
            py={6}
            my={10}
            href="https://wa.me/2348061759374"
            target="_blank"
            as={'a'}
            _hover={{opacity: '0.9'}}
          >
           Book now
          </Button>
          </Box>

         
        </Flex>
      </Box>
      </Box>
    );
  };
  
  export default GradientComponent;
  