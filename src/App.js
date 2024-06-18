import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import NavBar from './Homepage/NavBar';
import Homepage from './Homepage';
import Aboutpage from './AboutPage'
import ContactUs from './ContactUs'
import ScrollToTop from './AboutPage/ScrollToTop';

function App() {
  return (
    <Container maxW="1200px" px={0}>
    <>
    <ScrollToTop />
      <NavBar />
     
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<Aboutpage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
     
    </>
    </Container>
  );
}

export default App;
