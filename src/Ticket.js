import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {  
    return (
      <div className="card">
        <nav className="navbar navbar-expand-lg navbar-light">
          <img
            src={require("./images/transport5.jpg")}
            width="100"
            height="60"
            alt="pic"
          />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="" href="/">
                Travel related queries
              </a>
              <h5>72347362346237</h5>
              <h5>(040)72347362346237</h5>
            </li>
          </ul>
        </nav>
        <span className="block-example border-top border-danger"></span>
        <nav className="navbar navbar-expand-lg navbar-light" id="ticket">
          <ul className="navbar-nav mr-2">
            <li className="py-3 px-md-5 ">Bangalore to Hyderabad</li>
            <li className="py-3 px-md-5 ">Monday,October 31,2020</li>
            <li className="py-3 px-md-5 ">VRL Travels</li>
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
              <p>Ashutosh Diwaker</p>
            </li>
            <li className="py-3 px-md-5 ">
              <a className="" href="/">
                redBus ticket #
              </a>
              <p>TUBE39287Y4Y</p>
            </li>
            <li className="py-3 px-md-5 ">
              <a className="" href="/">
                Seat Numbers
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
              <h5>Location:indore</h5>
              <h5>Landmark:Opp.Big Bazar</h5>
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
    );
  }
}
export default Ticket;
