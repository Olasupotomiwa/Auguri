import React from "react";
import { Box } from "@chakra-ui/react";
import Heading from "./Heading"
import Intro from './Intro'
import Services from '../Homepage/Services'
import BookNow from './booknow'
import TestimonialPage from "../Homepage/Testimonials";
import Footer from "../Homepage/Footer";
import LiveChatButton from "../Homepage/Chatbtn";


const HeadingComponent = () => {
  return (
    <Box
     
    >
     <Heading/>
     <Intro/>
     <Services/>
     <BookNow/>
   
     <LiveChatButton/>
     <TestimonialPage/>
     <Footer/>
    </Box>
  );
};

export default HeadingComponent;
