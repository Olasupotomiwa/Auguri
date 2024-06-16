import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from './Hero';
import VacationPlanner from './VacationPanel';
import TripOptions from './TripOptions';
import SearchPanel from './SearchPanel'
import Services from './Services'
import GradientComponent from './GradientBG';
import TestimonialPage from './Testimonials';

const Homepage = () => {
  return (
    <Box >
      <Hero />
     <VacationPlanner/>
     <TripOptions/>
     <SearchPanel/>
     <Services/>
     <GradientComponent/>
     <TestimonialPage/>
    </Box>
  );
};

export default Homepage;
