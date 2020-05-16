import React, { Component } from "react";
<<<<<<< HEAD
import { CityData, renderCityName } from "./City";
import Autocomplete from "react-autocomplete-2";
||||||| merged common ancestors
// Import Datepicker
=======
import { Link } from "react-router-dom";
import { CityData, renderCityName } from "./City";
import Autocomplete from "react-autocomplete-2";
>>>>>>> 7287a8f81032643ec015f145f69fcf5c89454221
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

class Content extends Component {
  state = {
    sourceCityName: "",
    destinationCityName: "",
    startDate: "",
    returnDate: "",
  };

  pickOnwardDate = (date) => {
    this.setState({
      startDate: date,
    });
  };
  pickReturnDate = (date) => {
    this.setState({
      returnDate: date,
    });
  };

  render() {
    return (
      <div className="container-fluid Search ">
        <div className="search-Component mt-5">
          <div className="input-group">
<<<<<<< HEAD
            <div className="autocomplete-wrapper">
              <Autocomplete
                inputProps={{ placeholder: "From" }}
                value={this.state.sourceCityName}
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
                onChange={(event, sourceCityName) => this.setState({ sourceCityName })}
                onSelect={(sourceCityName) => this.setState({ sourceCityName })}
              />
            </div>
            <div className="autocomplete-wrapper">
              <Autocomplete
                inputProps={{ placeholder: "To" }}
                value={this.state.destinationCityName}
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
                onChange={(event, destinationCityName) => this.setState({ destinationCityName })}
                onSelect={(destinationCityName) => this.setState({ destinationCityName })}
              />
            </div>
            <div className="autocomplete-wrapper">
              <DatePicker
                placeholderText="Onward Date"
                selected={this.state.startDate}
                onChange={this.pickOnwardDate}
                minDate = {new Date()}
              />
            </div>
            <div className="autocomplete-wrapper">
              <DatePicker
                placeholderText="Return Date(Optional)"
                selected={this.state.returnDate}
                onChange={this.pickReturnDate}
                minDate = {this.state.startDate}
              />
            </div>
            <div className="">
              <button className="searchbutton btn btn-danger">Search</button>
||||||| merged common ancestors
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
=======
            <div className="autocomplete-wrapper">
              <Autocomplete
                inputProps={{ placeholder: "From" }}
                value={this.state.sourceCityName}
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
                onChange={(event, sourceCityName) => this.setState({ sourceCityName })}
                onSelect={(sourceCityName) => this.setState({ sourceCityName })}
              />
            </div>
            <div className="autocomplete-wrapper">
              <Autocomplete
                inputProps={{ placeholder: "To" }}
                value={this.state.destinationCityName}
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
                onChange={(event, destinationCityName) => this.setState({ destinationCityName })}
                onSelect={(destinationCityName) => this.setState({ destinationCityName })}
              />
            </div>
            <div className="autocomplete-wrapper">
              <DatePicker
                placeholderText="Onward Date"
                selected={this.state.startDate}
                onChange={this.pickOnwardDate}
                minDate = {new Date()}
              />
            </div>
            <div className="autocomplete-wrapper">
              <DatePicker
                placeholderText="Return Date(Optional)"
                selected={this.state.returnDate}
                onChange={this.pickReturnDate}
                minDate = {this.state.startDate}
              />
            </div>
            <div className="">
            <Link to={ {pathname: '/Search', myprops: { source:this.state.sourceCityName, destination:this.state.destinationCityName , date:'16 May'} }}>
            <button className="searchbutton btn btn-danger">Search</button>
        </Link>
              
>>>>>>> 7287a8f81032643ec015f145f69fcf5c89454221
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
