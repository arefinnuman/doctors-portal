import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <section className="my-8">
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-center text-primary">
            {name}
          </h2>
          <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} spaces
            available
          </p>
          <div className="card-actions justify-center">
            <label
              htmlFor="booking-modal"
              className="btn btn-primary px-6 bg-gradient-to-r from-primary to-secondary text-white"
              onClick={() => setTreatment(option)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentOption;
