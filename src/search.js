import React, { Component } from "react";
import NavbarInstance from "./Navbar";
import Footer from "./footer";
import Cards from "./cards";
const axios = require("axios");

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      Source: this.props.location.myprops.source,
      Destination: this.props.location.myprops.destination,
     Date: this.props.location.myprops.date.split(' ').slice(0,3).join(" "),
      busesFound: [],
    };
  }

  componentDidMount() {

    
    axios
      .get("http://localhost:5000/bus/search", {
        params: {
          source: this.state.Source,
          destination: this.state.Destination,
        },
      })
      .then(
        (response) => {
          console.log(response);
          this.setState({ busesFound: response.data });
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
          <div className="buses">
            <div class="sidebar">
              <div className="sidebar-heading">FILTERS</div>
              <a href="/" class="item-button">
                Reshedulable
              </a>
              <a href="/" class="item-button">
                Live Tracking
              </a>
              <a href="/" class="item-button">
                Amenities
              </a>
            </div>
            <div className="bus-container">
              {this.state.busesFound.map((bus) => (
                <Cards busInfo={bus} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search;
