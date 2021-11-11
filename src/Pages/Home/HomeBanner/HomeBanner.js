import React from "react";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 my-5">
            <div className="banner_content p-5">
              <h1>Take Best Car</h1>
              <h1>
                From <span>Carify</span>
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam
                praesentium placeat hic. Voluptatibus pariatur nobis corrupti
                eum asperiores eligendi consequatur tenetur voluptate illo
                facilis unde enim animi iusto, fugiat laboriosam atque ex iure
                doloremque veniam alias obcaecati! Nemo, amet?
              </p>
              <div>
                <button className="btn-Car me-4 mb-3">Log In </button>
                <button className="btn-Car-outline"> Add Car</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
