import React from "react";
import doctor from "../../../assets/images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className="mt-[56px] lg:mt-[154px] flex flex-col lg:flex-row justify-center items-center  gap-[37px] lg:gap-[102px] pl-0 lg:pl-[196px] pr-0 lg:pr-[140px] bg-appointmentBg">
      <div>
        <img
          className="max-w-[322px] lg:max-w-sm rounded-[8px]"
          src={doctor}
          alt=""
        />
      </div>
      <div className="text-white">
        <h4 className="text-secondary">Appointment</h4>
        <h2 className=" text-[36px] font-semibold">
          Make an appointment Today
        </h2>
        <p className=" text-[16px] text-normal mt-2 text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn mt-[37px] bg-gradient-to-r from-secondary to-primary text-[14px] font-bold">
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
