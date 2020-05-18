import React, { Component } from "react";
import { login } from "./UserRoutes";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      alertMessage: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email !== "" && this.state.password !== "") {
      login(user)
        .then((res) => {
          if (res) {
            this.props.history.push(`/home-page`);
          }
        })
        .catch((err) => {
          this.setState({
            alertMessage: "Invalid user",
          });
        });
    } else if (this.state.email !== "" && this.state.password == "") {
      this.setState({
        alertMessage: "Password can not be empty",
      });
    } else {
      this.setState({
        alertMessage: "Fields can not be empty",
      });
    }
  }
  render() {
    const { alertMessage } = this.state;
    return (
      <div>
        {alertMessage ? (
          <div class="alert alert-danger" role="alert">
            {alertMessage}
          </div>
        ) : null}
        <form noValidate onSubmit={this.onSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-danger btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="./Signup.js">password?</a>
          </p>
        </form>
      </div>
    );
  }
}
