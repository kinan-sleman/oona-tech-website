import React from "react";
import { pricingPlanImg } from "../../assets";
import PlanForm from "./PlanForm";

export default function PlanInPromise({useLang, direction}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
      <div className="">
        <PlanForm useLang={useLang} direction={direction} />
      </div>
      <div className="h-full hidden md:block">
        <img className="h-full" src={pricingPlanImg} alt="" />
      </div>
    </div>
  );
}
