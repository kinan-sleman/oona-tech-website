import ProcessLanding from "../components/process/ProcessLanding";
import Footer from "../components/shared/Footer";
import StepTwo from "../components/process/StepTwo";
import StepThree from "../components/process/StepThree";
import StepFour from "../components/process/StepFour";
import StepFive from "../components/process/StepFive";
import StepSix from "../components/process/StepSix";
import { AnimatePresence } from "framer-motion";

function Process({ useLang, setUsedLang, direction }) {
  return (
    <AnimatePresence>
        <section
          className=" overflow-hidden"
          dir={`${direction ? "ltr" : "rtl"}`}
        >
          <div>
            <ProcessLanding
              setUsedLang={setUsedLang}
              direction={direction}
              useLang={useLang}
            />
          </div>
          <div>
            <StepTwo direction={direction} useLang={useLang} />
          </div>
          <div className="mt-20">
            <StepThree useLang={useLang} />
          </div>
          <div className="mt-10">
            <StepFour direction={direction} useLang={useLang} />
          </div>
          <div>
            <StepFive direction={direction} useLang={useLang} />
          </div>
          <div>
            <StepSix direction={direction} useLang={useLang} />
          </div>
          <Footer direction={direction} useLang={useLang} />
        </section>
    </AnimatePresence>
  );
}

export default Process;
