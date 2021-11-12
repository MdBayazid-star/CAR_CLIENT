import React from "react";
import { Link } from "react-router-dom";
import comingSoonImg from "./../../imges/comming-soon/26691.jpg";
const ComingSoon = () => {
  return (
    <div>
      <div>
        <img className="img-fluid comingSoonImg" src={comingSoonImg} alt="" />
      </div>
      <div
        className="d-flex justify-content-center
      "
      >
        <Link to="/">
          <button className="btn-Car">
            <i class="fas fa-arrow-left"></i> Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
