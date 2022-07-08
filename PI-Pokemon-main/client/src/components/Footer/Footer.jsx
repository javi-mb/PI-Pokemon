import React from "react";
import mail from "../../img/iconMail.png";
import github from "../../img/iconGithub.png";
import linkedin from "../../img/iconIn.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li>
          <a href="mailto:jh.martinezblanco@gmail.com">
            <img src={mail} alt="correo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/javi-mb">
            <img src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/javiermartinezblanco/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
