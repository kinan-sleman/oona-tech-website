import { useRef, useState } from "react";
import { helenImg, reemImg, torkImg } from "../../assets";
import MemberCard from "./MemberCard";
import {
  Navigation,
  Autoplay,
} from "swiper/modules";
// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
function TeamMembers({ direction, useLang }) {
  const members = [
    {
      id: 1,
      name: useLang?.teamMembers[1][0]?.name,
      description: useLang?.teamMembers[1][0]?.descr,
      position: useLang?.teamMembers[1][0]?.desgination,
      img: helenImg,
      color: "bg-[#FF9E9E]",
    },
    {
      id: 2,
      name: useLang?.teamMembers[1][1]?.name,
      description: useLang?.teamMembers[1][1]?.descr,
      position: useLang?.teamMembers[1][1]?.desgination,
      color: "bg-[#00A7E1]",
      img: torkImg,
    },
    {
      id: 3,
      name: useLang?.teamMembers[1][2]?.name,
      description: useLang?.teamMembers[1][2]?.descr,
      position: useLang?.teamMembers[1][2]?.desgination,
      img: reemImg,
      color: "bg-[#FFD74B]",
    },
  ];
  const [active, setActive] = useState(2);
  // const [data, setData] = useState(members);

  // useEffect(() => {
  //   let newMembers = [...members];
  //   const [activeMember] = members.splice(active - 1, 1);
  //   newMembers = newMembers.filter((item) => item.id !== active);
  //   const middlePosition = Math.floor(newMembers.length / 2);
  //   newMembers.splice(middlePosition, 0, activeMember);
  //   setData(newMembers);
  // }, [active, members]);
  const [sliderInd, setIndex] = useState(1);
  const swiperRefs = useRef();
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="pb-8 pt-4  relative md:h-[750px] h-[500px] overflow-hidden flex items-end transition-all overflow-x-hidden">
      <div className="absolute opacity-10 text-center w-full mx-auto h-full transition-all">
        <img
          src={members[sliderInd]?.img}
          alt="tork"
          className="mx-auto  bg_member z-20 transition-all"
        />
        <h3 className="text-[165px] z-10 font-bold transition-all text-[#202020] text-center pt-40 opacity-50">
          {members[sliderInd]?.name}
        </h3>
      </div>
      <section className="custom_container">
        <h3
          className={`font-bold text-[#201919] transition-all text-[22px] absolute md:top-24 top-10 ${
            direction ? "left-24" : "right-24"
          }`}
        >
          {useLang?.teamMembers[0]}
        </h3>

        <section className="md:ml-8 members_slider">
          <Swiper
            // loop={true}
            speed={1500}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            initialSlide={1}
            onSlideChange={(e) => {
              console.log(e);
              setIndex(e.realIndex);
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            onBeforeInit={(swiper) => {
              swiperRefs.current = swiper;
            }}
          >
            {members.map((item, index) => {
              // console.log(item);
              return (
                <SwiperSlide key={item.id}>
                  <MemberCard
                    activeId={sliderInd}
                    direction={direction}
                    // active={Math.floor(members.length / 2) == index}
                    active={index == sliderInd}
                    name={item.name}
                    img={item.img}
                    position={item.position}
                    description={item.description}
                    setActive={setActive}
                    color={item.color}
                    swiperRefs={swiperRefs}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* <div className="flex items-center gap-4 justify-end relative bottom-20 z-[100] right-0">
            <button
              onClick={() => swiperRefs.current?.slidePrev()}
              className="bg-white w-[37px] h-[37px] rounded-full outline-none p-2 flex items-center justify-center naviagtion_swiper"
            >
              <img src={blueArrow} alt="" className="rotate-180" />
            </button>
            <button
            
            
              className="bg-white w-[37px] h-[37px] rounded-full  outline-none p-2 flex items-center justify-center naviagtion_swiper"
            >
              <img src={blueArrow} alt="" className="" />
            </button>
          </div> */}
        </section>
      </section>
    </section>
  );
}

export default TeamMembers;
