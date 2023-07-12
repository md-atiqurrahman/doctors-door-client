import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero px-[63px] bg-bannerBg bg-cover bg-no-repeat bg-center min-h-screen place-items-start">
      <div className="hero-content items-start  gap-[24px] p-0 flex-col lg:flex-row-reverse">
        <img className="w-1/2 rounded-lg shadow-2xl mt-[120px]" src={chair} alt="" />
        <div className="mt-[164px]">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="pt-[14px] pb-[45px]">
            Dentists help keep your teeth healthy with regular dental
            check-ups and cleanings. They can also perform a variety of oral
            health treatments.
          </p>
          <button className="btn bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
