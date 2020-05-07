import React, { Component } from "react";
// Import Datepicker
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Content extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <div className="container-fluid Search ">
        <div className="search-Component mt-5">
          <div className="input-group">
            <input
              type="text"
              aria-label="source"
              className="form-control"
              placeholder="Source"
            />
            <input
              type="text"
              aria-label="destination"
              className="form-control"
              placeholder="Destination"
            />
            <DatePicker
            className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange}
              

            />
            <input
              type="text"
              aria-label="destination"
              className="form-control"
              placeholder="Return Date(optional)"
            />

            <div className="input-group-prepend">
              <button className="input-group-text">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
