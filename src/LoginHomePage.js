<<<<<<< HEAD
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Signin";
import SignUp from "./Signup";
import "./App.css";

function LoginHomePage() {
  return (
    <Router>
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top "
          id="mainNavbar"
        >
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
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default LoginHomePage;
||||||| merged common ancestors
=======
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Signin";
import SignUp from "./Signup";
import Search from './search'
import "./App.css";

function LoginHomePage() {
  return (
    <Router>
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top "
          id="mainNavbar"
        >
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
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default LoginHomePage;
>>>>>>> 7287a8f81032643ec015f145f69fcf5c89454221
