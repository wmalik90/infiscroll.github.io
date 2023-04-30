import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import ReactGA from 'react-ga';
const GA_MEASUREMENT_ID = 'G-N51B4Y11MN';
  ReactGA.initialize(GA_MEASUREMENT_ID);



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
