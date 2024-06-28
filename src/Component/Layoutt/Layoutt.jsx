import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import { AppProvider } from '../../Context/userContext';
const Layoutt = () => {


  const location = useLocation();
  
  // List of paths where the Navbar should be hidden
  const noNavbarPaths = ['/login', '/register'];

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Outlet />


      <Footer />
    </>
  );
};

export default Layoutt;
