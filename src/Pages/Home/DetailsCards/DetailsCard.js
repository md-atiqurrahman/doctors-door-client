import React from "react";

const DetailsCard = ({icon,title,description,bgColor}) => {
  return (
    <div className={`w-[1/3] rounded-[14px] h-[190px] shadow-xl  text-white ${bgColor} py-[52px] px-[25px]`}>
      <div className="flex flex-row items-start gap-[22px]">
        <div>
          <img className="w-[80px] h-[80px]" src={icon} alt="" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="card-title font-bold text-[20px]">{title}</h2>
          <p className="font-normal text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
