import React from "react";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import Intro from "../assets/intro.png";

const ResponsiveLayout = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} py={8}>
     
      <Box
        flex={1}
       
        justifyContent="center"
        alignItems="center"
        
        p={4}
      >
         <Text fontFamily={"Reenie Beanie"} py={4} color={"#9D7C49"} fontSize={'26px'}>
        Explore the world with us, one adventure at a time.
      </Text>
        <Heading py={4} fontFamily={"Francois One"}>
          The Perfect Travelling Experience Come True with AUGURI & LAWAL TOUR
          GUIDE
        </Heading>
        <Text fontSize="14px" color={"#6E6E6E"} fontFamily={"Poppins"}>
          Auguri Travel Agency stands out as a premier travel service provider,
          renowned for its expertise in helping travelers navigate new countries
          with ease. Whether you're traveling domestically or internationally,
          our dedicated team ensures that every aspect of your journey is
          seamless and enjoyable. From finding the best routes to securing
          accommodations and dining options, we handle it all. We are a team of
          experienced travel experts who specialize in planning and organizing
          unforgettable travel experiences for our clients with a wide range of
          travel services, including flight bookings, hotel reservations and
          more.
        </Text>
        <Text fontSize="16px" color={"#6E6E6E"} fontFamily={"Poppins"}>
          Our comprehensive services include airline tickets, tour guides,
          personal shopping, ocean cruises, corporate travel management, travel
          itineraries, travel insurance, visa appointments, sports talent
          hunting, and international health insurance.
        </Text>
      </Box>
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <Image src={Intro} />
      </Box>
    </Flex>
  );
};

export default ResponsiveLayout;
