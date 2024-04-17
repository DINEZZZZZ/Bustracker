import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRScanner from './Studends/QrScanner';

const App = () => {
  return (
    <Router>
      
       <Routes>
          <Route path="/Bustracker" element={<QRScanner/>} />
          </Routes>
       
      
    </Router>
  );
};

export default App;
