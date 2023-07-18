import React from "react";
import quote from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-[88px]">
        <div>
          <h5 className="text-[20px] font-bold text-secondary">Testimonial</h5>
          <h2 className="text-[36px] font-normal text-accent">What Our Patients Says</h2>
        </div>
        <figure>
            <img className="w-[192px]" src={quote} alt="" />
        </figure>
      </div>
      <div></div>
    </section>
  );
};

export default Testimonial;
