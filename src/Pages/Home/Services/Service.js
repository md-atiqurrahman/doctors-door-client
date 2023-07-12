import React from "react";

const Service = ({ image, title, description }) => {
  return (
    <div className="w-[1/3] h-[310px] rounded-[18px] bg-base-100 shadow-customShadow py-[40px] px-[56px]">
      <div className="flex flex-col justify-center items-center">
        <img src={image} alt="" className="w-[115px] h-[115px]" />
        <div className="card-body pt-[34px] pb-0 px-0 items-center text-center">
          <h2 className="card-title text-accent text-[20px] font-semibold">{title}</h2>
          <p className="text-black text-[16px] font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
