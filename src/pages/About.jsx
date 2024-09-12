import AboutLanding from "../components/About/AboutLanding";
import Footer from "../components/shared/Footer";
import Cards from "../components/About/Cards";
import TeamMembers from "../components/Home/TeamMembers";
import { AnimatePresence } from "framer-motion";

function About({ useLang, setUsedLang, direction }) {
  return (
    <AnimatePresence>
      <section
        className=" overflow-hidden"
        dir={`${direction ? "ltr" : "rtl"}`}
      >
        <div>
          <AboutLanding
            setUsedLang={setUsedLang}
            useLang={useLang}
            direction={direction}
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Cards useLang={useLang} direction={direction} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" id="team">
          <TeamMembers direction={direction} useLang={useLang} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Footer useLang={useLang} direction={direction} />
        </div>
      </section>
    </AnimatePresence>
  );
}

export default About;
