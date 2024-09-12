import { Link } from "react-router-dom";
import { howToGroup } from "../../assets";

function HowTo({ useLang }) {
  return (
    <section className="how_to relative text-center py-14">
      <span className="absolute top-0 left-0 w-full h-full bg-[#00A7E1] opacity-50"></span>
      <img className="hidden md:block absolute right-0 top-16" src={howToGroup} alt="" />
      <section className="relative z-10 custom_container">
        <h1 className="font-bold md:text-[62px] text-3xl text-white mb-5">
          {useLang?.ourHowTo[0]}
        </h1>
        <bdi className="inline-block text-white !font-normal md:text-lg text-base leading-[26px] md:w-[45%] w-full mx-auto text-center">
          {useLang?.ourHowTo[1]}
        </bdi>
        <div className="buttonBox">
          <button className="button11">
            <Link
              className={`text-white border border-white rounded-[30px] font-normal text-xs py-4 px-20 mt-11 block w-fit mx-auto transition-all duration-300`}
              to="#"
            >
              {useLang?.ourHowTo[2]}
            </Link>
          </button>
        </div>
      </section>
      <img className="hidden md:block absolute left-0 bottom-16" src={howToGroup} alt="" />
    </section>
  );
}

export default HowTo;
