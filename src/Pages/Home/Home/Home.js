import React from "react";
import Banner from "../Banner/Banner";
import DetailsCards from "../DetailsCards/DetailsCards";
import Services from "../Services/Services";
import Speciality from "../Speciality/Speciality";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <div className="mx-[25px] lg:mx-[21px]">
        <Banner></Banner>
        <DetailsCards></DetailsCards>
        <Services></Services>
        <Speciality></Speciality>
      </div>
      <MakeAppointment></MakeAppointment>
      <div className="mt-[84px] mx-[27px] lg:mx-[51px]">
        <Testimonial></Testimonial>
      </div>
    </main>
  );
};

export default Home;
