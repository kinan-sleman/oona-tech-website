import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { languages } from "./translate";
import Loader from "./components/elements/Loader";
// import Process from "./pages/Process";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Quote from "./pages/Quote";
// import Career from "./pages/Career";
// import CareerInfo from "./pages/CareerInfo";
import "./assets/icomoon/style.css";

const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Process = lazy(() => import("./pages/Process"));
const Quote = lazy(() => import("./pages/Quote"));
const Career = lazy(() => import("./pages/Career"));
const CareerInfo = lazy(() => import("./pages/CareerInfo"));

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [useLang, setUsedLang] = useState(languages.english);
  const [direction, setDirection] = useState(
    localStorage.getItem("language") === "EN" ? true : false
  );

  useEffect(() => {
    const theLang = localStorage.getItem("language");
    if (theLang) {
      setUsedLang(theLang === "EN" ? languages.english : languages.arabic);
    } else {
      localStorage.setItem("language", "EN");
      setUsedLang(languages.english);
    }
  }, []);

  useEffect(() => {
    setDirection(localStorage.getItem("language") === "EN");
  }, [useLang]);

  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Suspense fallback={<Loader key={location.pathname} />}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Home
                  useLang={useLang}
                  setUsedLang={setUsedLang}
                  direction={direction}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  useLang={useLang}
                  setUsedLang={setUsedLang}
                  direction={direction}
                />
              }
            />
            <Route
              path="/process"
              element={
                <Process
                  useLang={useLang}
                  setUsedLang={setUsedLang}
                  direction={direction}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  useLang={useLang}
                  setUsedLang={setUsedLang}
                  direction={direction}
                />
              }
            />
            <Route
              path="/quote"
              element={
                <Quote
                  useLang={useLang}
                  setUsedLang={setUsedLang}
                  direction={direction}
                />
              }
            />
            <Route
              path="/career"
              element={
                <Career
                  useLang={useLang}
                  setUsedLang={setUsedLang}
                  direction={direction}
                />
              }
            />
            <Route
              path="/career-info/:id"
              element={
                <CareerInfo
                  useLang={useLang}
                  setUsedLang={setUsedLang}
                  direction={direction}
                />
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
