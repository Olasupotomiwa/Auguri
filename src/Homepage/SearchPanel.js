import { Box, Flex, Heading, Text, Input, Button, Icon, InputGroup, InputLeftElement, HStack , useBreakpointValue } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt} from 'react-icons/fa';

const VacationSection = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="#f2f2f2" p={12} my={10} fontFamily={"Poppins"}>
      <Box textAlign="center" mb={6}>
        <Text fontSize="30px" color="#9D7C49" fontFamily={"Reenie Beanie"}>
          Choose your trip
        </Text>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} color="gray.800" my={4} fontFamily={"Francois One"}>
          Start your Vacation Now
        </Heading>
        <Box w={{base: '100%', md: '60%'}} mx={"auto"}>
        <Text fontSize={{ base: "md", md: "lg" }} color="#6E6E6E">
          Looking for your dream vacation destination but don't know where to start? With the help of
          experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.
        </Text>
        </Box>
      </Box>
      
      <Box>
      <Box bg="white" p={8} borderRadius="md" boxShadow="md">
        <Flex
          direction='row'
          align="center"
          justify={{ base: "center", md: "space-around" }}
          gap={4}
        >
          <InputGroup w={'200px'}>
            <InputLeftElement pointerEvents="none">
              <Icon as={SearchIcon} color="#9D7C49" fontSize={"20px"} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              isDisabled
              border="none"
              _disabled={{ bg: "transparent" }}
              _placeholder={{ color: "#9D7C49" }}
            />
          </InputGroup>
          <HStack>
            <Icon as={FaMapMarkerAlt} color="#9D7C49" fontSize={"34px"} />
            <Box>
              <Text fontWeight={"600"}>Destination</Text>
              <Text color={"#6E6E6E"} fontSize={"12px"}>All destinations</Text>
            </Box>
          </HStack>
          {!isMobile && (
            <Button
              color={"white"}
              bg={"#9D7C49"}
              variant="solid"
              fontWeight={"400"}
              size="md"
              px={10}
              py={6}
              as="a"
              href="https://wa.me/2348061759374"
              target="_blank"
              _hover={{opacity: '0.9'}}
            >
              Proceed to book
            </Button>
          )}
        </Flex>
      </Box>
      {isMobile && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            color={"white"}
            bg={"#9D7C49"}
            variant="solid"
            fontWeight={"400"}
            size="md"
            px={10}
            py={6}
            as="a"
            _hover={{opacity: '0.9'}}
            href="https://wa.me/2348061759374"
            target="_blank"
          >
            Proceed to book
          </Button>
        </Box>
      )}
    </Box>
    </Box>
  );
};

export default VacationSection;
