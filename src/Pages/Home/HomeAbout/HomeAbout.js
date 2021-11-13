import React from "react";

const HomeAbout = () => {
  return (
    <div>
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
      <div className="HomeAbout">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-5">
              <img
                src="https://i.ibb.co/kxtKbqg/Screenshot-22-removebg-preview.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-6 my-5">
              <div className="d-flex justify-content-center">
                <a className="navbar-brand d-flex align-items-center" href="/">
                  <img
                    src="https://i.ibb.co/fd278Mz/Screenshot-21-removebg-preview.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <p className="text-secondary fw-bold text-center">
                Fell The Best Experience With Our Rental Dweals
              </p>
              <p className="text-secondary">
                Cars came into global use during the 20th century, and developed
                economies depend on them. The year 1886 is regarded as the birth
                year of the car when German inventor Karl Benz patented his Benz
                Patent-Motorwagen. Cars became widely available in the early
                20th century. One of the first cars accessible to the masses was
                the 1908 Model T, an American car manufactured by the Ford Motor
                Company. Cars were rapidly adopted in the US, where they
                replaced animal-drawn carriages and carts. In Europe and other
                parts of the world, demand for automobiles did not increase
                until after World War I
              </p>
              <p className="text-secondary">
                A car is a wheeled motor vehicle used for transportation. Most
                definitions of cars say that they run primarily on roads, seat
                one-to-eight people, have four wheels and mainly transport
                people rather than goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
