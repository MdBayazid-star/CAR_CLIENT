import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/usersReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="text-center my-5">
          <h2>
            Our Customer <span className="text-red">Reviews</span>
          </h2>
          <p className="text-secondary fw-bold">
            Get The Best Cars From Carify
          </p>
          <div className="d-flex justify-content-center">
            <hr className="hr" />
          </div>
          <div className="d-flex justify-content-center">
            <hr className="hr-sm" />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          {reviews.map((review) => (
            <div class="col-lg-4 col-md-6 col-12">
              <div class="card border-0 shadow h-100">
                <div className=" mx-auto my-4">
                  <img
                    src={review.userImg}
                    class="card-img-top card-img cart-img"
                    alt="..."
                  />
                </div>
                <div class="card-body mx-auto">
                  <div className="d-flex justify-content-between">
                    <Rating
                      className="me-3 text-center"
                      initialRating={review.rating}
                      readonly
                      emptySymbol={<i class="far fa-star text-red ts-5"></i>}
                      placeholderSymbol={
                        <i class="fas fa-star text-red ts-5"></i>
                      }
                      fullSymbol={<i class="fas fa-star text-red ts-5"></i>}
                    />
                    <div>
                      <p className="fw-bold text-red text-uppercase">
                        <i class="far fa-user"></i> {review.role}
                      </p>
                    </div>
                  </div>
                  <h4 class="card-title text-center text-red text-uppercase">
                    {review.clientsName}
                  </h4>
                  <p class=" text-center text-secondary">{review.massage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
