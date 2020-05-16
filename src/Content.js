import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CityData, renderCityName } from "./City";
import Autocomplete from "react-autocomplete-2";
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
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
