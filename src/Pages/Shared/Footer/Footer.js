import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer pt-5 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
                <Link className="navbar-brand text-light" to="/home">
                  <span>
                    <a
                      className="navbar-brand d-flex align-items-center"
                      href="/"
                    >
                      <img
                        src="https://i.ibb.co/fd278Mz/Screenshot-21-removebg-preview.png"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </span>
                </Link>
                <h3 className="mt-3">Do You Need Help With Anything?</h3>
                <p className="w-75 foot fs-6 text">
                  Receive updates, hot deals, tutorials, discounts sent straignt
                  in your inbox every month
                </p>
                <div className="input-group mb-3 w-75">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <NavLink to="/commingSoon">
                    <button className="btn-Car border-0">Subscribe</button>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-4 footerLink">
                    <h4>LAYOUTS</h4>
                    <li>
                      <i className="fas fa-arrow-right"></i> Home Page
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> About Page
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Service Page
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Contact Page
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Single Blog
                    </li>
                  </div>
                  <div className="col-lg-4 footerLink">
                    <h4>ALL SECTIONS</h4>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Headers
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Attractive
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Testimonials
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Videos
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Footers
                    </li>
                  </div>
                  <div className="col-lg-4 footerLink">
                    <h4>COMPANY</h4>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> About
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Blog
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Pricing
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Affiliate
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-arrow-right"></i> Login
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerText">
            <p className="text-center mt-5">
              © 2021 <span className="c-green">Carify</span> Designd By{" "}
              <span className="c-green">Md Bayazid</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
