import React, { Component } from "react";
import { register } from "./UserRoutes";
const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isError: {
        name: "",
        email: "",
        password: "",
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.password !== ""
    ) {
      register(newUser).then((res) => {
        this.props.history.push(`/sign-in`);
      }).catch(err => {
        this.props.history.push(`/`)
        console.log(err)
      })
    }
  }
  formValChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name = value.length < 4 ? "Atleast 4 characaters required" : "";
        break;
      case "email":
        isError.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        isError.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value,
    });
  };

  render() {
    const { isError } = this.state;
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            className={
              isError.name.length > 0
                ? "is-invalid form-control"
                : "form-control"
            }
            name="name"
            placeholder="Enter your first name"
            value={this.state.name}
            onChange={this.formValChange}
          />
          {isError.name.length > 0 && (
            <span className="invalid-feedback">{isError.name}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={
              isError.email.length > 0
                ? "is-invalid form-control"
                : "form-control"
            }
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.formValChange}
          />
          {isError.email.length > 0 && (
            <span className="invalid-feedback">{isError.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={
              isError.password.length > 0
                ? "is-invalid form-control"
                : "form-control"
            }
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.formValChange}
          />
          {isError.password.length > 0 && (
            <span className="invalid-feedback">{isError.password}</span>
          )}
        </div>
        <button type="submit" className="btn btn-block btn-danger">
          Create User
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="./Signin.js">sign in?</a>
        </p>
      </form>
    );
  }
}

export default Register;
