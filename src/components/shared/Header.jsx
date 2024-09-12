import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { englishIcon, logo, uaeFlag } from "../../assets";
import { languages } from "../../translate";
import SocialLinks from "../elements/SocialLinks";

function Header({ light = true, setUsedLang, useLang, direction }) {
  const location = useLocation();
  const pathname = location.pathname;
  const buttonRef = useRef(null);
  const [languageFlag, setLangFlag] = useState(
    localStorage.getItem("language") === "EN" ? englishIcon : uaeFlag
  );
  const [language, setLang] = useState(
    localStorage.getItem("language") === "EN" ? "English" : "العربية"
  );
  const [languageMenu, setLangMenu] = useState(false);
  const [menuSideBar, setMenu] = useState(false);

  const handleMouseEnter = () => {
    console.log(buttonRef.current, "buttonRef.current");
    if (buttonRef.current) {
      buttonRef.current.style.boxShadow = "0px 0px 2px 2px #00a9e165 inset";
      console.log(buttonRef.current.style, "buttonRef.current.style");
    }
    setLangMenu(true);
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      const targ = e.target.id;
      if (targ !== "change_lang_menu") {
        if (buttonRef.current) {
          buttonRef.current.style.boxShadow = "none";
        }
        setLangMenu(false);
      } else {
        if (buttonRef.current) {
          buttonRef.current.style.boxShadow = "0px 0px 2px 2px #00a9e165 inset";
        }
        setLangMenu(true);
      }
    };
    document.addEventListener("click", (e) => handleOutSideClick(e));

    return () => {
      document.removeEventListener("click", (e) => handleOutSideClick(e));
    };
  }, []);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Example condition: Show button when scroll position is greater than 500px
      if (scrollPosition > 40) {
        console.log("ds", scrollPosition);
        setShowButton(true);
      } else {
        console.log("ds3232", scrollPosition);

        setShowButton(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //
  return (
    <div
      dir={`${direction ? "ltr" : "rtl"}`}
      className={`w-full ${
        pathname === "/" && showButton ? "pb-40 transition-all" : ""
      } `}
    >
      <div
        className={`flex items-center transition-all duration-300 justify-between md:justify-around px-[20px] py-[12px] md:px-3 md:pt-3 pt-3 w-full ${
          showButton
            ? "fixed  w-full z-[1000] top-0 bg-[#0a0f22cc]  pb-3 2xl:pb-4"
            : ""
        }`}
      >
        <div
          className={`flex items-center gap-0 ${
            showButton && "py-1 2xl:py-[6px]"
          } `}
        >
          <Link to="/">
            <img
              src={logo}
              alt="Oona Logo"
              width={117}
              className="md:w-[117px] mr-3 w-[100px] 2xl:w-[160px]"
            />
          </Link>
        </div>

        <div className="mt-4 gap-0 lg:gap-3 md:flex hidden  flex-col md:mt-0 md:flex-row gap-1 md:text-sm md:!font-normal items-center ">
          <div className=" gap-1 lg:gap-5 md:text-sm md:!font-normal items-center md:flex hidden ">
            <Link
              to="/"
              className={` ${
                light || showButton ? "text-white" : "text-[#202020]"
              } font-normal text-sm  2xl:text-lg header-nav ${
                pathname === "/" && "active_nav"
              }`}
            >
              {useLang?.navigations[0]}
            </Link>
            <Link
              className={`${
                light || showButton ? "text-white" : "text-[#202020]"
              } font-normal text-sm header-nav 2xl:text-lg ${
                pathname === "/products" && "active_nav"
              }`}
              to="/products"
            >
              {useLang?.navigations[1]}
            </Link>
            <Link
              className={`${
                light || showButton ? "text-white" : "text-[#202020]"
              } font-normal text-sm header-nav 2xl:text-lg ${
                pathname === "/process" && "active_nav"
              }`}
              to="/process"
            >
              {useLang?.navigations[2]}
            </Link>
            <Link
              className={`${
                light || showButton ? "text-white" : "text-[#202020]"
              } font-normal text-sm header-nav 2xl:text-lg ${
                pathname === "/career" && "active_nav"
              }`}
              to="/career"
            >
              {useLang?.navigations[3]}
            </Link>
            <Link
              className={`${
                light || showButton ? "text-white" : "text-[#202020]"
              } font-normal text-sm header-nav 2xl:text-lg ${
                pathname === "/about" && "active_nav"
              }`}
              to="/about"
            >
              {useLang?.navigations[4]}
            </Link>
          </div>
          <div className={`buttonBox ${direction ? "lg:ml-5" : "lg:mr-5"} `}>
            <button className="button11 transition-all duration-300">
              <Link
                className={` transition-all 2xl:text-lg  duration-300 ${
                  light || showButton ? "text-white" : "text-[#202020]"
                } border  ${
                  light ? "border-white" : "border-[#D8D8D8]"
                } rounded-[30px] font-normal text-sm py-2 2xl:px-6 2xl:py-[10px] px-4 ${
                  pathname === "/quote" && "!border-[#15c1fa] !text-[#15c1fa]"
                }`}
                to="/quote"
              >
                {useLang?.navigations[5]}
              </Link>
            </button>
          </div>
          <div className="flex items-center gap-0 relative change_lang_menu">
            <div
              ref={buttonRef}
              className={`flex items-center px-3 rounded-sm py-[6px] !transition-all !duration-300 gap-2 cursor-pointer lang ${
                light ? "ltr" : "rtl"
              } `}
            >
              <img
                src={languageFlag}
                alt=""
                onClick={handleMouseEnter}
                id="change_lang_menu"
                className="object-cover rounded-[50%] size-[25px]"
              />
            </div>
            <ul
              className={`absolute bg-white transition-all px-2 py-2 top-8 2xl:top-10 right-0 w-[150px] 2xl:w-[200px] rounded-[8px] lang_menu !z-[1111111111111111] ${
                languageMenu ? "popup_effect z-[100]" : "hidden"
              }`}
            >
              <li
                className="text-xs 2xl:text-base transition-all border-b text-gray-300 hover:text-gray-600 transition-colors py-2 px-2 cursor-pointer hover:bg-slate-200 hover:rounded-md flex items-center gap-2"
                onClick={() => {
                  setLang("English");
                  setLangFlag(englishIcon);
                  setLangMenu(false);
                  localStorage.setItem("language", "EN");
                  setUsedLang(languages.english);
                }}
              >
                <img src={englishIcon} alt="" width={24} />
                English
              </li>
              <li
                className="text-xs 2xl:text-base transition-all hover:rounded-md text-gray-300 hover:text-gray-600 transition-colors py-2 px-2 cursor-pointer hover:bg-slate-200 flex items-center gap-2"
                onClick={() => {
                  setLang("العربية");
                  setLangFlag(uaeFlag);
                  setLangMenu(false);
                  localStorage.setItem("language", "AR");
                  setUsedLang(languages.arabic);
                }}
              >
                <img src={uaeFlag} alt="" width={24} />
                العربية
              </li>
            </ul>
          </div>
        </div>
        <button
          className="md:hidden flex flex-col items-center gap-1 mb-0 md:mb-2 outline-none"
          onClick={() => setMenu(!menuSideBar)}
        >
          <span
            className={`${
              light ? "bg-white" : "bg-black"
            } w-6 h-[2px] rounded-lg`}
          ></span>
          <span
            className={`${
              light ? "bg-white" : "bg-black"
            } w-6 h-[2px] rounded-lg`}
          ></span>
          <span
            className={`${
              light ? "bg-white" : "bg-black"
            } w-6 h-[2px] rounded-lg`}
          ></span>
        </button>
      </div>
      <div
        className={`side_modal overflow-hidden ${
          direction && menuSideBar
            ? "right-0"
            : direction && !menuSideBar
            ? "-right-20"
            : !direction && menuSideBar
            ? "left-0"
            : "-left-20"
        } ${
          menuSideBar ? "w-[280px] " : "w-[0] "
        } fixed  top-0  bg-white h-full z-[102] py-4 duration-[0.7s] px-7 `}
      >
        <button
          onClick={() => setMenu(!menuSideBar)}
          className="relative ml-3 mt-2"
        >
          <span
            className={`bg-[#202020] w-[2px] h-4 rounded-lg inline-block -rotate-45`}
          ></span>
          <span
            className={`bg-[#202020] w-[2px] h-4  rounded-lg inline-block rotate-45 absolute left-0 top-0`}
          ></span>
        </button>
        <div className="mt-4 flex   flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:!font-normal items-center gap-4 px-6 text-center">
          <Link
            to="/"
            className={`text-[#202020] pb-3 border-b border-[#d6d6d6] w-full font-normal text-sm header-nav ${
              pathname === "/" && "active"
            }`}
          >
            {useLang?.navigations[0]}
          </Link>
          <Link
            className={`text-[#202020] pb-3 border-b border-[#d6d6d6] w-full font-normal text-sm header-nav ${
              pathname === "/products" && "active"
            }`}
            to="/products"
          >
            {useLang?.navigations[1]}
          </Link>
          <Link
            className={`text-[#202020] pb-3 border-b border-[#d6d6d6] w-full font-normal text-sm header-nav ${
              pathname === "/process" && "active"
            }`}
            to="/process"
          >
            {useLang?.navigations[2]}
          </Link>
          <Link
            className={`text-[#202020] pb-3 border-b border-[#d6d6d6] w-full font-normal text-sm header-nav ${
              pathname === "/career" && "active"
            }`}
            to="/career"
          >
            {useLang?.navigations[3]}
          </Link>
          <Link
            className={`text-[#202020] pb-3 border-b border-[#d6d6d6] w-full font-normal text-sm header-nav ${
              pathname === "/about" && "active"
            }`}
            to="/about"
          >
            {useLang?.navigations[4]}
          </Link>

          <div className="flex items-center gap-0 relative change_lang_menu">
            <div
              className={`flex items-center px-3 rounded-sm py-[6px] !transition-all !duration-300 gap-2 cursor-pointer lang ${
                light ? "ltr" : "rtl"
              } `}
            >
              <img
                src={languageFlag}
                alt=""
                width={24}
                onClick={handleMouseEnter}
                id="change_lang_menu"
              />
            </div>
            <ul
              className={`absolute bg-white transition-all px-2 py-2 top-8 2xl:top-10 right-0 w-[150px] 2xl:w-[200px] rounded-[8px] lang_menu !z-[1111111111111111] ${
                languageMenu ? "popup_effect z-[100]" : "hidden"
              }`}
            >
              <li
                className="text-xs 2xl:text-base transition-all border-b text-[#202020] py-2 px-2 cursor-pointer hover:bg-slate-200 hover:rounded-md flex items-center gap-2"
                onClick={() => {
                  setLang("English");
                  setLangFlag(englishIcon);
                  setLangMenu(false);
                  localStorage.setItem("language", "EN");
                  setUsedLang(languages.english);
                }}
              >
                <img src={englishIcon} alt="" width={24} />
                English
              </li>
              <li
                className="text-xs 2xl:text-base transition-all hover:rounded-md text-[#202020] transition-colors py-2 px-2 cursor-pointer hover:bg-slate-200 flex items-center gap-2"
                onClick={() => {
                  setLang("العربية");
                  setLangFlag(uaeFlag);
                  setLangMenu(false);
                  localStorage.setItem("language", "AR");
                  setUsedLang(languages.arabic);
                }}
              >
                <img src={uaeFlag} alt="" width={24} />
                العربية
              </li>
            </ul>
          </div>
          <Link
            className={`text-[#202020] mt-3 border  border-[#D8D8D8]
              rounded-[30px] font-normal text-sm py-2 px-8 `}
            to="/quote"
          >
            {useLang?.navigations[5]}
          </Link>
        </div>
        <div className="text-center">
          <h3 className="font-medium mt-8"> {useLang?.homeTitle[3]}</h3>
          <div className="flex flex-wrap items-center gap-2 w-fit mt-4 mx-auto">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
