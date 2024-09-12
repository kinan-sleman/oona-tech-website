import {
  facebookBorder,
  instagramBorder,
  linkedBorder,
  torkImg,
} from "../../assets";
import { Link } from "react-router-dom";
import Arrow from "../elements/Arrow";

function MemberCard({
  active,
  name,
  img,
  description,
  setActive,
  activeId,
  color,
  position,
  swiperRefs,
  direction,
}) {
  return (
    <>
      {active ? (
        <section
          className={`member_card md:w-[500px] w-[300px] md:h-[263px] relative  ${
            direction ? "text-left" : "text-right"
          }  py-4 md:px-6 px-4 transition-all`}
        >
          <div
            className="flex md:gap-5 gap-3 transition-all"
            dir={`${direction ? "ltr" : "rtl"}`}
          >
            <div
              className={`${color} transition-all  overflow-hidden  w-fit px-1 relative md:-top-[80px] -top-[70px]`}
            >
              <img
                src={img}
                alt="tork"
                width={143}
                height={151}
                className="md:w-[143px] md:h-[151px] w-[90px] h-[100px] transition-all "
              />
            </div>
            <div className=" transition-all">
              <h3 className="md:text-[22px] text-base md:font-bold font-medium text-[#202020]">
                {name}
              </h3>
              <span className="text-[#767676] md:text-base text-xs font-normal md:mt-0 -mt-[1px] block">
                {position}
              </span>
            </div>
          </div>
          <p
            className="text-[#918C8C] transition-all md:text-sm text-xs 2xl:text-base font-normal md:leading-[23px]  leading-5 md:-mt-[66px] -mt-[55px]"
            dir={`${direction ? "ltr" : "rtl"}`}
          >
            {description}
          </p>
          <div
            className="flex items-center gap-4 md:mt-6 mt-4 transition-all"
            dir={`${direction ? "ltr" : "rtl"}`}
          >
            <Link
              to="#"
              className="bg-[#F2F4F7] hover:outline outline-1 hover:outline-gray-400 transition-all rounded-full p-3 md:w-9 md:h-9 w-8 h-8 flex items-center justify-center"
            >
              <img src={facebookBorder} alt="" />
            </Link>
            <Link
              to="#"
              className="bg-[#F2F4F7] hover:outline hover:outline-1 hover:outline-gray-400  transition-all  rounded-full p-3 md:w-9 md:h-9 w-8 h-8 flex items-center justify-center"
            >
              <img src={instagramBorder} alt="" />
            </Link>
            <Link
              to="#"
              className="bg-[#F2F4F7] hover:outline hover:outline-1 hover:outline-gray-400  transition-all  rounded-full p-3 md:w-9 md:h-9 w-8 h-8 flex items-center justify-center"
            >
              <img src={linkedBorder} alt="" />
            </Link>
          </div>
          <div
            className={`flex items-center gap-[1px] transition-all absolute -bottom-3  ${
              direction ? "md:right-10 right-3" : "md:left-10 left-3"
            }`}
          >
            <button
              className={`right_arrow hover:opacity-80 transition-all bg-[#00A7E1] px-5 py-[6px] rounded-l-3xl ${
                activeId == 0 && "!opacity-15 cursor-not-allowed"
              }`}
              // onClick={() => activeId > 1 && setActive(+activeId - 1)}
              onClick={() => activeId > 0 && swiperRefs.current?.slidePrev()}
            >
              <Arrow color="#FFF" rotate />
            </button>
            <button
              className={`left_arrow bg-[#00A7E1] hover:opacity-80 transition-all  px-5 py-[6px] rounded-r-3xl ${
                activeId == 2 && "!opacity-15 cursor-not-allowed"
              }`}
              // onClick={() => activeId < 3 && setActive(+activeId + 1)}
              onClick={() => activeId < 3 && swiperRefs.current?.slideNext()}
            >
              <Arrow color="#FFF" />
            </button>
          </div>
        </section>
      ) : (
        <div className={`rounded-full ${color} w-fit overflow-hidden`}>
          <img src={img} alt={name} width={120} height={120} />
        </div>
      )}
    </>
  );
}

export default MemberCard;
