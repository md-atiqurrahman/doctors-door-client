import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
    const btnClass = 'w-[120px] mb-[71px]';
  return (
    <section className="flex flex-col items-center bg-appointmentBg bg-cover bg-center bg-no-repeat mt-[129px] lg:mt-[149px]">
      <div className="text-center mt-[65px] mb-[26px]">
        <h6 className="text-secondary text-[20px] font-bold">Contact Us</h6>
        <h4 className="text-white text-[36px] font-normal">
          Stay connected with us
        </h4>
      </div>
      <div className="flex flex-col">
        <div className="max-w-md">
          <input type="text" />
          <br />
          <input type="text" />
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
        <PrimaryButton btnClass={btnClass}>Submit</PrimaryButton>
    </section>
  );
};

export default Contact;
