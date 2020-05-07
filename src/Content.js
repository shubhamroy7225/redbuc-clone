import React, { Component } from "react";
import { CityData, renderCityName } from "./City";
import Autocomplete from "react-autocomplete-2";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

class Content extends Component {
  state = {
    val: "",
    val2: "",
    startDate: "",
    returnDate: "",
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleChange1 = (date) => {
    this.setState({
      returnDate: date,
    });
  };

  render() {
    return (
      <div className="container-fluid Search ">
        <div className="search-Component mt-5">
          <div className="input-group">
            <div className="autocomplete-wrapper">
              <Autocomplete
                inputProps={{ placeholder: "From" }}
                value={this.state.val}
                items={CityData()}
                getItemValue={(item) => item.cityName}
                shouldItemRender={renderCityName}
                renderMenu={(item) => <div className="dropdown">{item}</div>}
                renderItem={(item, isHighlighted) => (
                  <div
                    className={`item ${isHighlighted ? "selected-item" : ""}`}
                  >
                    {item.cityName}
                  </div>
                )}
                onChange={(event, val) => this.setState({ val })}
                onSelect={(val) => this.setState({ val })}
              />
            </div>
            <div className="autocomplete-wrapper">
              <Autocomplete
                inputProps={{ placeholder: "To" }}
                value={this.state.val2}
                items={CityData()}
                getItemValue={(item) => item.cityName}
                shouldItemRender={renderCityName}
                renderMenu={(item) => <div className="dropdown">{item}</div>}
                renderItem={(item, isHighlighted) => (
                  <div
                    className={`item ${isHighlighted ? "selected-item" : ""}`}
                  >
                    {item.cityName}
                  </div>
                )}
                onChange={(event, val2) => this.setState({ val2 })}
                onSelect={(val2) => this.setState({ val2 })}
              />
            </div>
            <div className="autocomplete-wrapper">
              <DatePicker
                placeholderText="Onward Date"
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
            <div className="autocomplete-wrapper">
              <DatePicker
                placeholderText="Return Date(Optional)"
                selected={this.state.returnDate}
                onChange={this.handleChange1}
              />
            </div>
            <div className="">
              <button className="searchbutton btn btn-danger">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
