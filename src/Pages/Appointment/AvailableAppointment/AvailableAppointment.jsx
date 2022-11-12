import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
const AvailableAppointment = ({ selected }) => {
  const [appointmentOptions, setappointmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setappointmentOptions(data));
  }, []);
  return (
    <section className="mt-16">
      <h5 className="text-center text-secondary font-extrabold text-xl">
        Available Appointment on {format(selected, "PP")}
      </h5>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption key={option._id} option={option} />
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
