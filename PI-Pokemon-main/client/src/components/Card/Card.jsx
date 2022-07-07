import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import logoImg from "../Filters/types";

export default function Card({ name, image, types, id, attack }) {
  return (
    <div className={style.container}>
      <Link style={{ textDecoration: "none" }} to={`/pokemon/${id}`}>
        <div>
          <div className={style.containerImg}>
            <img
              className={style.img}
              src={image}
              alt="img not found"
              width="200px"
              height="250px"
            />
          </div>
          <div className={style.containerName}>
            <h2>{name}</h2>
          </div>
          <div className={style.containerType}>
            {types?.map((e, k) => {
              return (
                <div key={k}>
                  <img src={logoImg[e.name]} alt={`Logo ${e.name}`} />
                  <p>{e.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
