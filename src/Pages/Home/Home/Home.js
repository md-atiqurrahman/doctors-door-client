import React from "react";
import Banner from "../Banner/Banner";
import DetailsCards from "../DetailsCards/DetailsCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-[21px]">
      <Banner></Banner>
      <DetailsCards></DetailsCards>
      <Services></Services>
    </div>
  );
};

export default Home;
