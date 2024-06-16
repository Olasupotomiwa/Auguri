import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import Business from '../assets/Business.png';
import Education from '../assets/Education.png';
import Vacation from '../assets/Vacation.png';

const TripOptions = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const images = [
    { src: Vacation, alt: "Vacation" },
    { src: Business, alt: "Business and Work" },
    { src: Education, alt: "Education" }
  ];

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      wrap={isMobile ? "wrap" : "nowrap"}
      gap={4}
    >
      {images.map((image, index) => (
        <ImageBox key={index} imageSrc={image.src} />
      ))}
    </Flex>
  );
};

const ImageBox = ({ imageSrc }) => (
  <Box>
    <Image src={imageSrc} w={{base: '160px', md: '250px'}} objectFit={"cover"} borderRadius="full" />
  </Box>
);

export default TripOptions;
