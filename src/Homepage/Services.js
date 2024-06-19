import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Airline from "../assets/airline.png";
import Ocean from "../assets/ocean.png";
import Travel from "../assets/travel.png";
import Itenaries from "../assets/iternaries.png";
import Insurance from "../assets/insurance.png";
import Guide from "../assets/guide.png";
import Visa from "../assets/visa.png";
import Sport from "../assets/sport.png";
import Health from "../assets/health.png";
import Cart from "../assets/cart.png";

const CenteredCardContainer = () => {
  const [cardContent] = useState([
   
    {
      imageSrc: Guide,
      heading: "Lawal Tour Guide",
      text: "Lawal Tour Guide Agency excels at offering comprehensive travel experiences across multiple countries. They handle everything from airport pickups in Africa, Germany, Venice, and Rome to assisting you throughout your stay in each country. Their team of knowledgeable guides enriches your journey with in-depth insights and local expertise, ensuring a memorable and hassle-free trip. With Lawal Tour Guide Agency, every detail is meticulously planned for an unforgettable travel experience.",
    },
    {
      imageSrc: Cart,
      heading: "Personal Shopper",
      text: "As experienced personal shoppers, we specialize in guiding foreigners through international outlets to find original goods at affordable prices. With extensive knowledge of local markets and brands, we ensure you get the best deals on high-quality items. Fluent in multiple languages and with a keen eye for fashion, we provide a seamless and enjoyable shopping experience tailored to your preferences. Let us make your shopping journey in a foreign land stress-free and rewarding.",
    },
    {
      imageSrc: Sport,
      heading: "Olajide P Global Enterprise Sports Marketing",
      text: "We offer elite programs in football, basketball, athletics, ensuring our athletes reach their full potential. Connected to national stadiums across Nigeria, including those in Lagos, Abeokuta, and beyond, we provide unparalleled access to top-tier facilities and coaching",
    },
    {
      imageSrc: Airline,
      heading: "Airline Tickets",
      text: "Our Travel Agency specializes in providing customers with the best deals on airline tickets",
    },
    {
      imageSrc: Ocean,
      heading: "Ocean Cruises",
      text: "Luxurious and comfortable way of travel, andpassengers can enjoy stunning views of the sea.",
    },
    {
      imageSrc: Travel,
      heading: "Corporate Travel Management",
      text: "Our travel agency offers a variety of means of transport to get you around your destination safely.",
    },
    {
      imageSrc: Itenaries,
      heading: "Travel Itenaries (Reservation)",
      text: "Our team of experts will take care of all the planning and logistics, including hotel reservations",
    },
    {
      imageSrc: Insurance,
      heading: "Travel Insurance",
      text: "Travel insurance is an essential part of any trip, providing peace of mind and protection.",
    },
    {
      imageSrc: Visa,
      heading: "Visa Appointments",
      text: "Our team of experts will take care of all the matters concerning your visa acquisition to Shengen, Canada, USA",
    },

    {
      imageSrc: Health,
      heading: "Internal Health Insurance",
      text: "International Health insurance is an essential part of our business, providing peace of mind and protection.",
    },
  ]);

  return (
    <Box>
      <Box>
        <Box textAlign={"center"}>
          <Text
            color={"#9D7C49"}
            fontSize={"30px"}
            fontFamily={"Reenie Beanie"}
          >
            Let us help you plan for next adventure
          </Text>
          <Heading fontFamily={"Francois One"} py={2}>
            Services we offer
          </Heading>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap={"wrap"}
       
        mt={8}
        justifyContent={"center"}
        fontFamily={"Poppins"}
      >
        {cardContent.map((content, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            p={4}
            width={{ base: "100%", sm: "45%", md: "30%" }} // Responsive width
            minH="200px"
            flexGrow={1}
            maxW={"350px"}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Image
              src={content.imageSrc}
              alt={content.heading}
              boxSize="100px"
              mb={4}
            />
            <Heading fontSize={"18px"} size="lg" mb={2}>
              {content.heading}
            </Heading>
            <Text fontSize="16px" color="#6E6E6E">
              {content.text}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CenteredCardContainer;
