import { useState } from "react";
import { motion } from "framer-motion"; // استيراد motion من framer-motion
import {
  process04,
  process4Bg,
  stepFourIcon1,
  stepFourIcon2,
  stepFourIcon3,
  stepFourIcon4,
} from "../../assets";

function StepFour({ useLang, direction }) {
  // تتبع الحالة للصورة النشطة
  const [activeIndex, setActiveIndex] = useState(null);

  // دالة لتحديث حالة الصورة والنص عند الضغط
  const handleImageClick = (index) => {
    setActiveIndex(index); // تعيين الصورة النشطة الجديدة
  };

  return (
    <section className="landingproducts_section relative z-20 bg-[#00a7e1] mt-[9rem] py-10">
      <img className="absolute bottom-0 left-0" src={process4Bg} alt="" />
      <div
        className={`flex flex-col gap-3 items-start ${
          direction ? "pl-3 md:pl-[100px]" : "pr-3 md:pr-[100px]"
        } py-2`}
      >
        <div className={`${direction ? "ml-10" : "mr-10"}`}>
          <img src={process04} alt="" />
        </div>
        <div className="flex gap-5 mb-8 flex-col gap-2 items-start">
          <h1 className="text-4xl font-bold text-white">
            {useLang?.processSteps?.four?.title}
          </h1>
          <bdi className="inline-block word-wrap text-[18px] w-[60%] text-[#EEEEEE]">
            {useLang?.processSteps?.four?.description}
          </bdi>
        </div>
        <div className="hidden lg:flex justify-center gap-10 items-center h-[300px] py-[25px] relative">
          <img src={stepFourIcon1} alt="" className={"absolute"} />
          {useLang?.processSteps?.four?.services?.map((service, index) => {
            const isActive = index <= activeIndex;

            return (
              <motion.div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? 1.1 : 1,
                  transition: { duration: 0.5 },
                }}
              >
                <img
                  src={stepFourIcon2}
                  alt=""
                  className={`absolute ${
                    index % 2 === 0
                      ? "top-[30px] left-[50%]"
                      : "top-[-100px] left-[50%]"
                  }`}
                />
                <motion.p
                  className={`text-white text-[18px] ${
                    isActive ? "font-bold" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  {service}
                </motion.p>
                <motion.img
                  src={isActive ? stepFourIcon4 : stepFourIcon3}
                  alt=""
                  className={`absolute cursor-pointer ${
                    isActive ? "size-[50px]" : ""
                  } ${
                    index === 0 && !isActive
                      ? `top-[105px] ${direction ? "left-[15%]" : "left-[27%]"}`
                      : index === 0 && isActive
                      ? `top-[90px] ${direction ? "left-[13%]" : "left-[22%]"}`
                      : index === 2 && !isActive
                      ? `top-[105px] ${direction ? "left-[13%]" : "left-[8%]"}`
                      : index === 2 && isActive
                      ? `top-[90px] ${direction ? "left-[8%]" : "left-[2%]"}`
                      : index === 4 && !isActive
                      ? `top-[105px] ${direction ? "left-[30%]" : "left-[34%]"}`
                      : index === 4 && isActive
                      ? `top-[90px] ${direction ? "left-[28%]" : "left-[31%]"}`
                      : index === 6 && !isActive
                      ? `top-[105px] left-[30%]`
                      : index === 6 && isActive
                      ? `top-[90px] ${direction ? "left-[28%]" : "left-[27%]"}`
                      : index === 1 && !isActive
                      ? `top-[-115px] ${
                          direction ? "left-[32%]" : "left-[33%]"
                        }`
                      : index === 1 && isActive
                      ? `top-[-113px] ${
                          direction ? "left-[32%]" : "left-[30%]"
                        }`
                      : index === 3 && !isActive
                      ? `top-[-115px] ${
                          direction ? "left-[15%]" : "left-[10%]"
                        }`
                      : index === 3 && isActive
                      ? `${
                          direction
                            ? "top-[-113px] left-[6%]"
                            : "top-[-113px] left-[5%]"
                        }`
                      : index === 5 && isActive
                      ? `${
                          direction
                            ? "top-[-113px] left-[36%]"
                            : "top-[-113px] left-[33%]"
                        }`
                      : index === 5 && !isActive
                      ? `${
                          direction
                            ? "top-[-115px] left-[37%]"
                            : "top-[-115px] left-[35%]"
                        }`
                      : "top-[-115px] left-[10px]"
                  }`}
                  onClick={() => handleImageClick(index)}
                  whileTap={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StepFour;
