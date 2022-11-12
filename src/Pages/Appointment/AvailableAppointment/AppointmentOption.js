import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton";

const AppointmentOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <section className="my-8">
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-center text-primary">
            {name}
          </h2>
          <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
          <p>{slots.length} spaces available</p>
          <div className="card-actions justify-center">
            <PrimaryButton>Book Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentOption;
