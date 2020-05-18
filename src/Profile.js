import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { FaUsers } from "react-icons/fa";
import "./App.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      errors: {},
    };
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    try {
      const decoded = jwt_decode(token);
      console.log(decoded);
      this.setState({
        name: decoded.name,
        email: decoded.email,
      });
    } catch {
      console.log("Failed to decode JWT");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-4">
          <div class="test rounded-circle">
            <FaUsers class="fa fa-user text-center" size={100} />
          </div>
          <h5 className="text-center">{this.state.name}</h5>
          <h3>{this.state.email}</h3>
        </div>
      </div>
    );
  }
}
export default Profile;
