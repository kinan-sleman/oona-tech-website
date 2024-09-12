import {
  process03,
  process3Icon1,
  process3Icon2,
  process3Icon3,
  process3Icon4,
} from "../../assets";

function StepThree({ useLang }) {
  return (
    <section className="landingproducts_section relative pt-5 z-20 bg-white">
      <div className="flex flex-col gap-5 items-center justify-center">
        <img className="" src={process03} alt="" />
        <div className="flex gap-5 mb-8 flex-col gap-2 items-center">
          <h1 className="text-4xl font-bold text-black">
            {useLang?.processSteps?.three?.title}
          </h1>
          <bdi className="inline-block word-wrap text-[18px] w-[60%] text-center text-[#787878]">
            {useLang?.processSteps?.three?.description}
          </bdi>
        </div>
        <div className="flex flex-col my-4 md:flex-row gap-5 my-2 mx-3 md:mx-[100px]">
          <div className="service_card relative px-5 pt-4 pb-8 bg-white text-center border flex items-center justify-center flex-col gap-4 hover:shadow-lg hover:scale-105 transition-all duration-500">
            <img className="" src={process3Icon1} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {useLang?.processSteps?.three?.services[0].title}
            </p>
            <bdi className="inline-block word-wrap text-center text-[#787878]">
              <p className="text-[18px] text-[#82D0EB]">
                {useLang?.processSteps?.three?.services[0].subtitle}
              </p>
              {useLang?.processSteps?.three?.services[0].description}
            </bdi>
          </div>
          <div className="service_card relative px-5 pt-4 pb-8 bg-white text-center border flex items-center justify-center flex-col gap-4 hover:shadow-lg hover:scale-105 transition-all duration-500">
            <img className="" src={process3Icon2} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {useLang?.processSteps?.three?.services[1].title}
            </p>
            <bdi className="inline-block word-wrap text-center text-[#787878]">
              <p className="text-[18px] text-[#82D0EB]">
                {useLang?.processSteps?.three?.services[1].subtitle}
              </p>
              {useLang?.processSteps?.three?.services[1].description}
            </bdi>
          </div>
          <div className="service_card relative px-5 pt-4 pb-8 bg-white text-center border flex items-center justify-center flex-col gap-4 hover:shadow-lg hover:scale-105 transition-all duration-500">
            <img className="" src={process3Icon3} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {useLang?.processSteps?.three?.services[2].title}
            </p>
            <bdi className="inline-block word-wrap text-center text-[#787878]">
              <p className="text-[18px] text-[#82D0EB]">
                {useLang?.processSteps?.three?.services[2].subtitle}
              </p>
              {useLang?.processSteps?.three?.services[2].description}
            </bdi>
          </div>
          <div className="service_card relative px-5 pt-4 pb-8 bg-white text-center border flex items-center justify-center flex-col gap-4 hover:shadow-lg hover:scale-105 transition-all duration-500">
            <img className="" src={process3Icon4} alt="" />
            <p className="text-[18px] font-[700] text-black">
              {useLang?.processSteps?.three?.services[3].title}
            </p>
            <bdi className="inline-block word-wrap text-center text-[#787878]">
              <p className="text-[18px] text-[#82D0EB]">
                {useLang?.processSteps?.three?.services[3].subtitle}
              </p>
              {useLang?.processSteps?.three?.services[3].description}
            </bdi>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepThree;
