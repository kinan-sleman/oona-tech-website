import React, { useEffect, useState } from "react";
import Header from "../shared/Header";

export default function Landing({ setUsedLang, useLang, direction }) {
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

  return (
    <section className="relative">
      <section
        className={`h-[50vh] career_info_section md:pb-0 pb-12 !text-white ${
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
          useLang={useLang}
          direction={direction}
        />

        <section className="block md:hidden custom_container py-7">
          <div className="min-w-[50%] lg:w-[50%] lg:px-[50px] flex flex-col gap-5">
            <h1 className="text-4xl font-bold">{useLang.career?.title}</h1>
            <bdi className="inline-block word-wrap text-white">
              {useLang.career?.description}
            </bdi>
          </div>
        </section>
      </section>
    </section>
  );
}
