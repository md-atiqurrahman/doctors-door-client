import React from "react";

const Review = ({ review }) => {
  const { review: userReview, img, name, location } = review;
  return (
    <div className="card  bg-base-100 shadow-xl px-[29px] py-[34px]">
      <div className="text-black text-[16px] font-normal text-justify mb-[38px]">
        <p>{userReview}</p>
      </div>
      <div className="flex items-center gap-[14px]">
        <div className="avatar">
          <div className="w-[75px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h5 className="text-accent text-[20px] font-semibold">{name}</h5>
          <h6 className="text-black text-[16px] font-normal">{location}</h6>
        </div>
      </div>
    </div>
  );
};

export default Review;
