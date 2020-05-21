import React, { Component } from "react";
import { Link } from "react-router-dom";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { bus: this.props.busInfo };
  }

  render() {
    return (
      <div class="card card-style">
        <div class="card-body">
          <div className="bus-essentials-row">
            <h6 class="bus-items">{this.state.bus.bus_name}</h6>
            <div class="bus-items">{this.state.bus.departure}</div>
            <div class="bus-items">{this.state.bus.arrival}</div>
            <div class="bus-items">{this.state.bus.ratings}</div>
            <div class="bus-items">INR{this.state.bus.fare}</div>
            <div class="bus-items line"></div>
          </div>

          <div className="bus-description-row">
            <div className="desc-item type">{this.state.bus.bus_type}</div>
            <div className="desc-item rating">{this.state.bus.ratings_num}</div>
            <div className="desc-item seats">
              <span>{this.state.bus.available_seat} seats available</span>
            </div>
          </div>
          <div className="bus-description-row ">
            <div className="desc-item window">
              <span>
                {this.state.bus.available_window_seat} window seats available
              </span>
            </div>
          </div>

          <div>
            <div className="svg">
              <img
                className="amenities"
                src={require("./images/movie.svg")}
                width="20"
                height="20"
                alt="pic"
              />
              <img
                className="amenities"
                src={require("./images/power.svg")}
                width="20"
                height="20"
                alt="pic"
              />
              <img
                className="amenities"
                src={require("./images/ui.svg")}
                width="20"
                height="20"
                alt="pic"
              />
              <img
                className="amenities"
                src={require("./images/technology.svg")}
                width="20"
                height="20"
                alt="pic"
              />
              <button className="btn btn-light">
                <img
                  className="amenities"
                  src={require("./images/shipping-and-delivery.svg")}
                  width="20"
                  height="20"
                  alt="pic"
                />{" "}
                Live Tracking
              </button>
            </div>
          </div>
        </div>
        <div className="bus-description-row view-seats ">
          <div className="desc-item view-seats">
          <Link to={ {pathname: '/seats', props:{busId:this.state.bus.bus_number}}}>
          <button className="btn btn-light btn-sm seats-view">
              VIEW SEATS
            </button>
        </Link>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
