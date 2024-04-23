import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import AlbumDetail from './components/AlbumDetail'; 
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
// import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ImageUpload isUploaded={false}/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/albums" element={<Gallery />} />
          <Route path="/albums/:albumId" element={<AlbumDetail />} /> 
          {/* <Route path="/image-upload" element={<ImageUpload />}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
