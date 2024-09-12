import {
  facebook,
  facebookBorder,
  instagram,
  instagramBorder,
  linkedBorder,
  linkedin,
  emailIcon,
  emailBorder,
  whatsapp,
  whatsappBorder,
} from "../../assets";

function ContactUs({ light, top, useLang }) {
  return (
    <section dir="ltr" className={`hidden md:block bounce2 absolute z-10 ${top} -left-[55px]`}>
      <div className={`items-center gap-6 !rotate-[-90deg] md:flex`}>
        <div className="flex items-center justify-center gap-2">
          {/* WhatsApp */}
          <a
            target="_blank"
            href="https://wa.me/971508936752"
            className={`relative transition-all rotate-[90deg] p-2 border ${
              light ? "border-white" : "border-[#D9D9D9]"
            } rounded-full flex items-center justify-center w-[36px] h-[36px] 2xl:w-[45px] 2xl:h-[45px] group`}
          >
            <img
              src={light ? whatsapp : whatsappBorder}
              alt=""
              className="2xl:w-[45px]"
            />
            <span
              className={`absolute left-[176%] text-center -translate-x-[41%] top-2/2 -translate-y-2/2 
              bg-[#46D287] text-white text-xs py-[13px] px-[11px] rounded-full opacity-0 
              group-hover:opacity-100 transition-all duration-1000 
              whitespace-nowrap flex items-center gap-2 w-0 group-hover:w-[150px]`}
            >
              <img
                src={light ? whatsapp : whatsappBorder}
                alt=""
                className="2xl:w-[45px]"
              />
              +971508936752
            </span>
          </a>

          {/* Email */}
          <a
            target="_blank"
            href="mailto:info@oonatech.com"
            className={`relative transition-all rotate-[90deg] p-2 border ${
              light ? "border-white" : "border-[#D9D9D9]"
            } rounded-full flex items-center justify-center w-[36px] h-[36px] 2xl:w-[45px] 2xl:h-[45px] group`}
          >
            <img
              src={light ? emailIcon : emailBorder}
              alt=""
              className="2xl:w-[45px]"
            />
            <span
              className={`absolute left-[176%] text-center -translate-x-[41%] top-2/2 -translate-y-2/2 
               bg-[#9563FF] text-white text-xs py-[13px] px-[11px] rounded-full opacity-0 
               group-hover:opacity-100 transition-all duration-1000 
               whitespace-nowrap flex items-center gap-2 w-0 group-hover:w-[150px]`}
            >
              <img
                src={light ? emailIcon : emailBorder}
                alt=""
                className="2xl:w-[45px]"
              />{" "}
              info@oonatech.com
            </span>
          </a>

          {/* Facebook */}
          <a
            target="_blank"
            href="https://www.facebook.com/oonatech"
            className={`relative transition-all rotate-[90deg] p-2 border ${
              light ? "border-white" : "border-[#D9D9D9]"
            } rounded-full flex items-center justify-center w-[36px] h-[36px] 2xl:w-[45px] 2xl:h-[45px] group`}
          >
            <img
              src={light ? facebook : facebookBorder}
              alt=""
              className={`2xl:w-[20px]`}
            />
            <span
              className={`absolute left-[176%] text-center -translate-x-[41%] top-2/2 -translate-y-2/2 
               bg-[#00A7E1] text-white text-xs p-[11px] rounded-full opacity-0 
               group-hover:opacity-100 transition-all duration-1000 
               whitespace-nowrap flex items-center gap-2 w-0 group-hover:w-[150px]`}
            >
              <img
                src={light ? facebook : facebookBorder}
                alt=""
                className={`2xl:w-[20px]`}
              />
              @oonatech
            </span>
          </a>

          {/* Instagram */}
          <a
            target="_blank"
            href="https://www.instagram.com/oonatech/"
            className={`relative transition-all rotate-[90deg] p-2 border ${
              light ? "border-white" : "border-[#D9D9D9]"
            } rounded-full flex items-center justify-center w-[36px] h-[36px] 2xl:w-[45px] 2xl:h-[45px] group`}
          >
            <img
              src={light ? instagram : instagramBorder}
              alt=""
              className="2xl:w-[45px]"
            />
            <span
              className={`absolute left-[176%] text-center -translate-x-[41%] top-2/2 -translate-y-2/2 
               bg-[#FF5F5F] text-white text-xs p-[11px] rounded-full opacity-0 
               group-hover:opacity-100 transition-all duration-1000 
               whitespace-nowrap flex items-center gap-2 w-0 group-hover:w-[150px]`}
            >
              <img
                src={light ? instagram : instagramBorder}
                alt=""
                className="2xl:w-[45px]"
              />
              @oonatech
            </span>
          </a>

          {/* LinkedIn */}
          <a
            target="_blank"
            href="https://www.linkedin.com/company/oona-tech"
            className={`relative transition-all rotate-[90deg] p-2 border ${
              light ? "border-white" : "border-[#D9D9D9]"
            } rounded-full flex items-center justify-center w-[36px] h-[36px] 2xl:w-[45px] 2xl:h-[45px] group`}
          >
            <img
              src={light ? linkedin : linkedBorder}
              alt=""
              className={`2xl:w-[20px]`}
            />
            <span
              className={`absolute left-[176%] text-center -translate-x-[41%] top-2/2 -translate-y-2/2 
               bg-[#253368] text-white text-xs p-[11px] rounded-full opacity-0 
               group-hover:opacity-100 transition-all duration-1000 
               whitespace-nowrap flex items-center gap-2 w-0 group-hover:w-[150px]`}
            >
              <img
                src={light ? linkedin : linkedBorder}
                alt=""
                className={`2xl:w-[20px]`}
              />
              @oona-tech
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
