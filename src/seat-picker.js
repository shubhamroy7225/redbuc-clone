import React, { Component } from "react";
const axios = require("axios");
class Seats extends Component {
  constructor() {
    super();
    this.state = {
      busId: "",
      availableSeats: [],
      bookedSeats: [],
      currentlyBooked: [],
      fair: 900,
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
  };
  componentDidMount = () => {


    this.setState({ busId: this.props.location.props.busId }, () =>
    axios
    .get("http://localhost:5000/bus/Seats", {
      params: {
        busId : this.state.busId
        
      },
    })
    .then(
      (response) => {
        console.log(response);
        this.setState({ availableSeats: response.data[0].available_seat_array});
        this.setState({ bookedSeats: response.data[0].booked_seat_array});
      },
      (error) => {
        console.log(error);
      }
    ));
    

    this.state.bookedSeats.map((seat) => {
      return (document.getElementById(seat).disabled = true);
    });
  };

  fairdetails = () => {
    return this.state.fair * this.state.currentlyBooked.length;
  };


  // buyTicket =() => {
  //   axios
  //   .PUT("http://localhost:5000/bus/Seats", {
  //     params: {
  //       busId : this.state.busId
        
  //     },
  //   })
  //   .then(
  //     (response) => {
  //       console.log(response);
  //       this.setState({ availableSeats: response.data[0].available_seat_array});
  //       this.setState({ bookedSeats: response.data[0].booked_seat_array});
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   ));

  // }

  render() {
    return (
      <div className="container-seats" bus_number>
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
                <button
                  className="seat-button"
                  id="1U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="2U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="3U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="4U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="5U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="6U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
              </div>
              <div className="seat-row row-2">
                <button
                  className="seat-button"
                  id="7U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="8U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="9U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="10U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="11U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="12U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
              </div>
              <div className="seat-row row-3">
                <button
                  className="seat-button"
                  id="13U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="14U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="15U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="16U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="17U"
                  onClick={this.handleClick}
                >
                  <div className="seat-inner"></div>
                </button>
                <button
                  className="seat-button"
                  id="18U"
                  onClick={this.handleClick}
                >
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
                <button className="proceed-button " onClick={this.buyTicket}> PROCEED TO BOOK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seats;
