import React, { Component } from 'react';
import NavbarInstance from "./Navbar";
import Footer from "./footer";
import axios from "axios"
class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          bus: '',
          ticket: ''
         }
    }


    componentDidMount =() => {


   
    axios
    .get("http://localhost:5000/bus/Seats", {
      params: {
        busId : localStorage.getItem("busId")
        
      },
    })
    .then(
      (response) => {
        console.log(response);
        this.setState({ bus: response.data[0]});
      },
      (error) => {
        console.log(error);
      }
    );


    axios
    .get("http://localhost:5000/bus/Tickets", {
    params: {
        username : localStorage.getItem("username")
        
      },
    })
    .then(
      (response) => {
        console.log(response);
        this.setState({ ticket: response.data[0]});
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
      <div className="card">
        <nav className="navbar navbar-expand-lg navbar-light">
          <img
            src={require("./images/transport(1).png")}
            width="60"
            height="60"
            alt="pic"
          />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="" href="/">
                Travel related queries
              </a>
              <p>72347362346237</p>
              <p>(040)72347362346237</p>
            </li>
          </ul>
        </nav>
        <span className="block-example border-top border-danger"></span>
        <nav className="navbar navbar-expand-lg navbar-light" id="ticket">
          <ul className="navbar-nav mr-2">
            <li className="py-3 px-md-5 ">{localStorage.getItem("source")} to {localStorage.getItem("destination")}</li>
            <li className="py-3 px-md-5 ">{localStorage.getItem("date")}</li>
            <li className="py-3 px-md-5 ">{this.state.bus.bus_name}</li>
          </ul>
        </nav>
        <span className="block-example border-top border-danger"></span>
        <nav className="navbar navbar-expand-lg navbar-light" id="ticket"></nav>
        <span className="block-example border-top border-danger"></span>
        <span className="block-example border-top border-dark mt-2"></span>
        <nav className="navbar navbar-expand-lg navbar-light" id="ticket">
          <ul className="navbar-nav mr-auto">
            <li className="py-3 px-md-5">
              <a className="" href="/">
                Passenger Name
              </a>
              <p>{localStorage.getItem("username")}</p>
            </li>
            <li className="py-3 px-md-5 ">
              <a className="" href="/">
                redBus ticket #
              </a>
              <p>{localStorage.getItem("busId")}</p>
            </li>
            <li className="py-3 px-md-5 ">
              <a className="" href="/">
                {this.state.ticket.seat}
              </a>
              <p>45</p>
            </li>
            <li className="py-3 px-md-5 ">
              <a className="" href="/">
                PNR #
              </a>
              <p>457348</p>
            </li>
          </ul>
        </nav>
        <span className="block-example border-top border-dark"></span>
        <nav className="navbar navbar-expand-lg navbar-light" id="ticket">
          <ul className="navbar-nav mr-auto">
            <li className="py-3 px-md-5">
              <a className="" href="/">
                Bus Type
              </a>
              <p>Non A/c Seater</p>
            </li>
            <li className="py-3 px-md-5">
              <a className="" href="/">
                Reporting time
              </a>
              <p>9:30 PM</p>
            </li>
            <li className="py-3 px-md-5">
              <a className="" href="/">
                Boarding point address
              </a>
              <p>Location:indore</p>
              <p>Landmark:Opp.Big Bazar</p>
            </li>
          </ul>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light" id="ticket">
          <ul className="navbar-nav mr-auto">
            <li className="py-3 px-md-5">
              <a className="" href="/">
                Total fare
              </a>
              <p>800 Rs</p>
            </li>
            <li className="py-3 px-md-5">
              <a className="" href="/">
                Departure time
              </a>
              <p>8:30 PM</p>
            </li>
            <li className="py-3 px-md-5">
              <p>Address : Opp.Big Bazar indore</p>
            </li>
          </ul>
        </nav>
      </div>
    
      </div>
      <Footer />
    </div>
          );
    }
}
 
export default Ticket;