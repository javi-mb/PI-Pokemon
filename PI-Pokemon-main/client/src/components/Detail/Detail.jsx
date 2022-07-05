import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanPokemons } from "../../redux/actions";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import style from "./Detail.module.css";
import logoImg from "../Filters/types";

const Detail = () => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.pokeDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanPokemons(dispatch));
    };
  }, [dispatch, id]);

  return (
    <div className={style.body}>
      {myPokemon.length > 0 ? (
        <div>
          <div className={style.nav}>
            <Link to="/home">
              <span className={style.navTitle}>
                <button className={style.navBtn}>POKEWEB</button>
              </span>
            </Link>
          </div>
          <div className={style.container}>
            <div className={style.containerLeft}>
              <div className={style.containerImg}>
                <img
                  src={myPokemon[0].img}
                  alt="img not found"
                  height="350px"
                  width="300px"
                />
              </div>
            </div>
            <div className={style.containerRight}>
              <div className={style.containerName}>
                <h2>{myPokemon[0].name}</h2>
                <p>pokemon number: {myPokemon[0].id}</p>
              </div>
              <div className={style.containerInfo}>
                <div className={style.infoLeft}>
                  <h3>hp:</h3>
                  <p>{myPokemon[0].hp}</p>
                  <h3>attack:</h3>
                  <p>{myPokemon[0].attack}</p>
                  <h3>defense:</h3>
                  <p>{myPokemon[0].defense}</p>
                </div>
                <div className={style.infoRight}>
                  <h3>speed:</h3>
                  <p>{myPokemon[0].speed}</p>
                  <h3>height:</h3>
                  <p>{myPokemon[0].height}</p>
                  <h3>weight:</h3>
                  <p>{myPokemon[0].weight}</p>
                </div>
              </div>
              <div className={style.containerTypes}>
                {myPokemon[0].types.map((t) => {
                  return (
                    <div>
                      <img src={logoImg[t.name]} alt={`Logo ${t.name}`} />
                      <p>{t.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Detail;
