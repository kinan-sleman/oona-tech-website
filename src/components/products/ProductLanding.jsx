import { useEffect, useState } from "react";
import {
  productsLand,
  serviceImg_1,
  serviceImg_2,
  service_1,
  service_2,
  service_3,
} from "../../assets";
import ContactUs from "../elements/ContactUs";
import Header from "../shared/Header";
import ServiceCard from "./ServiceCard";

function ProductLanding({ setUsedLang, useLang, direction }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src =
      process.env.NODE_ENV === "production"
        ? "/assets/our_product_land1.jpg"
        : "/src/assets/our_product_land1.jpg";
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);
  return (
    <section className="relative">
      <ContactUs top="top-[44%]" useLang={useLang} />
      <section
        className={`h-[70vh] md:h-[45vh] landing_products_section md:pb-0 pb-12 !text-white ${
          isLoaded ? "loaded !bg-inherit !opacity-100 !filter-none" : ""
        }`}
        style={{
          backgroundImage: `url(${
            process.env.NODE_ENV === "production"
              ? "/assets/our_product_land1.jpg"
              : "/src/assets/our_product_land1.jpg"
          }`,
          // height: `calc(100vw / 4.83)`,
        }}
      >
        <Header
          light={true}
          direction={direction}
          setUsedLang={setUsedLang}
          useLang={useLang}
        />
        <div
          className={`flex${
            direction
              ? " px-16 md:px-[78px] lg:px-[166px]"
              : " px-14 md:px-[107px] lg:px-[200px]"
          } lg:pt-10 flex-col items-center justify-center h-full md:flex-row md:justify-start md:items-start`}
        >
          <div className="min-w-[50%] lg:w-[50%] flex flex-col gap-5">
            <h1 className="text-4xl font-bold">{useLang.oonaHrPulse.title}</h1>
            <p className="inline-block word-wrap text-white">
              {useLang.oonaHrPulse.description}
            </p>
          </div>
        </div>
      </section>
      <section className="my-5 relative">
        <section className="custom_container sm:custom_container 2xl:large_container flex items-center md:flex-row flex-col md:gap-0 gap-5 2xl:gap-10 justify-between ">
          {/* first column */}
          <div
            className="flex flex-col gap-2"
            // data-aos="flip-left"
            // data-aos-duration="1200"
          >
            <ServiceCard
              borderColor="border-t-[#FFE56D] border-t-2"
              img={service_1}
              title={"Employee Self Service"}
              description={useLang?.oonaHrPulse?.service1[1]}
            />
            <img src={serviceImg_2} alt="" className="md:flex hidden max-w-[406px]" />
          </div>

          {/* second column  */}
          <div
          // data-aos="flip-right" data-aos-duration="1200"
          >
            <ServiceCard
              borderColor="border-t-[#00A7E1] border-t-2"
              img={service_2}
              title={"Central Workforce Hub"}
              description={useLang?.oonaHrPulse?.service2[1]}
            />
          </div>
          {/* third column  */}
          <div
            className="flex flex-col gap-2 items-end"
            // data-aos="flip-left"
            // data-aos-duration="1200"
          >
            <img src={serviceImg_1} alt="" className="md:flex hidden" />
            <ServiceCard
              borderColor="border-t-[#FDD9CF] border-t-2"
              img={service_3}
              title={"Attendance"}
              description={useLang?.oonaHrPulse?.service3[1]}
            />
          </div>
        </section>
      </section>
      <section className="text-center custom_container sm:custom_container 2xl:large_container md:pt-6 pt-7">
        <img
          src={productsLand}
          alt=""
          className=" md:h-[200px] 2xl:w-full 2xl:h-auto"
        />
      </section>
    </section>
  );
}

export default ProductLanding;
