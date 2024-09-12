import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import CheckBox from "../elements/CheckBox";
import emailjs from "@emailjs/browser";
import Modal from "../elements/Modal";

function PlanForm({ useLang, direction }) {
  const form = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  // State variables for form fields
  const [nameVal, setName] = useState("");
  const [emailVal, setEmail] = useState("");
  const [phoneVal, setPhone] = useState("");
  const [companyVal, setCompany] = useState("");
  const [countryVal, setCountry] = useState(useLang.planForm.countryItems[0]);
  const [modulesVal, setModules] = useState([]);
  const [agreeVal, setAgree] = useState(false);

  // State variables for error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [modulesError, setModulesError] = useState("");
  const [agreeError, setAgreeError] = useState("");
  const [isThereError, setIsThereError] = useState(true);

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
          "service_qjgygvr", // Replace with your EmailJS service ID
          "template_xiq89fs", // Replace with your EmailJS template ID
          form.current,
          "5NjPRFdekgZU4N5zq" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            openModal();
            console.log("Email sent successfully:", result.text);
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );
    } else {
      setIsThereError(false);
    }
  };

  const productsOptions = useLang.planForm.productsItems.map((product) => ({
    value: product,
    label: product,
  }));

  const modulesOptions = useLang.planForm.modulesItems.map((module) => ({
    value: module,
    label: module,
  }));

  const countryOptions = useLang.planForm.countryItems.map((country) => ({
    value: country,
    label: country,
  }));

  const aboutOptions = useLang.planForm.aboutItems.map((about) => ({
    value: about,
    label: about,
  }));

  const closeModal = () => {
    setModalOpen(false);
    // window.location.reload();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex justify-start items-start min-h-screen bg-gray-100">
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <div className="flex flex-col gap-3 md:flex-row">
          <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
              {useLang.planForm.name} <span className="text-red-500">*</span>
            </label>
            <input
              className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
              id="name"
              type="text"
              placeholder={useLang.planForm.name}
              value={nameVal}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
          </div>

          <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              {useLang.planForm.email} <span className="text-red-500">*</span>
            </label>
            <input
              className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
              id="email"
              type="email"
              placeholder={useLang.planForm.email}
              value={emailVal}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
        </div>

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
            {useLang.planForm.phone} <span className="text-red-500">*</span>
          </label>
          <div className="w-[100%]" dir="ltr">
            <PhoneInput
              className="w-full"
              required
              name="phone"
              placeholder={useLang.planForm.phone}
              defaultCountry="ae"
              value={phoneVal}
              onChange={(value) => setPhone(value)}
            />
          </div>
          {phoneError && <p className="text-red-500 text-xs">{phoneError}</p>}
        </div>

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="company">
            {useLang.planForm.company} <span className="text-red-500">*</span>
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

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="products"
          >
            {useLang.planForm.products}
          </label>
          <select
            className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
            id="products"
          >
            {productsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="modules">
            {useLang.planForm.modules} <span className="text-red-500">*</span>
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

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="country">
            {useLang.planForm.country} <span className="text-red-500">*</span>
          </label>
          <select
            className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
            id="country"
            value={countryVal.value}
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

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="source">
            {useLang.planForm.about}
          </label>
          <select
            className="border rounded-[10px] w-full py-2 px-3 text-gray-700 border-[#E3E3E3]"
            id="source"
          >
            {aboutOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
          <label className="flex items-start justify-start">
            <CheckBox checked={agreeVal} onChange={() => setAgree(!agreeVal)} />
            <span
              className={`ml-2 text-gray-700 text-sm ${
                direction ? "text-left" : "text-right"
              }`}
            >
              {useLang.planForm.agree}
            </span>
          </label>
          {agreeError && <p className="text-red-500 text-xs">{agreeError}</p>}
        </div>

        <div data-aos="fade-left" className="mb-4 flex flex-col items-start">
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
          <button
            type="submit"
            className="button11 text-[#00A7E1] border transition-all duration-300 border-[#00A7E1] rounded-[30px] font-normal text-xs 2xl:text-lg py-3 px-16 md:mt-5 mt-8"
          >
            {useLang.planForm.submit}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlanForm;
