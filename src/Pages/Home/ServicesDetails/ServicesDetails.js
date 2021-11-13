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
import hands from "./../../../imges/Icons/hands.png";

const ServiceDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://gentle-temple-66262.herokuapp.com/cars")
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
    fetch("https://gentle-temple-66262.herokuapp.com/usersOrder", {
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
    document.getElementById("Form").reset();
    e.preventDefault();
  };
  const { user } = useAuth();
  const initialInfo = {
    clientsName: user.displayName,
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
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6">
            <div className="imgBox">
              <img className="img-fluid" src={ExactItem[0]?.img} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="text-red">{ExactItem[0]?.name}</h1>
            <h5 className="d-flex">
              <Rating
                className="me-3"
                initialRating={ExactItem[0]?.rating}
                readonly
                emptySymbol={<i class="far fa-star icon-Goldenrod ts-5"></i>}
                placeholderSymbol={
                  <i class="fas fa-star icon-Goldenrod ts-5"></i>
                }
                fullSymbol={<i class="fas fa-star icon-Goldenrod ts-5"></i>}
              />
              <p className="fs-4">{ExactItem[0]?.review} Reviews</p>
            </h5>
            <p className="mb-2">
              <span className="fs-2 fw-bold text-red">
                ${ExactItem[0]?.price}
              </span>
              <span className="fs-4 fw-bold">/ Per Car</span>
            </p>
            <p className="text-secondary my-4">{ExactItem[0]?.details}</p>
            <div className="d-flex">
              <button className="btn-Car me-4"> More Details</button>
              <button className="btn-Car-outline"> Contact </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center my-5">
            <h2>
              All <span className="text-red">Specifications</span>
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
        </div>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <table class="table table-bordered border-orange">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  {/* Tr 1 Start */}
                  <tr className="bg-light_red">
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <i class="fas fa-car fs-1 text-red me-4"></i>{" "}
                        <div>
                          <p className="m-0 fw-bold text-secondary">
                            Car BODY:
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_BODY}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid is-6 me-3"
                          src={hands}
                          alt=""
                        />{" "}
                        <div>
                          <p className="m-0 fw-bold text-secondary">
                            Car DRIVE:
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_DRIVE}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* Tr 1 End */}
                  {/* Tr 2 Start */}
                  <tr className="bg-light">
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <i class="fas fa-tools fs-1 text-red me-4"></i>{" "}
                        <div>
                          <p className="m-0 fw-bold text-secondary">
                            Car MILEAGE
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_MILEAGE}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center  justify-content-center">
                        <i class="fas fa-gas-pump  fs-1 text-red me-4"></i>{" "}
                        <div>
                          <p className="m-0 fw-bold text-secondary">
                            Car FUEL TYPE:
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_FUEL_TYPE}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* Tr 2 End */}
                  <tr className="bg-light_red">
                    <td>
                      <div className="d-flex align-items-center  justify-content-center">
                        <i class="fas fa-tasks fs-1 text-red me-4"></i>
                        <div>
                          <p className="m-0 fw-bold text-secondary">
                            Car TRANSMISSION:
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_TRANSMISSION}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center  justify-content-center">
                        <i class="fas fa-id-card-alt fs-1 text-red me-4"></i>{" "}
                        <div>
                          <p className="m-0 fs-5 fw-bold text-secondary">
                            Car STOCK ID:
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_STOCK_ID}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-light">
                    <td>
                      <div className="d-flex align-items-center  justify-content-center">
                        <i class="fas fa-history fs-1 text-red me-4"></i>{" "}
                        <div>
                          <p className="m-0 fw-bold text-secondary">
                            Car HISTORY:
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_HISTORY}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center  justify-content-center">
                        <i class="fab fa-vine  fs-1 text-red me-4"></i>{" "}
                        <div>
                          <p className="m-0 fw-bold text-secondary">
                            Car VIN :
                          </p>
                          <p className="fs-5 fw-bold">
                            {ExactItem[0]?.Car_VIN}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-12  col-md-12 col-12">
              <div className="text-center my-5">
                <h2>
                  Order <span className="text-red">Cars</span>
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
              <div className="shadow p-5 m-3 borderRadius-4 my-5">
                <Box sx={{}}>
                  <Typography
                    id="transition-modal-title"
                    variant="h4"
                    component="h2"
                    sx={{
                      textAlign: "center",
                      color: "#ff725e",
                      fontWeight: "bold",
                    }}
                  >
                    Order From
                  </Typography>
                  <form
                    id="Form"
                    sx={{ textAlign: "center" }}
                    onSubmit={handleBookingSubmit}
                  >
                    <TextField
                      disabled
                      sx={{ width: "100%", m: 1 }}
                      id="outlined-size-small"
                      placeholder={ExactItem[0]?.name}
                      size="small"
                    />
                    <TextField
                      disabled
                      sx={{ width: "100%", m: 1 }}
                      id="outlined-size-small"
                      placeholder={ExactItem[0]?._id}
                      size="small"
                    />
                    <TextField
                      disabled
                      sx={{ width: "100%", m: 1 }}
                      id="outlined-size-small"
                      placeholder={"$" + ExactItem[0]?.price}
                      size="small"
                    />
                    <TextField
                      sx={{ width: "100%", m: 1 }}
                      id="outlined-size-small"
                      name="clientsName"
                      onBlur={handleOnBlur}
                      defaultValue={user?.displayName}
                      size="small"
                    />
                    <TextField
                      sx={{ width: "100%", m: 1 }}
                      id="outlined-size-small"
                      name="email"
                      onBlur={handleOnBlur}
                      defaultValue={user?.email}
                      size="small"
                    />
                    <TextField
                      sx={{ width: "100%", m: 1 }}
                      id="outlined-size-small"
                      name="phone"
                      onBlur={handleOnBlur}
                      placeholder="phone Number"
                      size="small"
                    />
                    <TextField
                      sx={{ width: "100%", m: 1 }}
                      id="outlined-size-small"
                      name="address"
                      onBlur={handleOnBlur}
                      placeholder="Home Address"
                      size="small"
                    />

                    <div className="d-flex justify-content-center mt-4">
                      <button type="submit" className="btn-Car">
                        Submit
                      </button>
                    </div>
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
