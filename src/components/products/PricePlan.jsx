import { useState } from "react";
import PriceCard from "./PriceCard";
import PlanInPromise from "./PlanInPromise";

function PricePlan({ useLang, direction }) {
  const [active, setActive] = useState(1);
  return (
    <section className="pricing_plan py-10">
      <section className=" custom_container sm:custom_container 2xl:large_container text-center">
        <h1 className="text-[40px] font-normal text-[#202020]">
          <b>{useLang?.oonaHrPulse?.pricing[0]?.split(" ")[0]}</b>{" "}
          {useLang?.oonaHrPulse?.pricing[0]?.split(" ")[1]}
        </h1>
        <p className="font-normal text-sm 2xl:text-lg text-[#787878] mx-auto mt-2 md:w-[50%] leading-[22px]">
          {useLang?.oonaHrPulse?.pricing[1]}
        </p>
        <div className="switch_price bg-[#FAFAFA] text-center flex items-center justify-center md:gap-16 gap-10 font-normal text-[#333232] text-base py-3 mt-4">
          <button
            className={` text-base relative px-2 transition-all hover:text-[#00A7E1]  ${
              active == 1 && "text-[#00A7E1] active_tab"
            }`}
            onClick={() => setActive(1)}
          >
            {useLang?.oonaHrPulse?.pricing[2]}
          </button>
          <button
            className={` text-base relative px-2 hover:text-[#00A7E1] transition-all ${
              active == 2 && "text-[#00A7E1] active_tab"
            }`}
            onClick={() => setActive(2)}
          >
            {useLang?.oonaHrPulse?.pricing[3]}
          </button>
          <button
            className={` text-base relative px-2 hover:text-[#00A7E1] transition-all ${
              active == 3 && "text-[#00A7E1] active_tab"
            }`}
            onClick={() => setActive(3)}
          >
            {useLang?.oonaHrPulse?.pricing[4]}
          </button>
        </div>
        <div
          className="cards flex md:flex-row flex-col gap-6 2xl:gap-10 mt-10"
          // data-aos="fade-up"
          // data-aos-duration="1500"
        >
          {active == 1 ? (
            <>
              <PlanInPromise useLang={useLang} direction={direction} />
            </>
          ) : active == 2 ? (
            <>
              <PriceCard />

              <PriceCard />
            </>
          ) : (
            <>
              <PriceCard active />

              <PriceCard />
            </>
          )}
        </div>
      </section>
    </section>
  );
}

export default PricePlan;
