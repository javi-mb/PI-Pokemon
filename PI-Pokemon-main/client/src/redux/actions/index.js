import axios from "axios";

import {
  GET_POKEMONS,
  GET_ALL_TYPES,
  SET_CURRENT_PAGE,
  FILTER_CREATED,
  GET_POKEMON_NAME,
  GET_DETAILS,
  CLEAN_POKEMONS,
  SORT_POKEMONS,
} from "./actionsTypes";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const url = "/pokemons";
      const info = await axios.get(url);
      return dispatch({
        type: GET_POKEMONS,
        payload: info.data,
      });
    } catch (e) {
      window.location.href = "https://pi-pokemon-sigma.vercel.app/404";
      console.log(e);
    }
  };
};

export const getAlltypes = () => {
  return async (dispatch) => {
    try {
      const url = "/types";
      const info = await axios.get(url);
      return dispatch({
        type: GET_ALL_TYPES,
        payload: info.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const url = `/pokemons?name=${name}`;
      var info = await axios.get(url);
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: info.data,
      });
    } catch (e) {
      window.location.href = "https://pi-pokemon-sigma.vercel.app/404";
      console.log(e);
    }
  };
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const url = `/pokemons/${id}`;
      const info = await axios.get(url);
      return dispatch({
        type: GET_DETAILS,
        payload: info.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export const postPokemon = (payload) => {
  return async () => {
    try {
      const createPoke = await axios.post("/pokemons", payload);
      window.location.href = "https://pi-pokemon-sigma.vercel.app/success";
      return createPoke;
    } catch (e) {
      window.location.href = "https://pi-pokemon-sigma.vercel.app/404";
      console.log(e);
    }
  };
};

export const cleanPokemons = () => {
  return {
    type: CLEAN_POKEMONS,
    payload: [],
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
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
