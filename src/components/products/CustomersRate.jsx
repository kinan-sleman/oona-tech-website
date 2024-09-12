import React from "react";
import { star } from "../../assets";

function CustomersRate() {
  return (
    <section className="text-center md:px-52 px-7">
      <h3 className="text-lg 2xl:text-2xl text-[#202020] font-bold leading-[22px]">
        Esther Howard
      </h3>
      <span className="font-normal text-[#959595] text-base 2xl:text-lg leading-[22px]">
        Marketing Coordinator
      </span>
      <p className="text-sm 2xl:text-base text-[#202020] font-normal leading-[22px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
      <div className="flex items-center gap-2 justify-center mt-6 mb-5">
        <img src={star} alt="" className="!w-[23px] !h-[23px]" />
        <img src={star} alt="" className="!w-[23px] !h-[23px]" />
        <img src={star} alt="" className="!w-[23px] !h-[23px]" />
        <img src={star} alt="" className="!w-[23px] !h-[23px]" />
        <img src={star} alt="" className="!w-[23px] !h-[23px]" />
      </div>
    </section>
  );
}

export default CustomersRate;
