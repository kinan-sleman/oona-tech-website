import { Swiper, SwiperSlide } from "swiper/react";
import { blueArrow, ourProjectImg } from "../../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
// import required modules
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Autoplay,
  EffectFlip,
} from "swiper/modules";

import { useRef } from "react";
import ProductSlideDetails from "./ProductSlideDetails";
import SliderArrow from "../elements/SliderArrow";
function OurProjects({ direction, useLang }) {
  const swiperRef = useRef();
  const productsData = [
    {
      id: 1,
      title: useLang?.productSlider[0]?.title,
      description: useLang?.productSlider[0]?.descriptions,
      buttonText: useLang?.productSlider[0]?.buttonText,
    },
    {
      id: 2,
      title: useLang?.productSlider[0]?.title,
      description: useLang?.productSlider[0]?.descriptions,
      buttonText: useLang?.productSlider[0]?.buttonText,
    },
    // {
    //   id: 3,
    //   title: " Oona - HR Pulse",
    //   description:
    //     " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation    ullamco laboris nisi ut aliquip ex ea commodo consequat.    Duis aute irure dolor in reprehenderit in voluptate velit   esse cillum dolore eu fugiat nulla pariatur. Excepteur   sint occaecat cupidatat non proident, sunt in culpa qui   officia deserunt mollit anim id est laborum.",
    //   buttonText: "View case study",
    // },
  ];
  const productImages = [
    {
      id: 1,
      img: ourProjectImg,
    },
    {
      id: 2,
      img: ourProjectImg,
    },
  ];
  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <section className="our_projects md:pt-16 pt-10 md:pb-10 pb-4  relative">
      <section className="custom_container sm:custom_container 2xl:large_container">
        {/* <div data-aos="fade-right"> */}
        <div className="text-center 2xl:mb-9">
          <h2 className="text-[#202020] text-[22px] 2xl:text-[28px] font-bold">
            {useLang?.ourProducts[0]}
          </h2>
          <bdi className="inline-block text-base 2xl:text-lg font-normal text-[#767676] md:w-[70%] 2xl:w-[86%] leading-6 mx-auto">
            {useLang?.ourProducts[1]}
          </bdi>
        </div>
        <div data-aos="fade-up">
          <div className="flex items-center gap-8 justify-between 2xl:justify-center 2xl:gap-0 py-0 project_slider relative">
            <div className="w-[50%] md:block hidden">
              {/* <img src={ourProjectImg} alt="" className="" /> */}
              <Swiper
                // autoplay={true}
                onBeforeInit={(swiper) => {
                  ref1.current = swiper;
                }}
                speed={1500}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                effect={"flip"}
                // grabCursor={true}
                // pagination={true}
                // navigation={true}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {productImages.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <img src={item.img} alt="" className="2xl:w-[90%]" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div
              className={`swiper md:w-[50%] w-full relative ${
                direction ? "" : "arabic_side"
              }`}
            >
              <Swiper
                // autoplay={true}
                // navigation={true}
                // speed={3000}
                speed={1500}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  dynamicBullets: true,
                }}
                className="mySwiper"
                keyboard={true}
                modules={[
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                  Autoplay,
                ]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {productsData.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <ProductSlideDetails
                        direction={direction}
                        // useLang={useLang}
                        title={item.title}
                        description={item.description}
                        buttonText={item.buttonText}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div
                className={`flex items-center gap-4  ${
                  direction
                    ? "right-2 justify-end ml-auto"
                    : " left-0 justify-start mr-auto"
                }  relative md:bottom-14 2xl:bottom-14 bottom-12 z-[100] w-fit  `}
              >
                <button
                  onClick={() => {
                    swiperRef.current?.slidePrev();
                    ref1.current?.slidePrev();
                  }}
                  className="bg-white hover:bg-[#00a9e118] transition-all w-[37px] h-[37px] 2xl:w-[43px] 2xl:h-[43px] rounded-full outline-none p-2 flex items-center justify-center naviagtion_swiper"
                >
                  <img
                    src={blueArrow}
                    alt=""
                    className="rotate-180 2xl:w-[20px]"
                  />
                </button>
                <button
                  onClick={() => {
                    swiperRef.current?.slideNext();
                    ref1.current?.slideNext();
                  }}
                  className="bg-white hover:bg-[#00a9e118] transition-all w-[37px] h-[37px] 2xl:w-[43px] 2xl:h-[43px] rounded-full  outline-none p-2 flex items-center justify-center naviagtion_swiper"
                >
                  <img src={blueArrow} alt="" className="  2xl:w-[20px]" />
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </section>
  );
}

export default OurProjects;
