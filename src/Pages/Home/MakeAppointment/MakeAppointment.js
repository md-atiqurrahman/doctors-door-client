import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-[70px] lg:mt-[272px] flex flex-col lg:flex-row justify-center items-center bg-appointmentBg bg-cover bg-center bg-no-repeat pr-0 lg:pr-[100px]">
      <img
        className="mt-[-100px] ml-[90px] hidden lg:block w-1/2"
        src={doctor}
        alt=""
      />
      <div className="text-white mx-[28px] lg:mx-0 my-[71px] lg:my-0">
        <h4 className="text-secondary text-[20px] font-bold">Appointment</h4>
        <h2 className="text-[36px] font-semibold mt-1">
          Make an appointment Today
        </h2>
        <p className="text-[16px] text-normal mt-1 mb-[32px] text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
