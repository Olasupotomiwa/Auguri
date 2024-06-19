// TestimonialPage.jsx
import React, { useState } from "react";
import { Box, Flex, Heading, Text, Avatar, IconButton } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { useSwipeable } from "react-swipeable";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage from "../assets/Testimonial.png";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import HeroCustomDot from "./HeroCustomDot";

const TestimonialPage = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Adebayo Shekinat",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Booking with Auguri Travel was a breeze. Their knowledgeable staff helped us find the perfect destination and accommodation. Looking forward to our next adventure with them!",
      position: "Business Tycoon",
    },
    {
      id: 2,
      name: "Charles Adeoye",
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Our experience with Auguri Travel was fantastic. They tailored our itinerary to our preferences and budget, ensuring every aspect of our journey was well-planned and enjoyable.",
      position: "Educationist",
    },
    {
      id: 3,
      name: "Esohe Chibuike",
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Auguri Travel Agency provided excellent customer service from start to finish. They were responsive to our inquiries and ensured our trip was unforgettable. 5 stars!",
      position: "Business Consultant",
    },
  ];

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSelectedSlide((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setSelectedSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontFamily="Poppins"
      padding={{ base: "2", md: "6" }}
      my={10}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Box maxWidth="540px" width="100%" p={0} {...handlers}>
        <Box p={8} mt={20} textAlign={"center"}>
          <Text color={"#DF6951"} fontWeight={500}>
            PROMOTION
          </Text>
          <Heading fontFamily={"Francois One"} paddingY={2}>
            See What Our Clients Say About Us
          </Heading>
        </Box>
        <Box position="relative"  data-aos="fade-up"
      data-aos-duration="1500">
          <Carousel
            selectedItem={selectedSlide}
            onChange={(index) => setSelectedSlide(index)}
            showArrows={false} // Disable default arrows
            showStatus={false}
            showIndicators={false} // Disable default indicators
            infiniteLoop={true}
            autoPlay={true}
            swipeable={false} // Disable default swipe behavior
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
                    border={"5px"}
                    borderColor={"white"}
                  />
                  <Text textAlign="center" px={8}>
                    {testimonial.text}
                  </Text>
                  <Text
                    fontSize={"12px"}
                    fontWeight={"700"}
                    mt={2}
                    textAlign="center"
                    fontFamily={"Francois One"}
                  >
                    {testimonial.name}
                  </Text>
                  <Text
                    fontSize={"12px"}
                    fontWeight={"600"}
                    mb={2}
                    textAlign="center"
                    fontFamily={"Francois One"}
                  >
                    {testimonial.position}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Carousel>
          <IconButton
            aria-label="Previous"
            icon={<ArrowBackIcon />}
            onClick={() =>
              setSelectedSlide(
                (selectedSlide - 1 + testimonials.length) % testimonials.length
              )
            }
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
            icon={<ArrowForwardIcon />}
            onClick={() =>
              setSelectedSlide((selectedSlide + 1) % testimonials.length)
            }
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
        <Flex justifyContent="center" mt={2} mb={5}>
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