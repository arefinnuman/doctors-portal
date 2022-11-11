import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card p-6 card-side ${bgClass} text-white shadow-xl`}>
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body mt-2">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
