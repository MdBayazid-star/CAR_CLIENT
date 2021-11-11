import React, { useEffect, useState } from "react";

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
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          {reviews.map((review) => (
            <div class="col">
              <div class="card h-100">
                <div className=" mx-auto my-4">
                  <img
                    src={review.userImg}
                    class="card-img-top card-img"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
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
