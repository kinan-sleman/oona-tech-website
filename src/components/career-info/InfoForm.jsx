import React, { useState, useRef, useEffect } from "react";
import FileUpload from "../elements/FileUpload";
import emailjs from "@emailjs/browser";
import { PhoneInput } from "react-international-phone";
import Modal from "../elements/Modal";

export default function InfoForm({ useLang, direction }) {
  const formRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [otherLinks, setOtherLinks] = useState("");
  const [cvFiles, setCvFiles] = useState([]);
  const [otherFiles, setOtherFiles] = useState([]);

  // Error states
  const [nameError, setNameError] = useState("");
  const [secondNameError, setSecondNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [cvFilesError, setCvFilesError] = useState("");
  const [isThereError, setIsThereError] = useState(true);
  const [otherFilesError, setOtherFilesError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError(useLang?.errorMessages.name);
      isValid = false;
    } else {
      setNameError("");
    }

    if (!secondName) {
      setSecondNameError(useLang?.errorMessages.secondName);
      isValid = false;
    } else {
      setSecondNameError("");
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!email.match(emailRegex)) {
      setEmailError(useLang?.errorMessages.email);
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phoneNumber) {
      setPhoneNumberError(useLang?.errorMessages.phone);
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    if (cvFiles.length === 0) {
      setCvFilesError(useLang?.errorMessages.cv);
      isValid = false;
    } else {
      setCvFilesError("");
    }

    if (otherFiles.length === 0) {
      setOtherFilesError(useLang?.errorMessages.otherFiles);
      isValid = false;
    } else {
      setOtherFilesError("");
    }

    return isValid;
  };
  useEffect(() => {
    if (!isThereError) {
      validateForm();
    }
  }, [useLang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsThereError(true);
      emailjs
        .sendForm(
          "service_qjgygvr", // استبدل هذا بالـ Service ID الخاص بك من EmailJS
          "template_xiq89fs", // استبدل هذا بالـ Template ID الخاص بك من EmailJS
          formRef.current,
          "5NjPRFdekgZU4N5zq" // استبدل هذا بالـ Public Key الخاص بك من EmailJS
        )
        .then(
          (result) => {
            openModal();
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setIsThereError(false);
    }
  };

  const handleCvDrop = (acceptedFiles) => {
    setCvFiles(acceptedFiles);
  };

  const handleOtherFilesDrop = (acceptedFiles) => {
    setOtherFiles(acceptedFiles);
  };

  const closeModal = () => {
    setModalOpen(false);
    // window.location.reload();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg border border-[#C1C1C1]">
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
      <h2 className="text-2xl text-black font-bold mb-4">
        {useLang?.career?.form[0]}
      </h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 justify-between">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {useLang?.career?.form[1]}{" "}
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-[10px] p-2 focus:outline-none focus:ring focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <p className="text-red-500 text-xs my-1">{nameError}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {useLang?.career?.form[2]}{" "}
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              name="secondName"
              className="mt-1 block w-full border border-gray-300 rounded-[10px] p-2 focus:outline-none focus:ring focus:ring-blue-500"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
            {secondNameError && (
              <p className="text-red-500 text-xs my-1">{secondNameError}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {useLang?.career?.form[3]} <span className="text-red-500"> *</span>
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-[10px] p-2 focus:outline-none focus:ring focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 text-xs my-1">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {useLang?.career?.form[4]} <span className="text-red-500"> *</span>
          </label>
          <div className="w-[100%]" dir="ltr">
            <PhoneInput
              className="w-full"
              required
              name="phone"
              placeholder={useLang.planForm.phone}
              defaultCountry="ae"
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
            />
          </div>
          {phoneNumberError && (
            <p className="text-red-500 text-xs my-1">{phoneNumberError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {useLang?.career?.form[5]}
          </label>
          <input
            type="url"
            name="linkedInProfile"
            className="mt-1 block w-full border border-gray-300 rounded-[10px] p-2 focus:outline-none focus:ring focus:ring-blue-500"
            value={linkedInProfile}
            onChange={(e) => setLinkedInProfile(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {useLang?.career?.form[6]}
          </label>
          <input
            type="text"
            name="otherLinks"
            className="mt-1 block w-full border border-gray-300 rounded-[10px] p-2 focus:outline-none focus:ring focus:ring-blue-500"
            value={otherLinks}
            onChange={(e) => setOtherLinks(e.target.value)}
          />
        </div>
        <FileUpload
          useLang={useLang}
          label={useLang?.career?.form[7]}
          subLabel={useLang?.career?.form[8]}
          onDrop={handleCvDrop}
          required={true}
          isMultiple={false}
          files={cvFiles}
          setFiles={setCvFiles}
        />
        {cvFilesError && (
          <p className="text-red-500 text-xs my-1">{cvFilesError}</p>
        )}
        <FileUpload
          useLang={useLang}
          label={useLang?.career?.form[9]}
          subLabel={useLang?.career?.form[10]}
          onDrop={handleOtherFilesDrop}
          required={true}
          files={otherFiles}
          setFiles={setOtherFiles}
        />
        {otherFilesError && (
          <p className="text-red-500 text-xs my-1">{otherFilesError}</p>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2 text-white border border-[#00A7E1] rounded-[11px] py-2 rounded-md bg-[#00A7E1] hover:bg-white hover:text-[#00A7E1] transition duration-300 mt-2 md:mt-0"
          >
            {useLang?.career?.form[11]}
          </button>
        </div>
      </form>
    </div>
  );
}
