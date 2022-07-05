import React, { useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Cards.module.css";

const Cards = ({ allPokemons, currentPage, setCurrentPage }) => {
  //const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <Pagination
        allPokemons={allPokemons.length}
        setCurrentPage={setCurrentPage}
      />
      <div className={style.container}>
        {allPokemons.map((e, i) => {
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
      <Pagination
        allPokemons={allPokemons.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Cards;
