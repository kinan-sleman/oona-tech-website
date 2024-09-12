import React from "react";
import { clock } from "../../assets";
import { Link } from "react-router-dom";

const JobCard = ({
  key = 0,
  id = 0,
  title,
  jobType,
  date,
  description,
  technologies,
  button_text,
}) => {
  return (
    <div key={key} className="bg-[#F8FBFF] shadow-md rounded-lg p-5">
      <h2 className="text-xl font-bold text-[#202020]">{title}</h2>
      <p className="text-[#787878] flex gap-4">
        {jobType}{" "}
        <div className="flex gap-1 items-center">
          <img src={clock} alt="" /> {date}
        </div>
      </p>
      <p className="mt-2 text-[#787878]">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#ECF8FA] text-[#323232] text-sm font-medium px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Link to={`/career-info/${id}`}>
          <button className="mt-4 bg-[#E0F3F7] text-[#00A7E1] transition-all duration-200 py-2 px-4 rounded hover:bg-[#00A7E1] hover:text-[#E0F3F7]">
            {button_text}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
