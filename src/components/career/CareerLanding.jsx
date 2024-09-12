import React, { useEffect, useState } from "react";
import Header from "../shared/Header";

function CareerLanding({ setUsedLang, direction, useLang }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src =
      process.env.NODE_ENV === "production"
        ? "/assets/career_landing_bg.jpg"
        : "/src/assets/career_landing_bg.jpg";
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);
  return useLang?.career?.availables.length > 0 ? (
    <section
      className={`h-[70vh] md:h-[50vh] available_career_section relative mb-6 ${
        isLoaded ? "loaded !bg-inherit !opacity-100 !filter-none" : ""
      }`}
      style={{
        backgroundImage: `url(${
          process.env.NODE_ENV === "production"
            ? "/assets/career_landing_bg.jpg"
            : "/src/assets/career_landing_bg.jpg"
        }`,
      }}
    >
      <Header
        light={true}
        setUsedLang={setUsedLang}
        direction={direction}
        useLang={useLang}
      />
      <section className="custom_container py-7">
        <div className="min-w-[50%] lg:w-[50%] lg:px-[50px] flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-[#00A7E1]">{`${useLang.career?.availables.length} ${useLang.career?.availableTitle}`}</span>{" "}
            {useLang.career?.availableSubTitle}
          </h1>
          <bdi className="inline-block word-wrap text-white">
            {useLang.career?.availableDescription}
          </bdi>
        </div>
      </section>
    </section>
  ) : (
    <section
      className={`h-[70vh] md:h-[50vh] no_career_section relative mb-6 ${
        isLoaded ? "loaded !bg-inherit !opacity-100 !filter-none" : ""
      }`}
      style={{
        backgroundImage: `url(${
          process.env.NODE_ENV === "production"
            ? "/assets/career_landing_bg.jpg"
            : "/src/assets/career_landing_bg.jpg"
        }`,
      }}
    >
      <Header
        light={true}
        setUsedLang={setUsedLang}
        direction={direction}
        useLang={useLang}
      />
      <section className="custom_container py-7">
        <div className="min-w-[50%] lg:w-[50%] lg:px-[50px] flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{useLang.career?.title}</h1>
          <bdi className="inline-block word-wrap text-white">
            {useLang.career?.description}
          </bdi>
        </div>
      </section>
    </section>
  );
}

export default CareerLanding;
