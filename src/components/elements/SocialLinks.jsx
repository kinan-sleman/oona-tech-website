import React, { useState } from "react";
import {
  emailBorder,
  emailIcon,
  facebook,
  facebookBorder,
  instagram,
  instagramBorder,
  linkedBorder,
  linkedin,
  whatsapp,
  whatsappBorder,
} from "../../assets";

const SocialLinks = () => {
  const [hovered, setHovered] = useState("");

  const links = [
    {
      href: "https://wa.me/971508936752",
      borderImage: whatsappBorder,
      hoverImage: whatsapp,
      alt: "WhatsApp",
    },
    {
      href: "mailto:info@oonatech.com",
      borderImage: emailBorder,
      hoverImage: emailIcon,
      alt: "Email",
    },
    {
      href: "https://www.facebook.com/oonatech",
      borderImage: facebookBorder,
      hoverImage: facebook,
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/oonatech/",
      borderImage: instagramBorder,
      hoverImage: instagram,
      alt: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/oona-tech",
      borderImage: linkedBorder,
      hoverImage: linkedin,
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="flex items-center gap-5 ">
      {links.map((link, index) => (
        <a
          key={index}
          target="_blank"
          href={link.href}
          className={`hover:border transition-all duration-500 md:w-9 md:h-9 w-8 h-8 rounded-full border border-1 border-gray-400
            ${link.alt === "WhatsApp" && " hover:bg-[#46D287]"}
            ${link.alt === "Email" && " hover:bg-[#9563FF]"}
            ${link.alt === "Facebook" && " hover:bg-[#00A7E1]"}
            ${link.alt === "Instagram" && " hover:bg-[#FF5F5F]"}
            ${link.alt === "LinkedIn" && " hover:bg-[#253368]"}
           flex items-center justify-center`}
          onMouseEnter={() => setHovered(link.alt)}
          onMouseLeave={() => setHovered("")}
        >
          <img
            src={hovered === link.alt ? link.hoverImage : link.borderImage}
            alt={link.alt}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
