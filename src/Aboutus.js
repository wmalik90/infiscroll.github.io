import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
const Aboutus = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    
    }, []);
  return (
    <div>Aboutus</div>
  )
}

export default Aboutus