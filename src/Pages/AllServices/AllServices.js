import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";

const AllServices = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://gentle-temple-66262.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <div>
        <div className="container">
          <div className="text-center my-5">
            <h2>Our Cars</h2>
            <p>Get The Best Cars From Carify</p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4  mb-5">
            {cars.map((car) => (
              <div key={car._id} className="col">
                <div className="card h-100">
                  <img src={car.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p>{car.sub_name}</p>
                    <h5 className="card-title">{car.name}</h5>
                    <h5> Price: ${car.price}</h5>
                    <p className="card-text">{car.details?.slice(0, 200)}</p>
                  </div>
                  <div className="card-footer bg-body border-0 my-2">
                    <div className="d-flex justify-content-evenly">
                      <span>
                        <i className="fas fa-car"></i> {car.Car_DRIVE}
                      </span>
                      <span>
                        <i className="fas fa-cog"></i> {car.Car_MILEAGE}
                      </span>
                      <span>
                        <i className="fas fa-map"></i> {car.Car_BODY}
                      </span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-evenly">
                      <Link to={`/servicesDetails/${car._id}`}>
                        <button className="btn-Car">See More</button>
                      </Link>
                      <button className="btn-Car-outline">Liked</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
