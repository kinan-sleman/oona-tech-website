import { Link, useLocation } from "react-router-dom";
import { logo, flyMe } from "../../assets";
import SocialLinks from "../elements/SocialLinks";

function Footer({ direction, useLang }) {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <section
      className={`footer md:pt-14 pt-8 pb-4 w-full ${
        pathname === "/process" ? "z-20" : ""
      }`}
      dir={`${direction ? "ltr" : "rtl"}`}
    >
      <section className="custom_container sm:custom_container 2xl:large_container">
        <section
          className={`flex md:flex-row flex-col md:gap-0 gap-5 items-start justify-between w-full ${
            direction ? "lg:px-[33px]" : "lg:px-[63px]"
          } `}
        >
          <div className="flex flex-col ">
            <Link
              className="md:ml-0 -ml-[14px]"
              to="/"
              onClick={() =>
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
              }
            >
              <img src={logo} alt=" " className="2xl:w-[100%]" />
            </Link>
          </div>
          <div>
            <h4 className="text-[#00A7E1] font-bold text-lg mb-3">
              {useLang?.footer[0] ? useLang?.footer[0][0] : ""}
            </h4>
            <ul className="text-[#5E5E5E] text-base font-normal flex flex-col gap-2 footer_links">
              <li className="">
                <a target="blank" href="https://www.facebook.com/oonatech">
                  {useLang?.footer[0] ? useLang?.footer[0][1] : ""}
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.instagram.com/oonatech/">
                  {" "}
                  {useLang?.footer[0] ? useLang?.footer[0][2] : ""}
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/oona-tech"
                >
                  {" "}
                  {useLang?.footer[0] ? useLang?.footer[0][3] : ""}
                </a>
              </li>
              <li>
                <a target="blank" href="mailto:info@oonatech.com">
                  {" "}
                  {useLang?.footer[0] ? useLang?.footer[0][4] : ""}
                </a>
              </li>
              <li>
                <a target="blank" href="https://wa.me/971508936752">
                  {" "}
                  {useLang?.footer[0] ? useLang?.footer[0][5] : ""}
                </a>
              </li>
              {/* <li>
                <Link to="">
                  {" "}
                  {useLang?.footer[0] ? useLang?.footer[0][4] : ""}
                </Link>
              </li>
              <li>
                <Link to="">
                  {" "}
                  {useLang?.footer[0] ? useLang?.footer[0][5] : ""}
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-[#00A7E1] font-bold text-lg mb-3">
              {" "}
              {useLang?.footer[1] ? useLang?.footer[1][0] : ""}
            </h4>
            <ul className="text-[#5E5E5E] text-base font-normal flex flex-col gap-2 footer_links">
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  {useLang?.footer[1] ? useLang?.footer[1][1] : ""}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  {useLang?.footer[1] ? useLang?.footer[1][2] : ""}
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  {useLang?.footer[1] ? useLang?.footer[1][3] : ""}
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  {useLang?.footer[1] ? useLang?.footer[1][4] : ""}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  {useLang?.footer[1] ? useLang?.footer[1][5] : ""}
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/quote"
                  onClick={() =>
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  }
                >
                  {useLang?.footer[1] ? useLang?.footer[1][6] : ""}
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-[#00A7E1] font-bold text-lg mb-2">
              {useLang?.footer[2] ? useLang?.footer[2][0] : ""}
            </h4>
            <p className="font-normal text-base text-[#A7A5A5]">
              {useLang?.footer[2] ? useLang?.footer[2][1] : ""}
            </p>
            <form action="" className="flex w-full mt-6">
              <input
                type="email"
                placeholder={useLang?.footer[2] ? useLang?.footer[2][2] : ""}
                className={` transition-all bg-gray-50 outline-none placeholder:text-[#7E7E7E
                ] px-3 py-3 w-full focus:border-[#234062]`}
              />
              <button className="!flex items-center justify-center text-[#272727] bg-white text-sm font-normal py-3 px-8 border-[1px] border-gray-800">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {useLang?.footer[2] ? useLang?.footer[2][3] : ""}
              </button>
            </form>
          </div>
          <div className="text-center md:mx-0 mx-auto md:w-fit w-full">
            <h4 className="text-[#00A7E1] font-bold text-lg mb-2 md:mt-0 mt-3">
              {useLang?.footer[3]}
            </h4>
            <button
              className="fly_me_rocket "
              onClick={() =>
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
              }
            >
              <img src={flyMe} alt="" className="size-[200px]" />
            </button>
          </div>
        </section>
        <section className="flex items-center md:flex-row flex-col md:gap-0 gap-5 justify-between w-full pt-2 md:mt-7 mt-1 border-t border-[#D8D8D8]">
          <p className="text-[#5E5E5E] text-sm font-normal">
            {useLang?.footer[4]}
          </p>
          <SocialLinks />
        </section>
      </section>
    </section>
  );
}

export default Footer;
