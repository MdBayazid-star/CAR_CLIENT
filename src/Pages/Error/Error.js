import React from "react";
import { Link } from "react-router-dom";
import errorImg from "./../../imges/error/404.png";

const Error = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={errorImg} className="my-5 img-fluid " alt="" />
            <h1 className="ts-2">OOPS! THAT PAGE CAN’T BE FOUND.</h1>
            <h3 className="text-Gray my-3">
              The page you are looking is not available or has been removed. Try
              going to Home Page by using the button below.
            </h3>
            <Link to="/home">
              <button className="btn-car mb-5">
                <i className="fas fa-arrow-left "></i> Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
