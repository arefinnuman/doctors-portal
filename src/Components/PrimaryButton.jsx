import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary px-6 bg-gradient-to-r from-primary to-secondary text-white">
      {children}
    </button>
  );
};

export default PrimaryButton;
