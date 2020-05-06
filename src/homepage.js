import React from 'react';
import NavbarInstance from './Navbar'
import Footer from './footer'
import Content from './Content'


function Home() {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
     
   <NavbarInstance/>
   <Content className="flex-fill"/>
   <Footer/>
   
    </div>
  );
}

export default Home;