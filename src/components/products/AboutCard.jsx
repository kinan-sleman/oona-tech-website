import { borderLeft } from "../../assets";

function AboutCard({
  title,
  description,
  borderColor,
  isColorAboveIcon = false,
  colorAboveIcon = "",
  direction,
}) {
  return (
    <div
      className={`service_card relative px-5 pt-4 pb-8 bg-white ${
        direction ? "text-left" : "text-right"
      } border ${borderColor} md:w-[326px] 2xl:w-full`}
    >
      <img
        className={`absolute top-4 ${
          direction ? "left-[-1px]" : "right-[-1px]"
        } `}
        src={borderLeft}
        alt=""
      />
      {isColorAboveIcon ? (
        <span
          className={`absolute top-0 right-[40%] h-[3px] w-[70px] bg-[${colorAboveIcon}]`}
        ></span>
      ) : (
        ""
      )}
      <h3 className="text-base text-[#333232] font-bold mb-2">{title}</h3>
      <p className="text-[#787878] font-normal text-sm leading-[22px]">
        {description}
      </p>
    </div>
  );
}

export default AboutCard;
