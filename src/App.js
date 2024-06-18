import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import NavBar from './Homepage/NavBar';
import Homepage from './Homepage';
import Aboutpage from './AboutPage'

function App() {
  return (
    <Container maxW="1200px" px={0}>
    <>
      <NavBar />
     
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
     
    </>
    </Container>
  );
}

export default App;
