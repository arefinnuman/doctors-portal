import React from "react";
import cavity from "../../../Assets/images/cavity.png";
import fluoride from "../../../Assets/images/fluoride.png";
import whitening from "../../../Assets/images/whitening.png";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const cardData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      name: "Opening Hours",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whitening,
    },
  ];

  return (
    <div className="mt-8">
      <h1 className="text-center text-xl font-extrabold text-secondary ">
        Our Services
      </h1>
      <h1 className="text-center text-3xl ">Services We Provides</h1>
      <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
