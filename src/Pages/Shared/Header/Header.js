import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className=" shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src="https://i.ibb.co/fd278Mz/Screenshot-21-removebg-preview.png"
                className="img-fluid"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#db2d2dd2",
                    }}
                    className="nav-link"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#db2d2dd2",
                    }}
                    className="nav-link"
                    to="/allServices"
                  >
                    Ours Cars
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex mx-4">
                {user?.email ? (
                  <Box>
                    <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                      <button className="btn-Car me-3">Dashboard</button>
                    </NavLink>
                    <button onClick={logout} className="btn-Car">
                      Logout
                    </button>
                  </Box>
                ) : (
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/login"
                  >
                    <button className="btn-Car">Login</button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
