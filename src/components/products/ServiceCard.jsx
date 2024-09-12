import React from "react";

function ServiceCard({ img, title, description, borderColor, isColorAboveIcon=false, colorAboveIcon="" }) {
  return (
    <div
      className={`service_card relative px-5 pt-4 pb-8 bg-white text-center border ${borderColor} md:w-[326px] 2xl:w-full`}
    >
      {isColorAboveIcon ? <span className={`absolute top-0 right-[40%] h-[3px] w-[100px] translate-x-[15px] bg-[${colorAboveIcon}]`}></span> : ""}
      <img src={img} alt="" className={`mx-auto mb-4`} />
      <h3 className="text-base text-[#333232] font-bold mb-2">{title}</h3>
      <p className="text-[#787878] font-normal text-sm leading-[22px]">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
