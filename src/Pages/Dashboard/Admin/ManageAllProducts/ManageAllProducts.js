import { Link } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `http://localhost:5000/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = cars.filter(
              (userService) => userService._id !== id
            );
            setCars(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4  mb-5">
          {cars.map((car) => (
            <div key={car._id} className="col-lg-4 col-md-6 col-12">
              <div className="card h-100">
                <img src={car.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p>{car.sub_name}</p>
                  <h5 className="card-title">{car.name}</h5>
                  <h5> Price: ${car.price}</h5>
                  <p className="card-text">{car.details?.slice(0, 150)}</p>
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
                    <button
                      onClick={() => handleDeleteUserService(car._id)}
                      className="btn-Car-outline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAllProducts;
