import React from "react";
import { useDropzone } from "react-dropzone";
import { upload } from "../../assets";

const FileUpload = ({
  useLang,
  label,
  required,
  subLabel,
  isMultiple = true,
  onDrop,
  files,
  setFiles,
}) => {
  const handleDrop = (acceptedFiles) => {
    if (isMultiple) {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    } else {
      setFiles(acceptedFiles);
    }
  };

  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      handleDrop(acceptedFiles);
      if (onDrop) {
        onDrop(acceptedFiles);
      }
    },
    multiple: isMultiple,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  return (
    <div className="mb-4">
      <label className="flex justify-between gap-2 mb-3 text-sm font-medium text-gray-700">
        <p>
          {label} {required && <span className="text-red-500">*</span>}
        </p>
        <p className="text-sm !text-[10px] text-[#B4B4B4]">
          {useLang?.career.fileTypes} : .pdf, .doc, .docx |{" "}
          {useLang?.career.max}: 2MB
        </p>
      </label>
      <div
        {...getRootProps()}
        className="border border-dashed bg-[#FBFBFB] border-[#00A7E1] rounded-md p-4 text-center cursor-pointer flex flex-col justify-center items-center"
      >
        <input {...getInputProps()} />
        <img src={upload} alt="" />
        <p className="text-[#00A7E1]">{subLabel}</p>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <ul className="list-disc list-inside">
            {files.map((file, index) => (
              <li
                key={index}
                className="text-gray-700 text-sm flex justify-between items-center"
              >
                <span>
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(file.name)}
                  className="text-red-500 ml-2"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
