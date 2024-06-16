import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from './Hero';
import VacationPlanner from './VacationPanel';
import TripOptions from './TripOptions';
import SearchPanel from './SearchPanel'
const Homepage = () => {
  return (
    <Box >
      <Hero />
     <VacationPlanner/>
     <TripOptions/>
     <SearchPanel/>
    </Box>
  );
};

export default Homepage;
