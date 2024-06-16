import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Business from '../assets/Business.png'
import Education from '../assets/Education.png'
import Vacation from '../assets/Vacation.png'

const TripOptions = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const images = [
    { src: Vacation, alt: "Vacation" },
    { src: Business, alt: "Business and Work" },
    { src: Education, alt: "Education" }
  ];

  return (
    <Box>
      {isMobile ? (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {images.map((image, index) => (
            <Box key={index}>
              <Image src={image.src} alt={image.alt}  objectFit={"cover"} borderRadius="full" />
            </Box>
          ))}
        </Carousel>
      ) : (
        <Flex direction="row" align="center" justify="center" gap={4}>
          {images.map((image, index) => (
            <ImageBox key={index} imageSrc={image.src}  objectFit={"cover"} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

const ImageBox = ({ imageSrc }) => (
  <Box>
    <Image src={imageSrc} w={"419px"} objectFit={"cover"} />
  </Box>
);

export default TripOptions;
