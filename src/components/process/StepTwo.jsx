import { useState } from "react"; // استيراد useState من React
import { motion } from "framer-motion"; // استيراد Framer Motion
import Process2Icon1 from "./../Icons/process2Icon1";
import Process2Icon2 from "./../Icons/process2Icon2";
import Process2Icon3 from "./../Icons/process2Icon3";
import Process2Icon4 from "./../Icons/process2Icon4";
import Process2Icon5 from "./../Icons/process2Icon5";
import { arrow1, arrow2, ellipse1, ellipse2, process02 } from "../../assets";

function StepTwo({ useLang, direction }) {
  const [activeIndices, setActiveIndices] = useState([]); // تغيير الـ state لتكون مصفوفة
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0); // تتبع الخدمة المحددة

  const handleClick = (index) => {
    const updatedIndices = Array.from({ length: index + 1 }, (_, i) => i);
    setActiveIndices(updatedIndices);
    setCurrentServiceIndex(index); // تحديث الخدمة المحددة
  };

  const serviceTitles = useLang?.processSteps?.two?.services;
  const serviceDescriptions = useLang?.processSteps?.two?.serviceDescriptions;

  return (
    <div className="process_step_two">
      <section className="process_step_two landingproducts_section relative z-20 pb-32 bg-gray-100 pt-3">
        <div className="flex flex-col gap-5 items-center justify-center">
          <img className="" src={process02} alt="" />
          <div className="flex gap-5 mb-8 flex-col gap-2 items-center">
            <motion.h1
              key={serviceTitles[currentServiceIndex]} // تحديد النص الجديد كـ key لضمان الانتقال السلس
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-black"
            >
              {serviceTitles[currentServiceIndex]}
            </motion.h1>
            <motion.bdi
              key={serviceDescriptions[currentServiceIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block word-wrap text-[18px] w-[70%] text-center text-[#787878]"
            >
              {serviceDescriptions[currentServiceIndex]}
            </motion.bdi>
          </div>
          <div className="flex flex-col my-8 md:flex-row gap-5 my-2">
            {/* الخدمات هنا */}
            {serviceTitles.map((service, index) => (
              <div key={index} className="flex flex-col gap-10 justify-center md:flex-row items-center">
                <div
                  className={`relative flex items-center justify-center flex-col group ${
                    activeIndices.includes(index) ? "cursor-pointer" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <img
                    className={`transition-opacity duration-300 ease-in-out ${
                      activeIndices.includes(index) ? "opacity-0" : "opacity-100"
                    }`}
                    src={ellipse2}
                    alt=""
                  />
                  <img
                    className={`absolute transition-opacity duration-300 ease-in-out ${
                      activeIndices.includes(index) ? "opacity-100" : "opacity-0"
                    }`}
                    src={ellipse1}
                    alt=""
                  />
                  <div className="absolute">
                    {index === 0 && <Process2Icon1 activeIndex={activeIndices} />}
                    {index === 1 && <Process2Icon2 activeIndex={activeIndices} />}
                    {index === 2 && <Process2Icon3 activeIndex={activeIndices} />}
                    {index === 3 && <Process2Icon4 activeIndex={activeIndices} />}
                    {index === 4 && <Process2Icon5 activeIndex={activeIndices} />}
                  </div>
                  <h1 className="text-base absolute bottom-[-30px] font-semibold text-black">
                    {service}
                  </h1>
                </div>

                {index < serviceTitles.length - 1 && (
                  <div
                    className={`relative flex items-center justify-center flex-col group ${
                      activeIndices.includes(index) ? "cursor-pointer" : ""
                    }`}
                    onClick={() => handleClick(index + 1)}
                  >
                    <img
                      className={`${
                        direction ? "" : "!rotate-180"
                      } rotate-90 md:rotate-0 ${
                        activeIndices.includes(index) ? "opacity-0" : "opacity-100"
                      } transition-opacity duration-300`}
                      src={arrow2}
                      alt=""
                    />
                    <img
                      className={`absolute ${
                        direction ? "" : "!rotate-180"
                      } rotate-90 md:rotate-0 ${
                        activeIndices.includes(index) ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-300`}
                      src={arrow1}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepTwo;
