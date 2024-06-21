import {  Flex, Heading, Text, Button } from "@chakra-ui/react";

const VacationPlanner = () => {
  return (
    <Flex
      direction="column"
      px={{ base: 4, md: 8 }}
      py={8}
      bg="white"
      fontFamily={"Poppins"}
      w={{base: '100%', md: '60%'}}
    >
      <Text fontSize="30px" color="#9D7C49"  mb={4} fontFamily={"Reenie Beanie"}>
        Dream Vacation Destination
      </Text>
      <Heading fontSize={{ base: "30px", md: "50px" }} fontWeight="bold" mb={6} fontFamily={"Francois One"}>
        Plan the Trip of a Lifetime with Ease
      </Heading>
      <Text fontSize={{ base: "16px", md: "20px" }} color="#6E6E6E" mb={8}>
        Whether you're looking for a romantic getaway, a family-friendly adventure, or a
        solo journey to explore the world, a travel agency can provide you with a
        custom-tailored itinerary that exceeds your expectations.
      </Text>
      <Button
  size="lg"
  w={"127px"}
  bg="#9D7C49"
  color="white"
  _hover={{ opacity: '0.9' }}
  as="a"
  href="https://wa.me/393500460774"
  target="_blank"
>Book</Button>
    </Flex>
  );
};

export default VacationPlanner;
