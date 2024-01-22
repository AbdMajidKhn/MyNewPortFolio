import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abdmajidkhn/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        // href="https://github.com/PolarisStarhttps://github.com/AbdMajidKhn"
        // target="https://github.com/PolarisStarhttps://github.com/AbdMajidKhn"
        href="https://github.com/AbdMajidKhn"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
