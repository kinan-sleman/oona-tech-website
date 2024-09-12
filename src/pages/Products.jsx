import { useEffect, useState } from "react";
import Customers from "../components/products/Customers";
import PricePlan from "../components/products/PricePlan";
import ProductLanding from "../components/products/ProductLanding";
import Footer from "../components/shared/Footer";
import { AnimatePresence } from "framer-motion";
function Products({ useLang, setUsedLang, direction }) {
  return (
    <AnimatePresence>
      <section
        className=" overflow-hidden"
        dir={`${direction ? "ltr" : "rtl"}`}
      >
        <div>
          <ProductLanding
            setUsedLang={setUsedLang}
            useLang={useLang}
            direction={direction}
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <PricePlan useLang={useLang} direction={direction} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Customers useLang={useLang} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Footer useLang={useLang} direction={direction} />
        </div>
      </section>
    </AnimatePresence>
  );
}

export default Products;
