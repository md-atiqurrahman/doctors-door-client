import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn uppercase border-0 bg-gradient-to-r from-secondary to-primary text-white text-[14px] font-bold">
      {children}
    </button>
  );
};

export default PrimaryButton;
