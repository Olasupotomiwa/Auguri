import {
    Box,
    Flex,
    Text,
    Heading,
    Avatar,
    Stack,
  } from "@chakra-ui/react";
  import backgroundImage from "../assets/Testimonial.png";
  
  const TestimonialPage = () => {
    // Sample testimonials data
    const testimonials = [
      {
        id: 1,
        name: "John Doe",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui in neque condimentum venenatis. Vivamus nec lectus vel augue mattis vulputate.",
      },
      {
        id: 2,
        name: "Jane Smith",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        text:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec lacus accumsan, fermentum justo et, mattis velit.",
      },
      {
        id: 3,
        name: "David Johnson",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        text:
          "Nulla tincidunt euismod orci non commodo. Suspendisse potenti. Mauris accumsan feugiat augue non fermentum. Proin nec neque at arcu ultrices hendrerit.",
      },
    ];
  
    return (
      <Box
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="Poppins"
        padding={8}
      >
        <Box maxWidth="800px" width="100%" p={8} bg="rgba(255, 255, 255, 0.8)" borderRadius="md">
          <Heading as="h1" size="xl" mb={8} textAlign="center">
            Testimonials
          </Heading>
          <Stack spacing={8}>
            {testimonials.map((testimonial) => (
              <Flex key={testimonial.id} direction={{ base: "column", md: "row" }} alignItems="center" justifyContent="flex-start">
                <Avatar src={testimonial.avatarUrl} name={testimonial.name} size="xl" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} />
                <Box>
                  <Heading as="h3" size="md" mb={2}>
                    {testimonial.name}
                  </Heading>
                  <Text>{testimonial.text}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>
      </Box>
    );
  };
  
  export default TestimonialPage;
  