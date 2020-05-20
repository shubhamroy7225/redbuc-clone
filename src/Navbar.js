import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Profile from "./Profile";
class navbarInstance extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }
  render() {
    const { open } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top "
        id="mainNavbar"
      >
        <a className="navbar-brand" href="/">
          {" "}
          <img
            src={require("./images/transport(1).png")}
            width="45"
            height="40"
            alt="pic"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                BUS TICKET
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                BUS HIRE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                PILGRIMAGES
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                HELP
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Manage Bookings
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Bus Tickets
                </a>
                <a className="dropdown-item" href="/">
                  Cancel
                </a>
                <a className="dropdown-item" href="/">
                  Reschedule
                </a>
                <a className="dropdown-item" href="/">
                  Show My Ticket
                </a>
                <a className="dropdown-item" href="/">
                  Email/SMS
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={require("./images/social.png")}
                  width="30"
                  height="25"
                  alt="pic"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="/">
                  My Trips
                </a>
                <a className="dropdown-item" href="/">
                  Wallets/Cards
                </a>
                <a className="dropdown-item" onClick={this.onOpenModal}>
                  My Profile
                </a>

                <Modal open={open} onClose={this.onCloseModal} center>
                  <Profile />
                </Modal>

                <a
                  className="dropdown-item"
                  onClick={this.logOut.bind(this)}
                  href="/"
                >
                  Sign Out
                </a>
                <a className="dropdown-item" href="/">
                  Sign Out From All Devices
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(navbarInstance);
