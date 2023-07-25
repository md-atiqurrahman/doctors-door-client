import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
  const btnClass = "w-[120px]";
  return (
    <section className="flex flex-col items-center bg-appointmentBg bg-cover bg-center bg-no-repeat mt-[129px] lg:mt-[149px] pt-[65px] pb-[71px]">
      <div className="text-center  mb-[26px]">
        <h6 className="text-secondary text-[20px] font-bold">Contact Us</h6>
        <h4 className="text-white text-[36px] font-normal">
          Stay connected with us
        </h4>
      </div>
      <div className="flex flex-col w-[90%] lg:w-[33.4%]">
        <input
          className="mb-[19px] w-full h-[48px] py-[15px] px-[19px] text-[16px] font-normal placeholder-[#3a425666] text-black bg-white rounded-lg outline-none "
          type="email"
          placeholder="Email Address"
        />
        <input
          className="mb-[19px] w-full h-[48px] py-[15px] px-[19px] text-[16px] font-normal placeholder-[#3a425666] text-black bg-white rounded-lg outline-none "
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="mb-[35px] w-full py-[15px] px-[19px] text-[16px] font-normal placeholder-[#3a425666] text-black bg-white rounded-lg outline-none"
          name="mailMessage"
          id="mailMessage"
          placeholder="Your message"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <PrimaryButton btnClass={btnClass}>Submit</PrimaryButton>
    </section>
  );
};

export default Contact;
