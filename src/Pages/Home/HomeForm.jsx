import React from "react";
import bgAppointment from "../../Assets/images/appointment.png";
import PrimaryButton from "../../Components/PrimaryButton";

const HomeForm = () => {
  return (
    <section
      className="flex justify-center text-center lg:mt-8 py-24 "
      style={{ background: `url(${bgAppointment})` }}
    >
      <div>
        <h4 className="text-xl font-bold text-secondary ">Contact Us</h4>
        <h3 className="text-2xl font white">Stay Connected with us</h3>
        <form className="py-5">
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-6"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-5"
            type="text"
            name="subject"
            id=""
            placeholder="Subject"
          />
          <br />
          <textarea
            className="lg:w-[450px] h-[140px] rounded-xl pl-4 my-5"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default HomeForm;
