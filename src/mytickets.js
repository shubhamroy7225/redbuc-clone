import React, { Component } from 'react';
import NavbarInstance from "./Navbar";
import Footer from "./footer";
import axios from "axios"
class MyTickets extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            alltickets : []
        }
    }

    componentDidMount = () => {

    axios
    .get("http://localhost:5000/bus/all-tickets")
    .then(
      (response) => {
          console.log(response)
        this.setState({ alltickets: response.data});
      },
      (error) => {
        console.log(error);
      }
    );

    }
    render() { 
        return (  
            <div className="d-flex flex-column sticky-footer-wrapper">
      <NavbarInstance />
     <div className="ticket-content">
        <div className="travel-log"><h4>Travel Log</h4></div> 
     {this.state.alltickets.map((ticket) => (
         <div className='card-container'>
        <div class="card card-1">
  <div class="card-header color">
    {ticket.date}
  </div>
  <div class="card-body card-history">
<div className='upper-row-1'>
     <p><span>From: </span> {ticket.source}</p>
     <p><span>To: </span> {ticket.destination}</p>
     <p><span>Bus: </span>travelbuddy</p>
     </div>
     <div className='lower-row-1'>
     <p><span>Passenger: </span>{ticket.username}</p>
     <p><span>Fare: </span>{ticket.fair}</p>
     </div>
    
     
   
  </div>
</div>
</div>

              ))}

     </div>
      <Footer />
    </div>
            
            
            
            );
    }
}
 
export default MyTickets;