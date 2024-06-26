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
        direction={{ base: "column", md: "row" }}
      >
        {/* First Part */}
        <Flex
          flex={["none", "6"]}
          mb={[6, 0]}
          direction="column"
          align={["center", "flex-start"]}
        >
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
          mt={"10"}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Address
          </Text>
          <Text textAlign={["center", "left"]}>
            Via Col Di Lana 20 Milan, Italy.
            <br /> Victoria Island Lagos, Nigeria
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
          mt={"10"}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Contact Info
          </Text>
          <Text textAlign={["center", "left"]} textDecoration={"underline"}>
            Phone: <a href="tel:+393500460774">+39 350 046 0774</a>
          </Text>
          <Text textAlign={["center", "left"]} textDecoration={"underline"}>
            Phone: <a href="tel:+2348061759374">+234 806 175 9374</a>
          </Text>
          <Text textAlign={["center", "left"]} textDecoration={"underline"}>
            Email:{" "}
            <a href="mailto:Auguritravelagent@yahoo.com">
              Auguritravelagent@yahoo.com
            </a>
          </Text>
          <Text textAlign={["center", "left"]} textDecoration={"underline"}>
            Website:{" "}
            <a href="https://auguritravelagent.com/">
              https://auguritravelagent.com/
            </a>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
