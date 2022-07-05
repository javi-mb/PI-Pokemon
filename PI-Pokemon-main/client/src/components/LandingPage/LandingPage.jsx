import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>WELCOME TO THE</h1>
      <span className={style.poke}>POKEWEB</span>
      <Link to="/home">
        <div className={style.button}>
          <button className={style.iniciar}>
            <span>INICIAR</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
