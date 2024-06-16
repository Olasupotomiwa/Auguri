import { Flex, Image, Text, Icon, Link, Heading } from "@chakra-ui/react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import Footerbg from "../assets/footer.jfif";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <Flex
      bgImage={`linear-gradient(to left, #434A5490, #434A5490), url(${Footerbg})`}
      bgSize="cover"
      bgPosition="center"
      color="white"
      fontFamily="Poppins"
      minHeight="500px"
      p={10}
      justify="center"
      align="center"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        w="100%"
        flexWrap="wrap"
        direction={{base: 'column', md: 'row'}}
      >
        {/* First Part */}
        <Flex flex={["none", "6"]} mb={[6, 0]} direction="column" align={["center", "flex-start"]}>
          <Image src={Logo} alt="Logo" mb={4} width={"200px"} />
          <Heading fontSize={"40px"} textAlign={["center", "left"]}>
            Travel Beyond Your Imagination With AUGURI TRAVEL AGENCY
          </Heading>
        </Flex>

        {/* Second Part */}
        <Flex
          flex={["none", "2"]}
          mb={[6, 0]}
          direction="column"
          align={["center", "flex-start"]}
          mt={'10'}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Address
          </Text>
          <Text textAlign={["center", "left"]}>
            123 Main Street,
            <br /> Cityville, State, 12345
          </Text>
          <Flex mt={4} align="center" justify={["center", "flex-start"]}>
            <Link href="#" isExternal mr={2}>
              <Icon as={AiFillPhone} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={AiFillMail} boxSize={6} />
            </Link>
          </Flex>
        </Flex>

        {/* Third Part */}
        <Flex
          flex={["none", "2"]}
          mb={[6, 0]}
          direction="column"
          align={["center", "flex-start"]}
          mt={'10'}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Contact Info
          </Text>
          <Text textAlign={["center", "left"]}>Phone: +123 456 789</Text>
          <Text textAlign={["center", "left"]}>Email: info@example.com</Text>
          <Text textAlign={["center", "left"]}>Website: www.example.com</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
