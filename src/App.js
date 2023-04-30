import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import ReactGA from 'react-ga';
import Aboutus from './Aboutus';
const GA_MEASUREMENT_ID = 'UA-266516599-1';
  ReactGA.initialize(GA_MEASUREMENT_ID);



function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

}, [window.location.pathname]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<Aboutus />}/>
          {/* <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
