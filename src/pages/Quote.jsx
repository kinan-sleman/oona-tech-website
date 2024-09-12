import QuoteForm from "../components/Quote/QuoteForm";
import QuoteLanding from "../components/Quote/QuoteLanding";
import Footer from "../components/shared/Footer";
import { AnimatePresence } from "framer-motion";

function Quote({ useLang, setUsedLang, direction }) {
  return (
    <AnimatePresence>
      <section
        className=" overflow-hidden"
        dir={`${direction ? "ltr" : "rtl"}`}
      >
        <QuoteLanding
          setUsedLang={setUsedLang}
          useLang={useLang}
          direction={direction}
        />
        <div data-aos="fade-up" data-aos-duration="1500">
          <QuoteForm useLang={useLang} direction={direction} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Footer useLang={useLang} direction={direction} />
        </div>
      </section>
    </AnimatePresence>
  );
}

export default Quote;
