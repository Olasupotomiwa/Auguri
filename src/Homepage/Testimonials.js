import React, { useState } from "react";
import { Box, Flex, Heading, Text, Avatar, IconButton } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage from "../assets/Testimonial.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroCustomDot from "./HeroCustomDot";

const TestimonialPage = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui in neque condimentum venenatis. Vivamus nec lectus vel augue mattis vulputate.",
      position: 'Designer'
    },
    {
      id: 2,
      name: "Jane Smith",
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec lacus accumsan, fermentum justo et, mattis velit.",
      position: 'Designer'
    },
    {
      id: 3,
      name: "David Johnson",
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Nulla tincidunt euismod orci non commodo. Suspendisse potenti. Mauris accumsan feugiat augue non fermentum. Proin nec neque at arcu ultrices hendrerit.",
      position: 'Designer'
    },
  ];

  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontFamily="Poppins"
      padding={{base: '2', md: '6'}}
      zIndex={99}
    >
      <Box maxWidth="540px" width="100%" p={0}>
        <Box p={8} mt={20} textAlign={"center"}>
          <Text color={"#DF6951"} fontWeight={500}>
            PROMOTION
          </Text>
          <Heading fontFamily={"Francois One"} paddingY={2}>
            See What Our Client Say About Us
          </Heading>
        </Box>
        <Box position="relative">
          <Carousel
            selectedItem={selectedSlide}
            onChange={(index) => setSelectedSlide(index)}
            showArrows={false} // Disable default arrows
            showStatus={false}
            showIndicators={false} // Disable default indicators
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            transitionTime={500}
            stopOnHover={true}
          >
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} p={4}>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar
                    src={testimonial.avatarUrl}
                    name={testimonial.name}
                    size="xl"
                    mb={4}
                    border={'5px'}
                    borderColor={"white"}
                  />
                  <Text textAlign="center" px={8}>{testimonial.text}</Text>
                  <Text fontSize={'12px'} fontWeight={"700"} mt={2} textAlign="center" fontFamily={"Francois One"}>
                    {testimonial.name}
                  </Text>
                  <Text fontSize={'12px'} fontWeight={"600"} mb={2} textAlign="center" fontFamily={"Francois One"}>
                    {testimonial.position}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Carousel>
          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft />}
            onClick={() => setSelectedSlide((selectedSlide - 1 + testimonials.length) % testimonials.length)}
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            borderRadius="full"
            bgColor="#737373"
            color="white"
            _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
            cursor={"pointer"}
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight />}
            onClick={() => setSelectedSlide((selectedSlide + 1) % testimonials.length)}
            position="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            borderRadius="full"
            bgColor="#737373"
            color="white"
            _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
            cursor={"pointer"}
          />
        </Box>
        {/* Custom dot component rendered below the carousel */}
        <Flex justifyContent="center" mt={4} mb={10}>
          {testimonials.map((_, dotIndex) => (
            <HeroCustomDot
              key={dotIndex}
              onClick={() => setSelectedSlide(dotIndex)}
              isActive={selectedSlide === dotIndex}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default TestimonialPage;
