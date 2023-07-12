import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import Card from "./Card";

const DetailsCard = () => {
  const detailsCard = [
    {
      id: 1,
      image: clock,
      title: "Opening Hours",
      subTitle: "From 10:30 am to 9 pm",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      image: marker,
      title: "Visit our location",
      subTitle: "Brooklyn, NY 10036, United States",
      bgColor: "bg-accent",
    },
    {
      id: 3,
      image: phone,
      title: "Contact us now",
      subTitle: "+000 123 456789",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="mt-[64px]">
      <div className="grid grid-cols-3 gap-[24px]">
        {detailsCard.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            subTitle={card.subTitle}
            bgColor={card.bgColor}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
