import React from "react";

const HomeAbout = () => {
  return (
    <div className="HomeAbout">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://i.ibb.co/kxtKbqg/Screenshot-22-removebg-preview.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="text-center my-5">
              <h2>
                About <span className="text-red">Us</span>
              </h2>
              <p className="text-secondary fw-bold">
                Fell The Best Experience With Our Rental Dweals
              </p>
              <div className="d-flex justify-content-center">
                <hr className="hr" />
              </div>
              <div className="d-flex justify-content-center">
                <hr className="hr-sm" />
              </div>
            </div>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              illo reiciendis corrupti dolorum eius incidunt, aliquid voluptatem
              quisquam similique sint iste ex earum pariatur quis officiis nisi
              blanditiis iure, dolores praesentium sequi nesciunt reprehenderit!
              Quia maiores inventore fugiat perspiciatis atque!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              tenetur hic exercitationem, explicabo ab corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
