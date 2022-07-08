import React, { useEffect, useState } from "react";
import { getAlltypes, postPokemon, cleanPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import style from "./PokemonCreate.module.css";
import logoImg from "../Filters/types";
import { validate, valuesSubmit } from "./utils";

const PokemonCreate = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAlltypes());
  }, [dispatch]);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    img: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (input.types.includes(e.target.value)) {
      alert("ya tiene ese tipo");
    } else {
      if (input.types.length < 2) {
        setInput({
          ...input,
          types: [...input.types, e.target.value],
        });
        e.target.value = "Select type";
      } else {
        alert("Two types of pokemon at most");
        e.target.value = "Select type";
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.hp && !errors.img && input.types.length > 0) {
      dispatch(postPokemon(valuesSubmit(input)));
      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        img: "",
      });
      dispatch(cleanPokemons(dispatch));
    } else {
      if (input.types.length <= 0) {
        alert("Faltan types");
      } else {
        alert("Error. Check the form");
      }
    }
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
  };

  const handleError = (e) => {
    e.preventDefault();
    alert("Complete the form");
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to="/home">
          <span className={style.navTitle}>
            <button className={style.navBtn}>POKEWEB</button>
          </span>
        </Link>
      </div>
      <div className={style.main}>
        <div className={style.card}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className={style.title}>
              <h2>Create your pokemón!</h2>
            </div>
            <div className={style.containerInput}>
              <div className={style.containerRight}>
                <input
                  autocomplete="off"
                  className={style.input}
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Name"
                />
                <p>{errors.name}</p>

                <input
                  className={style.input}
                  type="number"
                  value={input.hp}
                  name="hp"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="HP"
                />
                <p>{errors.hp}</p>

                <input
                  className={style.input}
                  type="number"
                  value={input.attack}
                  name="attack"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Attack"
                />
                <p>{errors.attack}</p>

                <input
                  className={style.input}
                  type="number"
                  value={input.defense}
                  name="defense"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Defense"
                />
                <p>{errors.defense}</p>
              </div>
              <div className={style.containerLeft}>
                <input
                  className={style.input}
                  type="number"
                  value={input.speed}
                  name="speed"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Speed"
                />
                <p>{errors.speed}</p>

                <input
                  className={style.input}
                  type="number"
                  value={input.height}
                  name="height"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Height"
                />
                <p>{errors.height}</p>

                <input
                  className={style.input}
                  type="number"
                  value={input.weight}
                  name="weight"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Weight"
                />
                <p>{errors.weight}</p>

                <input
                  autocomplete="off"
                  className={style.input}
                  type="text"
                  value={input.img}
                  name="img"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="URL Image..."
                />
                <p>{errors.img}</p>
              </div>
            </div>
            <div className={style.containerTypes}>
              <div className={style.typesLeft}>
                <select
                  className={style.select}
                  onChange={(e) => {
                    handleSelect(e);
                  }}
                >
                  <option>Select type</option>
                  {types?.map((e) => {
                    return (
                      <option key={e.id} value={e.name}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={style.typesRight}>
                {input.types.map((e) => {
                  return (
                    <div className={style.typeSelect} key={e}>
                      <p>{e}</p>
                      <button
                        onClick={() => {
                          handleDelete(e);
                        }}
                      >
                        x
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            {input.name !== "" ? (
              <button className={style.btn} type="submit">
                Create!
              </button>
            ) : (
              <button onClick={handleError} className={style.btn}>
                Create!
              </button>
            )}
          </form>
        </div>

        {/* MUESTRA */}

        <div className={style.card}>
          <div className={style.containerImg}>
            {input.img === "" ? (
              <div></div>
            ) : (
              <img src={input.img} className={style.img} />
            )}
          </div>
          <div className={style.containerName}>
            <h2>{input.name}</h2>
          </div>
          <div className={style.containerType}>
            {input.types?.map((e, k) => {
              return (
                <div key={k}>
                  <img src={logoImg[e]} alt={`Logo ${e}`} />
                  <p>{e}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCreate;
