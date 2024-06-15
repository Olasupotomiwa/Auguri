import { Routes, Route } from "react-router-dom";
import NavBar from './Homepage/NavBar';
import Homepage from './Homepage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        
      </Routes>
    </>
  );
}

export default App;
