import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const initialInfo = {
    userImg:
      "https://i.ibb.co/Qf1rWhZ/114-1149878-setting-user-avatar-in-specific-size-without-breaking.png",
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
  const handleBookingSubmit = (e) => {
    // collect data
    const orders = {
      ...bookingInfo,
    };
    // send to the server
    fetch("http://localhost:5000/usersReview", {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-12 my-5">
          <div className="shadow p-5 m-3 borderRadius-4">
            <Box sx={{}}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                My Review
              </Typography>
              <form
                className="mt-4"
                sx={{ textAlign: "center" }}
                onSubmit={handleBookingSubmit}
              >
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="clientsName"
                  onBlur={handleOnBlur}
                  placeholder={user.displayName}
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
  );
};

export default Review;
