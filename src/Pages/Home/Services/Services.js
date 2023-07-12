import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      image: fluoride,
      title: "Fluoride Treatment",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been."
    },
    {
      id: 2,
      image: cavity,
      title: "Cavity Filling",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been."
    },
    {
      id: 3,
      image: whitening,
      title: "Teeth Whitening",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been."
    },
  ];
  return (
    <div className="mt-[131px]">
      <div className="text-center mb-[70px]">
        <h4 className="text-secondary text-[20px] font-bold">OUR SERVICES</h4>
        <h2 className="text-accent text-[36px] font-normal">
          Services We Provide
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-[34px] justify-items-center">
        {
            serviceData.map(service => <Service
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
