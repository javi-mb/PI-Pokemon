import {
  GET_POKEMONS,
  GET_ALL_TYPES,
  SET_CURRENT_PAGE,
  FILTER_CREATED,
  GET_POKEMON_NAME,
  GET_DETAILS,
  CLEAN_POKEMONS,
  SORT_POKEMONS,
} from "../actions/actionsTypes";

import { filterPokemons, sortPokemons } from "./utils";

const initialState = {
  pokemons: [],
  allPokemons: [],
  currentPage: 0,
  types: [],
  pokeDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //--------- TRAER DATOS --------------

    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case GET_POKEMON_NAME:
      let filterName = action.payload;
      if (filterName <= 0) {
        window.location.href = "http://localhost:3000/404";
      }
      return {
        ...state,
        pokemons: filterName,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        pokeDetail: action.payload,
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case CLEAN_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        pokeDetail: action.payload,
      };

    //------------------------------
    //------------- FILTROS--------------

    case FILTER_CREATED:
      let copy = state.allPokemons;
      let createdFiltered =
        action.payload === "All" ? copy : filterPokemons(action.payload, copy);
      if (createdFiltered.length <= 0) {
        window.location.href = "http://localhost:3000/404";
      }

      return {
        ...state,
        pokemons: createdFiltered,
      };

    //------- ORDENAMIENTOS-----------

    case SORT_POKEMONS:
      return {
        ...state,
        pokemons: sortPokemons(action.payload, state.pokemons),
      };

    //-----------CREAR POKEMON----------

    default:
      return { ...state };
  }
};

export default rootReducer;
