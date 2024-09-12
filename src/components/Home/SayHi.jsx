import { useEffect, useRef, useState } from "react";
import TextField from "../elements/TextField";
import emailjs from "@emailjs/browser";
import {
  beShyBg,
} from "../../assets";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Modal from "../elements/Modal";

function SayHi({ direction, useLang, ref }) {
  const [emailVal, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [isThereError, setIsThereError] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    // window.location.reload();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const [color, setColor] = useState(false);
  const handleSelectColor = (e) => {
    if (e.target.value) {
      setColor(true);
    }
  };

  const form = useRef();

  const validateForm = () => {
    const errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    const formElements = form.current.elements;

    if (!formElements.user_name.value) {
      errors.user_name = useLang?.errorMessages?.name;
    }

    if (!formElements.phone.value) {
      errors.phone = useLang?.errorMessages?.phone;
    }

    if (!formElements.email.value.match(regexEmail)) {
      errors.email = useLang?.errorMessages?.email;
    }

    if (!formElements.product.value) {
      errors.product = useLang?.errorMessages?.product;
    }

    if (!formElements.message.value) {
      errors.message = useLang?.errorMessages?.message;
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    if (!isThereError) {
      validateForm();
    }
  }, [useLang]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsThereError(true);
      emailjs
        .sendForm(
          "service_qjgygvr",
          "template_9om88or",
          form.current,
          "5NjPRFdekgZU4N5zq"
        )
        .then(
          (result) => {
            console.log(result);
            openModal();
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      setIsThereError(false);
    }
  };

  return (
    <section
      className={`say_hi relative py-9 text-center mb-14 ${
        direction ? "ltr" : "rtl"
      } bg-[#00A7E1] `}
    >
      <span className="absolute top-0 left-0 w-full h-full bg-[#00A7E1] opacity-50"></span>
      <img
        className="absolute top-0 right-0 w-full h-full"
        src={beShyBg}
        alt=""
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        message={{
          title: useLang?.demo?.form[15],
          content: useLang?.demo?.form[16],
          buttonText: useLang?.demo?.form[17],
        }}
        direction={direction}
        useLang={useLang}
      />
      <section className="custom_container relative z-10" ref={ref}>
        <h1
          dir={`${direction ? "ltr" : "rtl"}`}
          className="text-white md:text-[60px] text-3xl font-bold text-center md:leading-[70px]"
        >
          {useLang?.beShy[0]} <br /> {useLang?.beShy[1]}
        </h1>
        <p
          dir={`${direction ? "ltr" : "rtl"}`}
          className="text-white text-sm font-normal leading-[22px] mt-4"
        >
          {useLang?.beShy[2]}
          <br className="md:block hidden" />
          {useLang?.beShy[3]}
          <br className="md:block hidden" />
          {useLang?.beShy[4]}
        </p>
        <form action="" className="md:w-[65%] mx-auto mt-6" ref={form}>
          <div
            dir={`${direction ? "ltr" : "rtl"}`}
            data-aos="fade-right"
            className="mb-[20px]"
          >
            <TextField
              required
              type="text"
              name="user_name"
              placeholder={useLang?.beShy[5] ? useLang?.beShy[5][0] : ""}
            />
            {formErrors.user_name && (
              <span
                className={`text-red-500 text-xs font-normal ${direction ? "text-left" : "text-right"} w-full block -mb-2 mt-[2px] pl-1`}
              >
                {formErrors.user_name}
              </span>
            )}
          </div>
          <div data-aos="fade-left" className="mb-[20px]">
            <PhoneInput
              className={`w-full ${direction ? "ltr" : "rtl"} `}
              required
              name="phone"
              placeholder={useLang?.beShy[5] ? useLang?.beShy[5][1] : ""}
              defaultCountry="ae"
            />
            {formErrors.phone && (
              <span
                className={`text-red-500 text-xs font-normal ${direction ? "text-left" : "text-right"} w-full block -mb-2 mt-[2px] pl-1`}
              >
                {formErrors.phone}
              </span>
            )}
          </div>
          <div
            dir={`${direction ? "ltr" : "rtl"}`}
            data-aos="fade-right"
            className="mb-[20px]"
          >
            <TextField
              required
              type="email"
              onchange={(e) => {
                setEmail(e.target.value);
                setFormErrors((prev) => ({ ...prev, email: "" }));
              }}
              name="email"
              placeholder={useLang?.beShy[5] ? useLang?.beShy[5][2] : ""}
            />
            {formErrors.email && (
              <span
                className={`text-red-500 text-xs font-normal ${direction ? "text-left" : "text-right"} w-full block -mb-2 mt-[2px] pl-1`}
              >
                {formErrors.email}
              </span>
            )}
          </div>
          <div
            dir={`${direction ? "ltr" : "rtl"}`}
            data-aos="fade-left"
            className=""
          >
            <select
              name="product"
              id=""
              onChange={handleSelectColor}
              className={`${color ? "text-[#272727]" : "text-[#a9a9a9]"}`}
            >
              <option value="" defaultValue disabled>
                {useLang?.beShy[5] ? useLang?.beShy[5][3] : ""}
              </option>
              <option value="Products">Products</option>
              <option value="Self">Self service</option>
            </select>
            {formErrors.product && (
              <span
                className={`text-red-500 text-xs font-normal ${direction ? "text-left" : "text-right"} w-full block -mb-2 mt-[2px] pl-1`}
              >
                {formErrors.product}
              </span>
            )}
          </div>
          <div dir={`${direction ? "ltr" : "rtl"}`} data-aos="fade-right">
            <div className="col-3 text_input relative mb-10">
              <textarea
                name="message"
                id=""
                placeholder={useLang?.beShy[5] ? useLang?.beShy[5][4] : ""}
                rows={6}
                className="effect-2 text-sm"
              ></textarea>
              <span className="focus-border"></span>
              {formErrors.message && (
                <span
                  dir={`${direction ? "ltr" : "rtl"}`}
                  className="text-red-500 text-xs font-normal text-left w-full block -mb-2 mt-[2px] pl-1"
                >
                  {formErrors.message}
                </span>
              )}
            </div>
          </div>
          <div className="buttonBox ">
            <button onClick={sendEmail} className="button11 ">
              <div
                className={`text-white border border-white rounded-[30px] text-sm font-normal md:text-base py-[0.66rem] px-14  transition-all duration-300`}
              >
                {useLang?.beShy[5] ? useLang?.beShy[5][5] : ""}
              </div>
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default SayHi;
