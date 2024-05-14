import React from 'react';
import './App.css';
import  Login  from './components/Login';
import SignUp  from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/gallery' element={<Gallery />}/>
        </Routes>
    </Router>
  );
}

export default App;
