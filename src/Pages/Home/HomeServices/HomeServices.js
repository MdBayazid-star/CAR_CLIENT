import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const SixItem = cars.slice(0, 6);
  return (
    <div>
      <div className="container">
        <div className="text-center my-5">
          <h2>
            Our <span className="text-red">Service</span>
          </h2>
          <p className="text-secondary fw-bold">
            Get The Best Cars From Carify
          </p>
          <div className="d-flex justify-content-center">
            <hr className="hr" />
          </div>
          <div className="d-flex justify-content-center">
            <hr className="hr-sm" />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4  mb-5">
          {SixItem.map((car) => (
            <div key={car._id} className="col ">
              <div className="card h-100 shadow border-0">
                <div className="shadow car-card-img">
                  <img src={car.img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <p className="text-secondary fw-bold">{car.sub_name}</p>
                  <h4 className="card-title text-red">{car.name}</h4>
                  <h5> Price: ${car.price}</h5>
                  <p className="card-text text-secondary">
                    {car.details?.slice(0, 150)}
                  </p>
                </div>
                <div className="card-footer bg-body border-0 my-2">
                  <div className="d-flex justify-content-evenly">
                    <span>
                      <i className="fas fa-car text-red"></i> {car.Car_DRIVE}
                    </span>
                    <span>
                      <i className="fas fa-cog text-red"></i> {car.Car_MILEAGE}
                    </span>
                    <span>
                      <i className="fas fa-map text-red"></i> {car.Car_BODY}
                    </span>
                  </div>
                </div>
                <div className="card-footer bg-body">
                  <div className="d-flex justify-content-evenly">
                    <Link to={`/servicesDetails/${car._id}`}>
                      <button className="btn-Car">See More</button>
                    </Link>
                    <button className="btn-Car-outline">
                      <i class="fas fa-thumbs-up"></i> Liked
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-5">
        <Link to="/allServices">
          <button className="btn-Car">
            See All Cars <i class="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
