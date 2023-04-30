import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import ReactGA  from 'react-ga'
ReactGA.initialize('G-N51B4Y11MN');


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
