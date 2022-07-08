import React from "react";
import error from "../../img/errorThree.gif";
import style from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to="/home">
          <span className={style.navTitle}>
            <button className={style.navBtn}>POKEWEB</button>
          </span>
        </Link>
      </div>
      <div className={style.containerImg}>
        <img src={error} alt="" />
      </div>
    </div>
  );
};

export default Error;
