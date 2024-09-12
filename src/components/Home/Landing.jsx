import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // استيراد Framer Motion
import ContactUs from "../elements/ContactUs";
import Header from "../shared/Header";

function Landing({ setUsedLang, useLang, direction }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      process.env.NODE_ENV === "production"
        ? "/assets/mainBG.jpg"
        : "/src/assets/mainBG.jpg";
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <section
      className={`h-[70vh] mb:h-fit landing_section md:h-screen md:pb-0 pb-12 flex flex-col justify-center items-center ${
        isLoaded ? "loaded !bg-inherit !opacity-100 !filter-none" : ""
      }`}
      style={{
        backgroundImage: `url(${
          process.env.NODE_ENV === "production"
            ? "/assets/mainBG.jpg"
            : "/src/assets/mainBG.jpg"
        })`,
      }}
    >
      <ContactUs light top="top-[70%]" useLang={useLang} />
      <Header
        setUsedLang={setUsedLang}
        useLang={useLang}
        direction={direction}
      />

      <section className="custom_container text-center custimize_land h-full flex flex-col justify-center items-center">
        <div className="text-center flex flex-col items-center justify-center mb-9 mt-10 self-center relative z-10">
          <motion.h1
            className="font-bold md:text-[57px] text-[25px] 2xl:text-[64px] text-white md:-mb-4"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {useLang?.homeTitle[0]}
          </motion.h1>

          <motion.h1
            className="font-bold md:text-[57px] text-[25px] 2xl:text-[64px] text-white md:mb-0 mb-4"
            initial={{ x: -2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {useLang?.homeTitle[1]}
          </motion.h1>

          <motion.p
            className="text-base 2xl:text-lg text-white font-normal leading-6 md:w-[50%]"
            initial={{ x: 2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {useLang?.homeTitle[2]}
          </motion.p>
        </div>

        <motion.div
          className="buttonBox self-center relative z-10"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <button className="button11">
            <a
              className={`text-white border transition-all duration-300 border-white rounded-[30px] font-normal text-xs 2xl:text-lg py-3 px-16 md:mt-5 mt-8`}
              href="#sayHi"
            >
              {useLang?.homeTitle[3]}
            </a>
          </button>
        </motion.div>
      </section>
    </section>
  );
}

export default Landing;
