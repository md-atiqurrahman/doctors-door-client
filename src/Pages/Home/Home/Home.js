import React from "react";
import Banner from "../Banner/Banner";
import DetailsCards from "../DetailsCards/DetailsCards";
import Services from "../Services/Services";
import Speciality from "../Speciality/Speciality";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <main className="mx-[25px] lg:mx-[21px]">
      <Banner></Banner>
      <DetailsCards></DetailsCards>
      <Services></Services>
      <Speciality></Speciality>
      <MakeAppointment></MakeAppointment>
    </main>
  );
};

export default Home;
