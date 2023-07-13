import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import DetailsCard from "./DetailsCard";

const DetailsCards = () => {
  const cardData = [
    {
      id: 1,
      icon: clock,
      title: "Opening Hours",
      description: "From 10:30 am to 9 pm",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      icon: marker,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgColor: "bg-accent",
    },
    {
      id: 3,
      icon: phone,
      title: "Contact us now",
      description: "+000 123 456789",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="mt-[80px] lg:mt-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {cardData.map((card) => (
          <DetailsCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
          ></DetailsCard>
        ))}
      </div>
    </div>
  );
};

export default DetailsCards;
