import React, { Component } from "react";
class Seats extends Component {
  constructor() {
    super();
    this.state = {
      availableSeats: [
        "1L",
        "3L",
        "4L",
        "7L",
        "8L",
        "9L",
        "10L",
        "11L",
        "12L",
        "13L",
        "14L",
        "15L",
        "16L",
        "17L",
        "18L",
      ],
      bookedSeats: ["5L", "6L", "2L"],
      currentlyBooked:[],
      fair:900
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const seatId = event.target.id;

    this.setState((prevState) => ({
      currentlyBooked: [...prevState.currentlyBooked, seatId],
    }));
    event.target.disabled = true;

    this.setState({
      availableSeats: this.state.availableSeats.filter(function (seat) {
        return seat !== seatId;
      }),
    });
    console.log(this.state.availableSeats)
    console.log(this.state.currentlyBooked)
   
  };
  componentDidMount = () => {
    this.state.bookedSeats.map(seat => {
     return document.getElementById(seat).disabled = true
    })
       
  }

  fairdetails =() => {
     return this.state.fair*this.state.currentlyBooked.length
  }

  render() {
    return (
      <div className="container-seats">
        <div className="seats-layout-container">
          <div className="lower">Lower Deck</div>
          <div className="seats-layout">
            <div className="steering-icon">
              <img
                className="steering"
                src={require("./images/sports.svg")}
                width="20"
                height="20"
                alt="pic"
              />
            </div>
            <div className="seats-allignment">
              <div className="seat-row row-1">
                <button
                  className="seat-button"
                  id="1L"
                  onClick={this.handleClick}
                
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="2L"
                  onClick={this.handleClick}
                 
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="3L"
                  onClick={this.handleClick}
              
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="4L"
                  onClick={this.handleClick}
                 
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="5L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="6L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
              </div>
              <div className="seat-row row-2">
                <button
                  className="seat-button"
                  id="7L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="8L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="9L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="10L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="11L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="12L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
              </div>
              <div className="seat-row row-3">
                <button
                  className="seat-button"
                  id="13L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="14L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="15L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="16L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="17L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="18L"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="lower">Upper Deck</div>
          <div className="seats-layout">
            <div className="free-space"></div>
            <div className="seats-allignment">
              <div className="seat-row row-1">
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
              </div>
              <div className="seat-row row-2">
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
              </div>
              <div className="seat-row row-3">
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
                <button className="seat-button">
                  <div className="seat-inner"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="Fare-details-box">
            <div className="boarding-details">
              <div className="boarding-heading">Boarding & Dropping</div>
              <div className="boarding-point">Silk Board</div>
              <div className="boarding-info">
                This is some information about the Boarding point
              </div>
              <div className="dropping-point">Rajiv Gandhi Chowk</div>
              <div className="boarding-info drop-info">
                This is some information about the Dropping point
              </div>
              <div className="seat-selected">
                Seat No'<div>{this.state.currentlyBooked}</div>
              </div>
              <div className="total-fare">
                Fare Details<div>{this.fairdetails()}</div>
              </div>
              <div className="proceed-btn">
                <button className="proceed-button ">PROCEED TO BOOK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seats;
