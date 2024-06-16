import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from './Hero';
import VacationPlanner from './VacationPanel';
import TripOptions from './TripOptions';
import SearchPanel from './SearchPanel'
import Services from './Services'
const Homepage = () => {
  return (
    <Box >
      <Hero />
     <VacationPlanner/>
     <TripOptions/>
     <SearchPanel/>
     <Services/>
    </Box>
  );
};

export default Homepage;
