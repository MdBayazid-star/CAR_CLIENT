import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import "./ServicesDetails.css";
import { Box } from "@mui/system";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const ServiceDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactItem = data.filter((td) => td._id === key);
  const handleBookingSubmit = (e) => {
    // collect data
    const orders = {
      ...bookingInfo,
      serviceName: ExactItem[0]?.name,
      serviceId: ExactItem[0]?._id,
      servicePrice: ExactItem[0]?.price,
    };
    // send to the server
    fetch("http://localhost:5000/userOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Order SuccessFull ");
        }
      });

    e.preventDefault();
  };
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
    address: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  return (
    <>
      <Header></Header>
      <div className="servicesDetails">
        <div
          style={{
            height: "440px",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.4)),url(${ExactItem[0]?.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div>
            <div className="container">
              <div className="row">
                <div className=" col-lg-5 serviceDetailsBanner">
                  <h5 className="d-flex">
                    <Rating
                      className="me-3"
                      initialRating={ExactItem[0]?.rating}
                      readonly
                      emptySymbol={
                        <i class="far fa-star icon-Goldenrod ts-5"></i>
                      }
                      placeholderSymbol={
                        <i class="fas fa-star icon-Goldenrod ts-5"></i>
                      }
                      fullSymbol={
                        <i class="fas fa-star icon-Goldenrod ts-5"></i>
                      }
                    />
                    <p className="text-light fs-4">
                      {ExactItem[0]?.Review} Reviews
                    </p>
                  </h5>
                  <h1 className="ts-1 text-light fw-bold">
                    {ExactItem[0]?.name}
                  </h1>
                  <p className="mb-2">
                    <span className="fs-2 fw-bold text-light">
                      ${ExactItem[0]?.price}
                    </span>
                    <span className="fs-4 text-light fw-bold">
                      / Per person
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12 my-5">
              <h1 className="ts-1">Overview</h1>
              <p className="text-gray">{ExactItem[0]?.details}</p>
              <div className="d-flex cart-dl my-3 mt-4">
                <p>
                  <i class="far fa-clock color-pink me-3"></i>
                  {ExactItem[0]?.days} Days
                </p>
                <p>|</p>
                <p>
                  <i class="far fa-user color-pink me-3"></i> Age{" "}
                  {ExactItem[0]?.requireAge}
                </p>
                <p>|</p>
                <p>
                  <i class="far fa-map color-pink me-3"></i>{" "}
                  {ExactItem[0]?.Location}
                </p>
              </div>
              <div>
                <h1 className="ts-1 mt-5">Gallery</h1>
                <div className="row g-4">
                  <div className="col-lg-4">
                    <img
                      className="img-fluid galleryImg"
                      src={ExactItem[0]?.gallery1}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-4 ">
                    <img
                      className="img-fluid galleryImg"
                      src={ExactItem[0]?.gallery2}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-4 ">
                    <img
                      className="img-fluid galleryImg"
                      src={ExactItem[0]?.gallery3}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8 ">
                    <img
                      className="img-fluid galleryImg"
                      src={ExactItem[0]?.gallery4}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-4 ">
                    <img
                      className="img-fluid galleryImg"
                      src={ExactItem[0]?.gallery5}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12 my-5">
              <div className="shadow p-5 m-3 borderRadius-4">
                <Box sx={{}}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "center" }}
                  >
                    Order
                  </Typography>
                  <form
                    sx={{ textAlign: "center" }}
                    onSubmit={handleBookingSubmit}
                  >
                    <TextField
                      disabled
                      sx={{ width: "90%", m: 1 }}
                      id="outlined-size-small"
                      placeholder={ExactItem[0]?.name}
                      size="small"
                    />
                    <TextField
                      disabled
                      sx={{ width: "90%", m: 1 }}
                      id="outlined-size-small"
                      placeholder={ExactItem[0]?._id}
                      size="small"
                    />
                    <TextField
                      disabled
                      sx={{ width: "90%", m: 1 }}
                      id="outlined-size-small"
                      placeholder={"$" + ExactItem[0]?.price}
                      size="small"
                    />
                    <TextField
                      sx={{ width: "90%", m: 1 }}
                      id="outlined-size-small"
                      name="patientName"
                      onBlur={handleOnBlur}
                      defaultValue={user.displayName}
                      size="small"
                    />
                    <TextField
                      sx={{ width: "90%", m: 1 }}
                      id="outlined-size-small"
                      name="email"
                      onBlur={handleOnBlur}
                      defaultValue={user.email}
                      size="small"
                    />
                    <TextField
                      sx={{ width: "90%", m: 1 }}
                      id="outlined-size-small"
                      name="phone"
                      onBlur={handleOnBlur}
                      placeholder="phone Number"
                      size="small"
                    />
                    <TextField
                      sx={{ width: "90%", m: 1 }}
                      id="outlined-size-small"
                      name="address"
                      onBlur={handleOnBlur}
                      placeholder="Home Address"
                      size="small"
                    />

                    <button type="submit" className="btn-Car">
                      Submit
                    </button>
                  </form>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ServiceDetails;
