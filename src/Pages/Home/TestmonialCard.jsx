import React from "react";

const TestmonialCard = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="p-2">{userReview}</p>
          <div className="flex  items-center mt-6">
            <div className="avatar mr-6">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>

            <div>
              <h2 className="card-title">{name}</h2>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestmonialCard;
