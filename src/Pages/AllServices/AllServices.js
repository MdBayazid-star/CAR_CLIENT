import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../../redux/actions/productActions";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const AllServices = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    console.log("dfsfdsf");
    const response = await axios
      .get("https://gentle-temple-66262.herokuapp.com/cars")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data.result));
    console.log(response.data.result);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  // const cars = products;
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://gentle-temple-66262.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <div>
        <div className="container">
          <div className="text-center my-5">
            <h2>
              Our <span className="text-red">Cars</span>
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
            {cars.map((car) => (
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
                        <i className="fas fa-cog text-red"></i>{" "}
                        {car.Car_MILEAGE}
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllServices;
