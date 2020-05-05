import React, { Component } from 'react';

class  navbarInstance extends Component {
    
    render() { 
        return (
         
              <nav className="navbar navbar-expand-lg navbar-light bg-light" id='mainNavbar'>
                <a className="navbar-brand" href="/"><image src='./images/transport(1).png' /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <a className="nav-link" href="/">BUS TICKET<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">BUS HIRE</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">PILGRIMAGES</a>
                    </li>
                    
                    
                  </ul>
                  <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="/" class="nav-link">HELP</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage Bookings
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/">Bus Tickets</a>
                      <a className="dropdown-item" href="/">Cancel</a>
                      <a className="dropdown-item" href="/">Reschedule</a>
                      <a className="dropdown-item" href="/">Show My Ticket</a>
                      <a className="dropdown-item" href="/">Email/SMS</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Profile
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/">My Trips</a>
                      <a className="dropdown-item" href="/">Wallets/Cards</a>
                      <a className="dropdown-item" href="/">My Profile</a>
                      <a className="dropdown-item" href="/">Sign Out</a>
                      <a className="dropdown-item" href="/">Sign Out From All Devices</a>
                    </div>
                  </li>
                
               
            </ul>
          
                  
                </div>
              </nav>
          
            
          
          
          )
    }
}
 
export default navbarInstance;
 
