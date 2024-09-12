import CareerLanding from "../components/career/CareerLanding";
import JobCard from "../components/career/JobCard";
import NoCareers from "../components/career/NoCareers";
import Footer from "../components/shared/Footer";
import { AnimatePresence } from "framer-motion";

function Career({ useLang, setUsedLang, direction }) {
  return (
    <AnimatePresence>
      <section className="overflow-hidden" dir={`${direction ? "ltr" : "rtl"}`}>
        <CareerLanding
          setUsedLang={setUsedLang}
          direction={direction}
          useLang={useLang}
        />
        <div data-aos="fade-up" data-aos-duration="1500">
          {useLang?.career?.availables.length > 0 ? (
            <div className="custom_container sm:custom_container 2xl:large_container !mt-10 !mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useLang?.career?.availables.map((item, index) => (
                <JobCard
                  key={index}
                  id={item.id}
                  title={item.job_title}
                  jobType={item.employment_type}
                  date={item.date}
                  description={item.description}
                  technologies={item.skills}
                  button_text={item.button_text}
                />
              ))}
            </div>
          ) : (
            <NoCareers useLang={useLang} />
          )}
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Footer useLang={useLang} direction={direction} />
        </div>
      </section>
    </AnimatePresence>
  );
}

export default Career;
