import React, { useState } from "react";
import "./Login.css";
import loginImg from "./../../../imges/login/login.png";
import Header from "../../Shared/Header/Header";
import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Header></Header>
      <div className="LogIn">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="login p-5">
                <h2 className="text-light">Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <TextField
                    sx={{ width: "75%", m: 1, color: "#FFF" }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1, color: "#FFF" }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard"
                  />

                  <div>
                    <button className="btn-Car-outline" type="submit">
                      Login
                    </button>
                  </div>
                  <p className="text-light">
                    New User?{" "}
                    <NavLink
                      style={{ textDecoration: "none", color: "#222" }}
                      to="/signup"
                    >
                      Please Register
                    </NavLink>
                  </p>
                  {isLoading && <CircularProgress />}
                  {user?.email && (
                    <Alert severity="success">Login successfully!</Alert>
                  )}
                  {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p className="text-left"></p>
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

export default Login;
