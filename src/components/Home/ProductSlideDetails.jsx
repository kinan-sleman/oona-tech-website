import { Link } from "react-router-dom";

function ProductSlideDetails({ title, description, buttonText, direction }) {
  return (
    <div
      className={`${direction ? "text-left" : "text-right"} py-11`}
      dir={`${direction ? "ltr" : "rtl"}`}
    >
      <h1 className="text-[#00A7E1] font-bold mb-3 md:text-4xl text-2xl">
        {title}
      </h1>
      <p className="md:text-lg  text-base 2xl:text-2xl text-[#202020] font-normal mb-8 2xl:mb-10 md:leading-8 leading-7 2xl:leading-9">
        {description}
      </p>
      {/* <Link
        className={`text-[#00A7E1] border border-[#00A7E1] rounded-[30px] font-normal text-xs py-3 px-16 mt-5 `}
        to="#"
      >
        {buttonText}
      </Link> */}
      <div className="wrapper mb-2">
        <div className="link_wrapper">
          <Link
            to="/"
            className={`text-[#00A7E1] border relative z-40 border-[#00A7E1] rounded-[30px] font-normal text-xs 2xl:text-base py-3 md:px-16 px-5 mt-5 ${
              direction ? "ml-0" : "mr-2"
            } `}
          >
            {buttonText}
          </Link>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.832 268.832"
            >
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSlideDetails;
