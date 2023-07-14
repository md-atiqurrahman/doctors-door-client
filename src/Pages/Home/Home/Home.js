import React from "react";
import Banner from "../Banner/Banner";
import DetailsCards from "../DetailsCards/DetailsCards";
import Services from "../Services/Services";
import Speciality from "../Speciality/Speciality";

const Home = () => {
  return (
    <div className="mx-[25px] lg:mx-[21px]">
      <Banner></Banner>
      <DetailsCards></DetailsCards>
      <Services></Services>
      <Speciality></Speciality>
    </div>
  );
};

export default Home;
