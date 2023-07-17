import React from "react";
import chair from "../../../assets/images/chair.png";
import './Banner.css';
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <section>
      <div
        className="hero bg-no-repeat bg-transparent lg:bg-bannerBg  mt-[10px]"
      >
        <div className="hero-content  gap-[24px] px-0 lg:px-[33px] py-0 flex-col lg:flex-row-reverse">
          <img
            className="w-full lg:w-1/2 rounded-lg shadow-2xl "
            src={chair}
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="pt-[14px] pb-[45px]">
              Dentists help keep your teeth healthy with regular dental
              check-ups and cleanings. They can also perform a variety of oral
              health treatments.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
