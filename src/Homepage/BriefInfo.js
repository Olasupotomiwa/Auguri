import React from "react";
import { Box, Button, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BriefInfo = () => {
  return (
    <Box
      p={5}
      shadow="sm"
      borderWidth="1px"
      borderRadius="md"
      fontFamily={"Poppins"}
    >
      <Heading fontFamily={"Reenie Beanie"} py={4} color={"#9D7C49"}>
        AUGURI
      </Heading>
      <Text fontSize="16px" mb={2} textAlign={"justify"}>
        Auguri Travel Agency stands out as a premier travel service provider,
        renowned for its expertise in helping travelers navigate new countries
        with ease. Whether you're traveling domestically or internationally, our
        dedicated team ensures that every aspect of your journey is seamless and
        enjoyable. From finding the best routes to securing accommodations and
        dining options, we handle it all. We are a team of experienced travel
        experts who specialize in planning and organizing unforgettable travel
        experiences for our clients with a wide range of travel services,
        including flight bookings, hotel reservations and more.
      </Text>

      <Button bg={"#9D7C49"} as={Link} color={"white"} to="/about-us">
        Read More
      </Button>
    </Box>
  );
};

export default BriefInfo;
