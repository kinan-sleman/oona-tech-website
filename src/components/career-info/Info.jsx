import { useState } from "react";
import { clock, jobBag, jobDetailsImg, semiArrow, share } from "../../assets";
import InfoForm from "./InfoForm";

export default function Info({ useLang, jobDetails, direction }) {
  const [buttonText, setButtonText] = useState(useLang?.career.shareBtn);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setButtonText(useLang?.career.copy);
      setTimeout(() => {
        setButtonText(useLang?.career.shareBtn);
      }, 2000);
    });
  };
  return (
    <div className="custom_container sm:custom_container 2xl:large_container !my-10">
      <img
        className={`hidden md:block absolute !top-[82px] max-w-[1132px] margin-auto ${isLoaded ? "bg-[#413024] blur-[1px]" : "bg-inherit blur-0"}`}
        src={jobDetailsImg}
        onLoad={handleImageLoad}
        alt=""
      />
      <div className="flex flex-col items-start justify-start gap-3 md:flex-row md:justify-between md:mt-[100px] pb-10 border-b border-[#C1C1C1] md:items-center">
        <div>
          <div className="flex items-start justify-start">
            <div className="flex items-center justify-center gap-2">
              <img
                className={`${direction ? "" : "rotate-180"}`}
                src={semiArrow}
                alt=""
              />
              <h2 className="text-2xl text-[#202020] font-bold mb-2">
                {jobDetails.job_title}
              </h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={jobBag} alt="" />{" "}
              <p className="text-[#787878]">{jobDetails.employment_type}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src={clock} alt="" />
              <p className="text-[#787878]">{jobDetails.date}</p>
            </div>
          </div>
        </div>
        <div className="buttonBox ">
          <button className="" onClick={handleShareClick}>
            <div
              className={`${
                buttonText === useLang?.career.copy
                  ? "text-green-500"
                  : "text-[#15c1fa]"
              } border ${
                buttonText === useLang?.career.copy
                  ? "border-green-500"
                  : "border-[#15c1fa]"
              }  rounded-[10px] text-sm font-normal md:text-base py-[0.66rem] px-8 transition-all duration-300 flex items-center gap-2 hover:!bg-white transition-all`}
            >
              <span
                className={` ${
                  buttonText === useLang?.career.copy
                    ? "text-green-500"
                    : "text-[#15c1fa]"
                } hover:!bg-white transition-all`}
              >
                {buttonText}
              </span>
              {buttonText === useLang?.career.copy ? (
                <span className="icon-checkmark"></span>
              ) : (
                <img src={share} alt="" />
              )}
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between my-4">
        <div className="md:w-[50%]">
          <h2 className="text-2xl text-[#202020] font-bold">
            {jobDetails.job_info}
          </h2>
          {jobDetails.paragraphs.map((paragraph, index) => (
            <div key={index} className="my-4">
              <h3 className="text-xl my-2 font-semibold text-black">
                {paragraph.title}
              </h3>
              {paragraph.description.includes("\n") ? (
                <ul className="list-disc ml-2 list-inside">
                  {paragraph.description.split("\n").map((item, idx) => (
                    <li className="text-[#787878]" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#787878] ml-2">{paragraph.description}</p>
              )}
            </div>
          ))}
        </div>
        <div className="lg:w-[38%]">
          <InfoForm useLang={useLang} direction={direction} />
        </div>
      </div>
    </div>
  );
}
