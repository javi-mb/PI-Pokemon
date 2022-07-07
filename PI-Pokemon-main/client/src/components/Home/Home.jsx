import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPokemons, getPokemons } from "../../redux/actions";
import Filters from "../Filters/Filters";
import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import style from "./Home.module.css";
import Cards from "../Cards/Cards";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  const [, /*refreshState*/ setRefreshState] = useState(false);

  useEffect(() => {
    dispatch(getPokemons());
    return () => {
      dispatch(cleanPokemons(dispatch));
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className={style.body}>
      {allPokemons.length > 0 ? (
        <div>
          <Nav handleClick={handleClick} />
          <div>
            <div>
              <Filters setRefreshState={setRefreshState} />
            </div>
            <div>
              <Cards allPokemons={allPokemons} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
