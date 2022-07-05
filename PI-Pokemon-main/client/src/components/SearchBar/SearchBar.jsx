import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, cleanPokemons } from "../../redux/actions";
import style from "./SearchBar.module.css";
import lupa from "../../img/lupa.ico";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    //console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanPokemons(dispatch));
    if (name !== "") {
      dispatch(getPokemonByName(name));
    } else {
      return alert("hola");
    }
    // setName("");
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
