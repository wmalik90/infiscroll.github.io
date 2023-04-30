import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
const GA_MEASUREMENT_ID = 'G-N51B4Y11MN';

setGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.pageview(window.location.pathname);
};

function App() {
  useEffect(() => {
    setGA();
  }, []);

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
