import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 mt-5">
              <p className="footer-lists-heading">About redBus</p>
              <ul className="list-unstyled">
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    About Us
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Mobile Version
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    redBus on Mobile
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Sitemap
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Offers
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Careers
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Values
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 mt-5">
              <p className="footer-lists-heading">Info</p>
              <ul className="list-unstyled">
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    T & C
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    FAQ
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Blog
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Agent Registration
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Insurance Partner
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    User Agreement
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mt-5">
              <p className="footer-lists-heading">Global Sites</p>
              <ul className="list-unstyled">
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    India
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Singapore
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Malaysia
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Indonesia
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Peru
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Colombia
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mt-5">
              <p className="footer-lists-heading">Partners</p>
              <ul className="list-unstyled">
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Goibibo
                  </a>
                </li>
                <li className="footer-list-item mb-1">
                  <a className="footer-list-item" href="/">
                    Makemytrip
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 ml-auto mt-4 desc">
              <div className="footer-desc-col mb-3">
                <img
                  src={require("./images/transport.png")}
                  width="60"
                  height="60"
                  alt="pic"
                />
              </div>
              <p>
                redBus is the world's largest online bus ticket booking service
                trusted by over 17 million happy customers globally. redBus
                offers bus ticket booking through its website,iOS and Android
                mobile apps for all major routes.{" "}
              </p>
              <div>
                <img
                  className="mr-2"
                  src={require("./images/brands-and-logotypes.svg")}
                  width="30"
                  height="30"
                  alt="pic"
                />
                <img
                  className="mr-2"
                  src={require("./images/twitter.svg")}
                  width="30"
                  height="30"
                  alt="pic"
                />
                <img
                  src={require("./images/instagram.svg")}
                  width="30"
                  height="30"
                  alt="pic"
                />
              </div>
              <p className="mt-2">Ⓒ2020 ibibogroup All rights reserved </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
