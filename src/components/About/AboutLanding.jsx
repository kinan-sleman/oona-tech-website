import { useEffect, useState } from "react";
import { aboutImg } from "../../assets";
import ContactUs from "../elements/ContactUs";
import Header from "../shared/Header";
import { formatText } from "../../utils/functions"

export default function AboutLanding({ setUsedLang, useLang, direction }) {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src =
      process.env.NODE_ENV === "production"
        ? "/assets/about_us_bg.jpg"
        : "/src/assets/about_us_bg.jpg";
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <section className="relative">
      <ContactUs top="top-[44%]" useLang={useLang} />
      <section
        className={`h-[70vh] md:h-[50vh] landing_about_section md:pb-0 pb-12 !text-white ${
          isLoaded ? "loaded !bg-inherit !opacity-100 !filter-none" : ""
        }`}
        style={{
          backgroundImage: `url(${
            process.env.NODE_ENV === "production"
              ? "/assets/about_us_bg.jpg"
              : "/src/assets/about_us_bg.jpg"
          }`,
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
          } lg:pt-5 flex-col items-center justify-center h-full md:flex-row md:justify-start md:items-start`}
        >
          <div className="min-w-[50%] lg:w-[50%] flex flex-col gap-5">
            <h1 className="text-4xl font-bold">{useLang?.about?.title}</h1>
            <p className="inline-block word-wrap text-white">
              {formatText(useLang?.about?.description)}
            </p>
          </div>
        </div>
      </section>
      <section className="!mt-5 md:h-[100vh] custom_container sm:custom_container 2xl:large_container flex flex-col md:flex-row justify-center items-center gap-7">
        <div className="!mt-4 md:!mt-[160px] md:w-[50%] flex items-center justify-center self-center">
          <img src={aboutImg} alt="" />
        </div>
        <div className="md:w-[50%] flex items-center justify-center self-start">
          <div className="rounded-[15px] shadow-lg px-3 py-10 bg-white">
            {formatText(useLang?.about?.paragraph)}
          </div>
        </div>
      </section>
    </section>
  );
}
