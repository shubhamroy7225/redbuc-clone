import React, { Component } from "react";

class Content extends Component {
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
            <input
              type="text"
              aria-label="destination"
              className="form-control"
              placeholder="Start Date"
            />
            <input
              type="text"
              aria-label="destination"
              className="form-control"
              placeholder="Return Date(optional)"
            />

            <span class="input-group-addon">
              <span class="glyphicon glyphicon-calendar"></span>
            </span>

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
