import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, setCurrentPage } from "../../redux/actions";
import style from "./SearchBar.module.css";
import lupa from "../../img/lupa.ico";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      dispatch(getPokemonByName(name));
      setName("");
      dispatch(setCurrentPage(0));
    } else {
      alert("Write a pokemon");
    }
  };

  return (
    <div>
      <form
        className={style.searchBar}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className={style.input}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={name}
        />
        <button className={style.btn} type="submit">
          <img src={lupa} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
