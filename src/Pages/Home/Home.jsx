import React from "react";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Banner from "./Banner";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <MakeAppointment  />
    </div>
  );
};

export default Home;
