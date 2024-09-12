import Landing from "../components/career-info/Landing";
import Info from "../components/career-info/Info";
import { useParams } from "react-router-dom";
import NoCareers from "../components/career/NoCareers";
import Footer from "../components/shared/Footer";
import { AnimatePresence } from "framer-motion";

export default function CareerInfo({ useLang, setUsedLang, direction }) {
  const { id } = useParams();
  const jobId = parseInt(id, 10);
  const jobDetails = useLang.career.availables.find((job) => job.id === jobId);
  return (
    <AnimatePresence>
      <section className="overflow-hidden" dir={`${direction ? "ltr" : "rtl"}`}>
        {jobDetails ? (
          <>
            <Landing
              setUsedLang={setUsedLang}
              direction={direction}
              useLang={useLang}
              jobDetails={jobDetails}
            />
            <Info
              useLang={useLang}
              jobDetails={jobDetails}
              direction={direction}
            />
          </>
        ) : (
          <NoCareers useLang={useLang} />
        )}

        <div data-aos="fade-up" data-aos-duration="1500">
          <Footer useLang={useLang} direction={direction} />
        </div>
      </section>
    </AnimatePresence>
  );
}
