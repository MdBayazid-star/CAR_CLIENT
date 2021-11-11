import {
  Alert,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import loginImg from "./../../../imges/login/login.png";

const Signup = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <>
      <Header></Header>
      <div className="SignUp">
        <div className="container">
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="login p-5">
                <h2 className="text-light">Sign Up</h2>
                {!isLoading && (
                  <form onSubmit={handleLoginSubmit}>
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      id="standard-basic"
                      label="Your Name"
                      name="name"
                      onBlur={handleOnBlur}
                      variant="standard"
                    />
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      id="standard-basic"
                      label="Your Email"
                      name="email"
                      type="email"
                      onBlur={handleOnBlur}
                      variant="standard"
                    />
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      id="standard-basic"
                      label="Your Password"
                      type="password"
                      name="password"
                      onBlur={handleOnBlur}
                      variant="standard"
                    />
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      id="standard-basic"
                      label="ReType Your Password"
                      type="password"
                      name="password2"
                      onBlur={handleOnBlur}
                      variant="standard"
                    />

                    <div>
                      <button className="btn-Car-outline" type="submit">
                        Sign Up
                      </button>
                    </div>
                    <p className="text-light">
                      Already Registered?{" "}
                      <NavLink
                        style={{ textDecoration: "none", color: "#222" }}
                        to="/login"
                      >
                        Please Login
                      </NavLink>
                    </p>
                  </form>
                )}

                {isLoading && <CircularProgress />}
                {user?.email && (
                  <Alert severity="success">User Created successfully!</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div>
                <img className="img-fluid" src={loginImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signup;
