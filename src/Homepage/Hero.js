import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Bg from "../assets/BG.png";
import Pics from "../assets/Pics.png";
import Pics2 from "../assets/Pics2.png";

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
        <Box flex="1" textAlign='left'>
          <Heading fontSize={{ base: "40px", md: "60px" }} fontWeight="bold">
            Explore the world with{" "}
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
