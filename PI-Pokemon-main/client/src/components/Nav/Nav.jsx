import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({ handleClick }) => {
  return (
    <div className={style.containter}>
      <nav className={style.nav}>
        <div>
          <SearchBar />
        </div>
        <div>
          <Link to="/home">
            <span className={style.title}>
              <button className={style.btn} onClick={(e) => handleClick(e)}>
                POKEWEB
              </button>
            </span>
          </Link>
        </div>
        <div>
          <Link to="/create">
            <button className={style.createBtn}>Create a pokemon</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
