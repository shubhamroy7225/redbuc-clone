import React from 'react';
import NavbarInstance from './Navbar'
import Footer from './footer'


function Home() {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
     
   <NavbarInstance/>
   <Footer/>
   
    </div>
  );
}

export default Home;