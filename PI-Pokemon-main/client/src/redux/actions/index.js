import axios from "axios";

import {
  GET_POKEMONS,
  GET_ALL_TYPES,
  FILTER_CREATED,
  GET_POKEMON_NAME,
  GET_DETAILS,
  CLEAN_POKEMONS,
  SORT_POKEMONS,
} from "./actionsTypes";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/pokemons";
      let json = await axios.get(url);
      return dispatch({
        type: GET_POKEMONS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const cleanPokemons = (dispatch) => {
  return dispatch({
    type: CLEAN_POKEMONS,
    payload: [],
  });
};

export const getAlltypes = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/types";
      let json = await axios.get(url);
      return dispatch({
        type: GET_ALL_TYPES,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const sortPokemons = (payload) => {
  return {
    type: SORT_POKEMONS,
    payload,
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      var json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: json.data,
      });
    } catch (e) {
      window.location.href = "http://localhost:3000/404";
      console.log(e);
    }
  };
};

export function getDetail(id) {
  return async function (dispatch) {
    const pokeDetail = (await axios.get(`http://localhost:3001/pokemons/${id}`))
      .data;
    return dispatch({
      type: GET_DETAILS,
      payload: pokeDetail,
    });
  };
}

export const postPokemon = (payload) => {
  return async () => {
    try {
      var createPoke = await axios.post(
        "http://localhost:3001/pokemons",
        payload
      );
      console.log(createPoke);
      alert("New pokemón is created!");
      return createPoke;
    } catch (e) {
      alert("Pokemon name already exist");
      console.log(e);
    }
  };
};
