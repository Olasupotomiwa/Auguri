import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import VacationPlanner from "./VacationPanel";
import TripOptions from "./TripOptions";
import SearchPanel from "./SearchPanel";
import Services from "./Services";
import GradientComponent from "./GradientBG";
import BriefInfo from "./BriefInfo";
import TestimonialPage from "./Testimonials";
import Footer from "./Footer";
import LiveChatButton from "./Chatbtn";

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <BriefInfo />
      <VacationPlanner />
      <TripOptions />
      <Services />
      <SearchPanel />
        <LiveChatButton/>
      <GradientComponent />

      <TestimonialPage />
      <Footer />
    </Box>
  );
};

export default Homepage;
