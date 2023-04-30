import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
const GA_MEASUREMENT_ID = 'G-N51B4Y11MN';

const sendPageview = () => {
  const url = `https://www.google-analytics.com/g/collect?v=2&tid=${GA_MEASUREMENT_ID}&cid=${Math.random()}&t=pageview&dp=${window.location.pathname}&ua=navigator.userAgent`;
  fetch(url, { method: 'POST' });
};


function App() {
  useEffect(() => {
    sendPageview();
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
