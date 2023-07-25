import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="pt-[54px] lg:pt-[74px] pb-[69px] lg:pb-[45px]  bg-base-200 bg-transparent lg:bg-footerBg bg-cover bg-center bg-no-repeat absolute bottom-0 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start lg:justify-items-center ml-[36px] lg:ml-0">
        <div className="flex flex-col mb-[103px] lg:mb-0">
          <span className="text-[18px] font-bold text-[#939393] uppercase mb-[9px]">
            Services
          </span>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            Emergency Checkup
          </Link>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            Monthly Checkup
          </Link>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            Weekly Checkup
          </Link>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            Deep Checkup
          </Link>
        </div>
        <div className="flex flex-col mb-[103px] lg:mb-0">
          <span className="text-[18px] font-bold text-[#939393] uppercase mb-[9px]">
            ORAL HEALTH
          </span>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            Fluoride Treatment
          </Link>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            Cavity Filling
          </Link>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            Teath Whitening
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="text-[18px] font-bold text-[#939393] uppercase mb-[9px]">
            OUR ADDRESS
          </span>
          <Link className="text-[16px] font-normal text-accent cursor-pointer mb-[4px]">
            New York - 10101Link Hudson
          </Link>
        </div>
      </div>
      <div className="text-center mt-[103px] lg:mt-[116px]">
        <p className="text-[16px] font-normal text-black">
          Copyright © {year} Doctors Door - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
