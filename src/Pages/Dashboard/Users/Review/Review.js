import { Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import StarIcon from "@mui/icons-material/Star";
const Review = () => {
  const { user } = useAuth();
  const [value, setValue] = useState(0);

  console.log(value);
  const [bookingInfo, setBookingInfo] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    const orders = {
      ...bookingInfo,
      userImg: `${
        user.photoURL
          ? user.photoURL
          : "https://i.ibb.co/Qf1rWhZ/114-1149878-setting-user-avatar-in-specific-size-without-breaking.png"
      }`,
      role: "client",
      rating: value,
      clientsName: user.displayName,
      email: user.email,
      phone: "",
      address: "",
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
                  defaultValue={user.displayName}
                  size="small"
                  required
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user.email}
                  size="small"
                  required
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  multiline
                  name="massage"
                  rows={4}
                  onBlur={handleOnBlur}
                  placeholder="massage"
                />
                <h6 className="p-1 mt-3">
                  <small className="text-muted">
                    Please rate us by selecting star.
                  </small>
                </h6>
                <Rating
                  className=""
                  name="rating"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(value);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />

                <button type="submit" className="btn-Car d-block">
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
