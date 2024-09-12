import { process06, processSixImg } from "../../assets";
import { formatText } from "../../utils/functions";

function StepSix({ useLang, direction }) {
  return (
    <section className="landingproducts_section relative z-20 bg-white mt-[11rem] py-1">
      <div className="flex flex-col gap-3 items-start px-3 md:px-[100px] py-2">
        <div className={`flex justify-end w-full hidden md:flex`}>
          <img src={process06} className="" alt="" />
        </div>

        <div className="flex justify-center items-center md:mt-0 block md:hidden w-full">
          <img src={process06} alt="" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-center w-full md:items-center gap-24">
          <img src={processSixImg} alt="" />
          <div className="flex gap-5 mb-8 flex-col gap-2 items-start">
            <h1 className="text-4xl font-bold text-black">
              {formatText(useLang?.processSteps?.six?.title)}
            </h1>
            <bdi className="inline-block word-wrap text-[18px] w-[60%] text-[#787878]">
              {formatText(useLang?.processSteps?.six?.description)}
            </bdi>
            <div className="mt-6 w-full flex justify-start">
              <div className="buttonBox self-center relative z-10">
                <button className="button11">
                  <a
                    className={`text-[#00A7E1] border transition-all duration-300 border-[#00A7E1] rounded-[30px] font-normal text-xs 2xl:text-lg py-3 px-16 md:mt-5 mt-8`}
                    href="#sayHi"
                  >
                    {useLang?.homeTitle[3]}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepSix;
