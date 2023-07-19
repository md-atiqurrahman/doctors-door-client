import React from "react";
import quote from "../../../assets/icons/quote.svg";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person1,
      name: "Winson Herry",
      location: "California",
    },
    {
      _id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person2,
      name: "Charlotte",
      location: "Sydney",
    },
    {
      _id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person3,
      name: "Hui Ying",
      location: "Beijing",
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between mb-[88px]">
        <div>
          <h5 className="text-[20px] font-bold text-secondary">Testimonial</h5>
          <h2 className="text-[36px] font-normal text-accent">
            What Our Patients Says
          </h2>
        </div>
        <figure>
          <img className="w-[192px]" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[45px] lg:gap-[57px]">
        {reviews.map((review) => (
          <Review
          key={review._id}
          review={review}
          ></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
