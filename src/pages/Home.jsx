import HowTo from "../components/Home/HowTo";
import Landing from "../components/Home/Landing";
import OurProjects from "../components/Home/OurProjects";
import SayHi from "../components/Home/SayHi";
import TeamMembers from "../components/Home/TeamMembers";
import Footer from "../components/shared/Footer";
import { AnimatePresence } from "framer-motion";
function Home({ useLang, setUsedLang, direction }) {
  return (
    <AnimatePresence>
      <section className="relative overflow-hidden" key="content">
        <div dir={` ${direction ? "ltr" : "rtl"}`}>
          <Landing
            setUsedLang={setUsedLang}
            useLang={useLang}
            direction={direction}
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="bg-white">
          <OurProjects direction={direction} useLang={useLang} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <HowTo useLang={useLang} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" id="team">
          <TeamMembers direction={direction} useLang={useLang} />
        </div>
        <div id="sayHi" data-aos="fade-up" data-aos-duration="1500">
          <SayHi direction={direction} useLang={useLang} />
        </div>
        <Footer direction={direction} useLang={useLang} />
      </section>
    </AnimatePresence>
  );
}

export default Home;
