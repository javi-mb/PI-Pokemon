import React from "react";
import { Link } from "react-router-dom";
import style from "./PokemonCreate.module.css";
import exito from "../../img/pokemonCreate.gif";

const Success = () => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to="/home">
          <span className={style.navTitle}>
            <button className={style.navBtn}>POKEWEB</button>
          </span>
        </Link>
      </div>
      <div className={style.containerImgCreated}>
        <img src="https://i.gifer.com/embedded/download/DD0.gif" />
        <span>pokemon created!</span>
      </div>
    </div>
  );
};

export default Success;
