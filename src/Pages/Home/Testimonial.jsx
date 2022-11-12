import React from "react";
import img1 from "../../Assets//images/people1.png";
import img2 from "../../Assets//images/people2.png";
import img3 from "../../Assets//images/people3.png";
import quotesbg from "../../Assets/icons/quote.svg";
import TestmonialCard from "./TestmonialCard";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      img: img1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      img: img2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      img: img3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold text-secondary">Testimonial </h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48 " src={quotesbg} alt="quote" />
        </figure>
      </div>
      <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <TestmonialCard review={review} key={review._id} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
