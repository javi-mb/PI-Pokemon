import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Cards.module.css";

const Cards = ({ allPokemons }) => {
  const currentPage = useSelector((state) => state.currentPage);

  return (
    <div>
      <Pagination allPokemons={allPokemons.length} />
      <div className={style.container}>
        {allPokemons?.map((e, i) => {
          if (i >= 12 * currentPage && i <= 12 * currentPage + 11) {
            return (
              <div key={e.id}>
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  image={e.img}
                  types={e.types}
                  attack={e.attack}
                />
              </div>
            );
          }
        })}
      </div>
      <Pagination allPokemons={allPokemons.length} />
    </div>
  );
};

export default Cards;
