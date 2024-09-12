import {
  process05,
  process5Icon1,
  process5Icon2,
  process5Icon3,
  process5Icon4,
  process5Icon5,
  process5Icon6,
} from "../../assets";
import { formatText } from "../../utils/functions";
import { motion } from "framer-motion";

function StepFive({ useLang, direction }) {
  return (
    <section className="landingproducts_section relative z-20 my-14 py-4 pb-10 pt-3 bg-white">
      <div className="flex flex-col gap-5 items-center justify-center">
        <img className="" src={process05} alt="" />
        <div className="flex gap-5 mb-8 flex-col gap-2 items-center">
          <h1 className="text-4xl font-bold text-black">
            {formatText(useLang?.processSteps?.five?.title)}
          </h1>
          <bdi className="inline-block word-wrap text-[18px] w-[70%] text-center text-[#787878]">
            {formatText(useLang?.processSteps?.five?.description)}
          </bdi>
        </div>
      </div>
      <div className="flex flex-col gap-5 gap-y-10 md:flex-row pl-3 md:pl-[100px] justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-3 group">
            <img className="" src={process5Icon1} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {formatText(useLang?.processSteps?.five?.services[0]?.title)}
            </p>
            <bdi
              className="inline-block word-wrap text-center text-[#787878] opacity-50 group-hover:opacity-100 transition-all translate-y-1/2 group-hover:translate-y-1 group-hover:shadow-md group-hover:bg-[#fdfdfd] p-2 rounded-[15px] duration-1000"
            >
              {formatText(useLang?.processSteps?.five?.services[0]?.description)}
            </bdi>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 group">
            <img className="" src={process5Icon2} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {formatText(useLang?.processSteps?.five?.services[1]?.title)}
            </p>
            <bdi
              className="inline-block word-wrap text-center text-[#787878] opacity-50 group-hover:opacity-100 transition-all translate-y-1/2 group-hover:translate-y-1 group-hover:shadow-md group-hover:bg-[#fdfdfd] p-2 rounded-[15px] duration-1000"
            >
              {formatText(useLang?.processSteps?.five?.services[1]?.description)}
            </bdi>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-3 group">
            <img className="" src={process5Icon3} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {formatText(useLang?.processSteps?.five?.services[2]?.title)}
            </p>
            <bdi
              className="inline-block word-wrap text-center text-[#787878] opacity-50 group-hover:opacity-100 transition-all translate-y-1/2 group-hover:translate-y-1 group-hover:shadow-md group-hover:bg-[#fdfdfd] p-2 rounded-[15px] duration-1000"
            >
              {formatText(useLang?.processSteps?.five?.services[2]?.description)}
            </bdi>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 group">
            <img className="" src={process5Icon4} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {formatText(useLang?.processSteps?.five?.services[3]?.title)}
            </p>
            <bdi
              className="inline-block word-wrap text-center text-[#787878] opacity-50 group-hover:opacity-100 transition-all translate-y-1/2 group-hover:translate-y-1 group-hover:shadow-md group-hover:bg-[#fdfdfd] p-2 rounded-[15px] duration-1000"
            >
              {formatText(useLang?.processSteps?.five?.services[3]?.description)}
            </bdi>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-3 group">
            <img className="" src={process5Icon5} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {formatText(useLang?.processSteps?.five?.services[4]?.title)}
            </p>
            <bdi
              className="inline-block word-wrap text-center text-[#787878] opacity-50 group-hover:opacity-100 transition-all translate-y-1/2 group-hover:translate-y-1 group-hover:shadow-md group-hover:bg-[#fdfdfd] p-2 rounded-[15px] duration-1000"
            >
              {formatText(useLang?.processSteps?.five?.services[4]?.description)}
            </bdi>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 group">
            <img className="" src={process5Icon6} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {formatText(useLang?.processSteps?.five?.services[5]?.title)}
            </p>
            <bdi
              className="inline-block word-wrap text-center text-[#787878] opacity-50 group-hover:opacity-100 transition-all translate-y-1/2 group-hover:translate-y-1 group-hover:shadow-md group-hover:bg-[#fdfdfd] p-2 rounded-[15px] duration-1000"
            >
              {formatText(useLang?.processSteps?.five?.services[5]?.description)}
            </bdi>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepFive;
