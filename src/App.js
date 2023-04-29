import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';

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
