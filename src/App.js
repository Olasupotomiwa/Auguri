import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import NavBar from './Homepage/NavBar';
import Homepage from './Homepage';

function App() {
  return (
    <Container maxW="1200px">
    <>
      <NavBar />
     
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
     
    </>
    </Container>
  );
}

export default App;
