import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import CheckBox from "../elements/CheckBox";
import { pricingPlanImg } from "../../assets";
import emailjs from "@emailjs/browser";
import Modal from "../elements/Modal";

function QuoteForm({ useLang, direction }) {
  const form = useRef();

  const [isThereError, setIsThereError] = useState(true);
  const [emailVal, setEmail] = useState("");
  const [phoneVal, setPhone] = useState("");
  const [nameVal, setName] = useState("");
  const [companyVal, setCompany] = useState("");
  const [countryVal, setCountry] = useState(useLang.planForm.countryItems[0]);
  const [modulesVal, setModules] = useState([]);
  const [agreeVal, setAgree] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [modulesError, setModulesError] = useState("");
  const [agreeError, setAgreeError] = useState("");

  const [showModal, setShowModal] = useState(false); 

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  const validateForm = () => {
    let isValid = true;

    if (!nameVal) {
      setNameError(useLang?.errorMessages?.name);
      isValid = false;
    } else {
      setNameError("");
    }

    if (!emailVal.match(regexEmail)) {
      setEmailError(useLang?.errorMessages?.email);
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phoneVal) {
      setPhoneError(useLang?.errorMessages?.phone);
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!companyVal) {
      setCompanyError(useLang?.errorMessages?.company);
      isValid = false;
    } else {
      setCompanyError("");
    }

    if (!countryVal) {
      setCountryError(useLang?.errorMessages?.country);
      isValid = false;
    } else {
      setCountryError("");
    }

    if (modulesVal.length === 0) {
      setModulesError(useLang?.errorMessages?.modules);
      isValid = false;
    } else {
      setModulesError("");
    }

    if (!agreeVal) {
      setAgreeError(useLang?.errorMessages?.agree);
      isValid = false;
    } else {
      setAgreeError("");
    }

    return isValid;
  };
  useEffect(()=> {
    if(!isThereError) {
      validateForm()
    }
    }, [useLang])
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsThereError(true)
      emailjs
        .sendForm(
          "service_qjgygvr",
          "template_xiq89fs",
          form.current,
          "5NjPRFdekgZU4N5zq"
        )
        .then(
          (result) => {
            console.log(result);
            setShowModal(true);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      setIsThereError(false)
    }
  };

  const productsOptions = useLang?.planForm?.productsItems.map((product) => ({
    value: product,
    label: product,
  }));

  const modulesOptions = useLang?.planForm?.modulesItems.map((module) => ({
    value: module,
    label: module,
  }));

  const countryOptions = useLang?.planForm?.countryItems.map((country) => ({
    value: country,
    label: country,
  }));

  const aboutOptions = useLang?.planForm?.aboutItems.map((about) => ({
    value: about,
    label: about,
  }));

  return (
    <div className="cards mb-10 flex md:flex-row flex-col gap-6 2xl:gap-10 mt-10">
      <div className="custom_container flex flex-col md:flex-row md:justify-center md:items-start">
        <div className="w-50%">
          <div className="flex justify-start items-start min-h-screen bg-gray-100">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
            >
              <div className="flex flex-col gap-3 md:flex-row">
                <div
                  data-aos="fade-left"
                  className="mb-4 flex flex-col items-start"
                >
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    {useLang.planForm.name}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
                    id="name"
                    type="text"
                    placeholder={useLang.planForm.name}
                    value={nameVal}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {nameError && (
                    <p className="text-red-500 text-xs">{nameError}</p>
                  )}
                </div>

                <div
                  data-aos="fade-left"
                  className="mb-4 flex flex-col items-start"
                >
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="email"
                  >
                    {useLang.planForm.email}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
                    id="email"
                    type="email"
                    placeholder={useLang.planForm.email}
                    value={emailVal}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs">{emailError}</p>
                  )}
                </div>
              </div>

              <div
                data-aos="fade-left"
                className="mb-4 flex flex-col items-start"
              >
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="phone"
                >
                  {useLang.planForm.phone}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="w-[100%]" dir="ltr">
                  <PhoneInput
                    className={`w-full`}
                    required
                    name="phone"
                    placeholder={
                      useLang?.planForm.phone ? useLang?.planForm.phone : ""
                    }
                    defaultCountry="ae"
                    value={phoneVal}
                    onChange={(value) => setPhone(value)}
                  />
                </div>
                {phoneError && (
                  <p className="text-red-500 text-xs">{phoneError}</p>
                )}
              </div>

              <div
                data-aos="fade-left"
                className="mb-4 flex flex-col items-start"
              >
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="company"
                >
                  {useLang.planForm.company}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
                  id="company"
                  type="text"
                  placeholder={useLang.planForm.company}
                  value={companyVal}
                  onChange={(e) => setCompany(e.target.value)}
                />
                {companyError && (
                  <p className="text-red-500 text-xs">{companyError}</p>
                )}
              </div>

              <div
                data-aos="fade-left"
                className="mb-4 flex flex-col items-start"
              >
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="products"
                >
                  {useLang.planForm.products}
                </label>
                <select
                  className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
                  id="products"
                  required
                >
                  {productsOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div
                data-aos="fade-left"
                className="mb-4 flex flex-col items-start"
              >
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="modules"
                >
                  {useLang.planForm.modules}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Select
                  className="custom-select rounded-[10px] w-full text-gray-700 border-[#E3E3E3]"
                  isMulti
                  options={modulesOptions}
                  value={modulesVal}
                  onChange={(selectedOptions) => setModules(selectedOptions)}
                />
                {modulesError && (
                  <p className="text-red-500 text-xs">{modulesError}</p>
                )}
              </div>

              <div
                data-aos="fade-left"
                className="mb-4 flex flex-col items-start"
              >
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="country"
                >
                  {useLang.planForm.country}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
                  id="country"
                  value={countryVal}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {countryError && (
                  <p className="text-red-500 text-xs">{countryError}</p>
                )}
              </div>

              <div data-aos="fade-left" className="flex flex-col  w-full mt-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="source"
                >
                  {useLang.planForm.about}
                </label>
                <div className="flex mb-4 md:items-center md:flex-row flex-col md:gap-0 gap-3 justify-between">
                  {aboutOptions.map((option) => (
                    <div key={option.value} className="flex items-center gap-1">
                      <CheckBox name="workforce" />
                      <label
                        htmlFor="Central"
                        className="text-[#202020] text-[13px] font-normal 2xl:text-base"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div
                data-aos="fade-left"
                className="mb-4 flex flex-col items-start"
              >
                <label className="flex items-start justify-start">
                  <CheckBox
                    checked={agreeVal}
                    onChange={() => {
                      setAgree(!agreeVal);
                      console.log(agreeVal);
                    }}
                  />
                  <span
                    className={`ml-2 text-gray-700 text-sm ${
                      direction ? "text-left" : "text-right"
                    }`}
                  >
                    {useLang.planForm.agree}
                  </span>
                </label>
                {agreeError && (
                  <p className="text-red-500 text-xs">{agreeError}</p>
                )}
              </div>

              <div
                data-aos="fade-left"
                className="mb-4 flex flex-col items-start"
              >
                <p
                  className={`text-gray-600 text-xs ${
                    direction ? "text-left" : "text-right"
                  }`}
                >
                  {useLang.planForm.confirmAgree}
                </p>
              </div>

              <div
                className={`buttonBox relative z-10 ${
                  direction ? "text-left" : "text-right"
                }`}
              >
                <button type="submit" className="button11">
                  <span
                    className={`text-[#00A7E1] border transition-all duration-300 border-[#00A7E1] rounded-[30px] font-normal text-xs 2xl:text-lg py-3 px-16 md:mt-5 mt-8`}
                  >
                    {useLang.planForm.submit}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full hidden md:block">
          <img className="h-full" src={pricingPlanImg} alt="" />
        </div>
        <Modal
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
          message={{
            title: "Thank You!",
            content: "Your message has been sent successfully.",
            buttonText: "Close",
          }}
          direction={direction}
          useLang={useLang}
        />
      </div>
    </div>
  );
}

export default QuoteForm;
