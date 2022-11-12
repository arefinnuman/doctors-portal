import React from "react";
import bgbanner from "../../Assets/images/bg.png";
import chair from "../../Assets/images/chair.png";
import PrimaryButton from "../../Components/PrimaryButton";
const Banner = () => {
  return (
    <section
      className="md:my-20 md:mx-5"
      style={{ background: `url(${bgbanner})` }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg md:w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
