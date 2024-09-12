import { useEffect, useState } from "react";
import {
  ourProcessLand,
  process01,
  processPath,
  serviceImg_1,
  serviceImg_2,
  service_4,
  service_5,
  service_6,
  service_7,
} from "../../assets";
import ContactUs from "../elements/ContactUs";
import Header from "../shared/Header";
import ServiceCard from "./../products/ServiceCard";

function ProcessLanding({ setUsedLang, useLang, direction }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src =
      process.env.NODE_ENV === "production"
        ? "/assets/our_process_land.jpg"
        : "/src/assets/our_process_land.jpg";
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);
  return (
    <section className="landingproducts_section relative">
      <ContactUs top="top-[44%]" useLang={useLang} />
      <section
        className={`h-[70vh] md:h-[40vh] process_landing_section md:pb-0 pb-12 !text-white ${
          isLoaded ? "loaded !bg-inherit !opacity-100 !filter-none" : ""
        }`}
        style={{
          backgroundImage: `url(${
            process.env.NODE_ENV === "production"
              ? "/assets/our_process_land.jpg"
              : "/src/assets/our_process_land.jpg"
          }`,
        }}
      >
        <Header
          light={true}
          setUsedLang={setUsedLang}
          useLang={useLang}
          direction={direction}
        />
        <div
          className={`flex${
            direction
              ? " px-16 md:px-[78px] lg:px-[166px]"
              : " px-14 md:px-[107px] lg:px-[200px]"
          } lg:pt-10 flex-col items-center justify-center h-full md:flex-row md:justify-start md:items-start`}
        >
          <div className="min-w-[50%] lg:w-[50%] flex flex-col gap-5">
            <h1 className="text-4xl font-bold">{useLang.ourProcess[0]}</h1>
            <bdi className="inline-block word-wrap text-white">
              {useLang.ourProcess[1]}
            </bdi>
          </div>
        </div>
      </section>
      <section className=" relative">
        <section className="custom_container sm:custom_container 2xl:large_container flex items-center md:flex-row flex-col gap-5 2xl:gap-10 justify-between relative !mt-0 py-3 md:py-0">
          {/* first column */}
          <div className="flex flex-col gap-12 mb-0 md:mb-[160px]">
            <img
              className={`absolute hidden lg:block top-[80px] ${
                direction
                  ? "right-[122px] "
                  : "left-[122px] transform scale-x-[-1]"
              } z-10 w-auto max-w-[1049px]`}
              src={processPath}
              alt=""
            />
            <img
              className={`hidden md:block absolute top-[10px] ${
                direction ? "right-[100px]" : " left-[80px]"
              }`}
              src={process01}
              alt=""
            />
            <div className="flex justify-center items-center mt-10 md:mt-0">
              <img className={`block md:hidden`} src={process01} alt="" />
            </div>
            <ServiceCard
              borderColor=""
              isColorAboveIcon={true}
              colorAboveIcon="#00A7E1"
              img={service_4}
              title={useLang?.processSteps?.one?.service1[0]}
              description={useLang?.processSteps?.one?.service1[1]}
            />
            <ServiceCard
              borderColor="border-[]"
              isColorAboveIcon={true}
              colorAboveIcon="#00A7E1"
              img={service_5}
              title={useLang?.processSteps?.one?.service2[0]}
              description={useLang?.processSteps?.one?.service2[1]}
            />
          </div>

          {/* second column  */}
          <div
            className="flex flex-col gap-12"
            // data-aos="flip-right" data-aos-duration="1200"
          >
            <ServiceCard
              borderColor="border-[]"
              isColorAboveIcon={true}
              colorAboveIcon="#00A7E1"
              img={service_6}
              title={useLang?.processSteps?.one?.service3[0]}
              description={useLang?.processSteps?.one?.service3[1]}
            />
            <ServiceCard
              borderColor="border-[]"
              isColorAboveIcon={true}
              colorAboveIcon="#00A7E1"
              img={service_7}
              title={useLang?.processSteps?.one?.service4[0]}
              description={useLang?.processSteps?.one?.service4[1]}
            />
          </div>
          {/* third column  */}
          <div className="flex flex-col gap-2 items-center md:items-start max-w-[390px]">
            <h1 className="text-4xl font-bold text-black">
              {useLang?.processSteps?.one?.service5[0]}
            </h1>
            <bdi className="inline-block word-wrap text-[18px] text-[#787878]">
              {useLang?.processSteps?.one?.service5[1]}
            </bdi>
          </div>
        </section>
      </section>
    </section>
  );
}

export default ProcessLanding;
