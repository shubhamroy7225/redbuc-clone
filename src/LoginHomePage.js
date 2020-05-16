import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Signin";
import SignUp from "./Signup";
import "./App.css";
function LoginHomePage() {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top "
        id="mainNavbar"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <img
            src={require("./images/transport(1).png")}
            width="45"
            height="40"
            alt="pic"
          />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Route exact path="/" component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </div>
      </div>
    </div>
  );
}
export default LoginHomePage;
