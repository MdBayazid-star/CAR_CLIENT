import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const { user, logout, token } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    const url = `https://gentle-temple-66262.herokuapp.com/usersOrder?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, [user.email, token]);
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
                <li>
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#db2d2dd2",
                    }}
                    to="/dashboard"
                    className="nav-link"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex justify-content-center align-items-center">
                <div className="me-3 logBok">
                  {user.photoURL ? (
                    <span>
                      <img
                        className="userImg p-1 cart-image"
                        src={user.photoURL}
                        alt=""
                      />
                    </span>
                  ) : (
                    <span>
                      <img
                        className="userImg p-1 cart-image"
                        src="https://i.ibb.co/Qf1rWhZ/114-1149878-setting-user-avatar-in-specific-size-without-breaking.png"
                        alt=""
                      />
                    </span>
                  )}
                  {user.displayName ? (
                    <span className="text-Blue ts-5 color-pink fw-bold ms-2 ">
                      {user.displayName}
                    </span>
                  ) : (
                    <span></span>
                  )}
                </div>
                {user?.email ? (
                  <Box>
                    <Link to="/dashboard/myOrders">
                      {" "}
                      <Badge
                        className="ms-3 me-4"
                        badgeContent={userOrders.length}
                        color="error"
                      >
                        <ShoppingCartIcon
                          sx={{ color: "#ff725e" }}
                          color="action"
                        />
                      </Badge>
                    </Link>
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
