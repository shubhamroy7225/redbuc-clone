import React, { Component } from "react";
import NavbarInstance from "./Navbar";
import Footer from "./footer";
import Cards from './cards'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Source: "Delhi",
      Destination: "Bombay",
      Date: "5th May",
      busesFound: [
        {
          bus_name: "gupta travels",
          fare: 4200,
          via: [
            {
              stop: "mumbai",
              distance: 0,
            },
            {
              stop: "indore",
              distance: 300,
            },
            {
              stop: "bhopal",
              distance: 600,
            },
            {
              stop: "delhi",
              distance: 1400,
            },
          ],
          bus_type:'AC Volvo',
          ratings_num:678,
          available_seat: 30,
          available_window_seat: 12,
          _id: "5ebcc26fb0b27a64922a895e",
          bus_number: "746ijk51",
          source_city_id: "566",
          destination_city_id: "089",
          departure:'6:30 AM',
          arrival:"21:30 PM",
          ratings:3.2,
          __v: 0,
        }
        
      ],
    };
  }
  render() {
    return (
      <div className="d-flex flex-column sticky-footer-wrapper">
        <NavbarInstance />
        <div className="bus-content">
          <div className="journey-details">
            <div className="details">{this.state.Source}</div>
            <div>To</div>
            <div className="details dest">{this.state.Destination}</div>
            {/* <button className='btn btn-light btn-small'>></button> */}
            <div className="details">{this.state.Date}</div>
            {/* <button  className='btn btn-light btn-small'>></button> */}
            <div className="details d-btn">
              <button className="btn btn-light">Reshedule</button>
            </div>
          </div>
          <div className='buses'>
          <div class="sidebar">
            <div className="sidebar-heading">FILTERS</div>
            <a href="#" class="item-button">
              Reshedulable
            </a>
            <a href="#" class="item-button">
              Live Tracking
            </a>
            <a href="#" class="item-button">
              Amenities
            </a>
          </div>
          <div className='bus-container'>
          {this.state.busesFound.map((bus) => (
           
         <Cards  busInfo={bus}/>
          ))}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <Footer />
      </div>
    );
  }
}

export default Search;
