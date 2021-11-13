import React from "react";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 my-5">
            <div className="banner_content p-5">
              <h1>Take Best Car</h1>
              <h1 className="d-flex align-items-center ">
                From
                <a className="navbar-brand d-flex align-items-center" href="/">
                  <img
                    src="https://i.ibb.co/fd278Mz/Screenshot-21-removebg-preview.png"
                    className="img-fluid "
                    alt=""
                  />
                </a>
              </h1>
              <p className="fw-bold ">
                A car is a wheeled motor vehicle used for transportation. Most
                definitions of cars say that they run primarily on roads, seat
                one-to-eight people, have four wheels and mainly transport
                people rather than goods.
              </p>
              <div>
                <button className="btn-Car me-4 mb-3">Log In </button>
                <button className="btn-Car-outline"> Add Car</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
