import React from "react";
import bgAppointment from "../../Assets/images/appointment.png";
import doctor from "../../Assets/images/doctor.png";
import PrimaryButton from "../../Components/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32" style={{ background: `url(${bgAppointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="hidden lg:block  rounded-lg -mt-32 lg:w-1/2 shadow-2xl"
            alt=""
          />
          <div className="text-white">
            <p className="text-lg font-bold text-secondary  ">Appointment</p>
            <h1 className="text-4xl font-bold">Make An Appointment Today!</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Start</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
