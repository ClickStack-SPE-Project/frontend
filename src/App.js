import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

function App() {
  console.log(Navbar); // Check if Navbar is imported correctly
  // console.log(Gallery); // Check if Gallery is imported correctly

  return (
    <div>
      
      <Navbar />
      <Gallery />
    </div>
  );
}

export default App;
