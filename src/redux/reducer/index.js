import {
  GET_POKEMONS,
  GET_API_POKEMONS,
  GET_TYPES,
  GET_BY_NAME,
  FILTER_BY_TYPE,
  FILTER_BY_CREATOR,
  SORT_BY_ATTACK,
  SORT_BY_NAME,
  CREATE_POKEMON,
  DELETE_POKEMON,
  UPDATE_POKEMON,
  CLEAR_DETAIL,
  CLEAR_MESSAGE,
} from "../actions/types.js";

import { filter, sorter } from "../reducer/helper";

const initialState = {
  pokemons: [],
  pokeSelected: [],
  message: [],
  types: [],
  pokemonDetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_API_POKEMONS: {
      return {
        ...state,
        message: action.payload,
      };
    }

    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
        pokeSelected: action.payload,
      };
    }

    case GET_TYPES: {
      return {
        ...state,
        types: action.payload,
      };
    }

    case GET_BY_NAME: {
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    }
    //NESTED FILTER
    case FILTER_BY_CREATOR: {
      const stateFiltered =
        action.payload === "all" || action.payload === "- - -"
          ? state.pokemons
          : filter(action.payload, [...state.pokeSelected]);

      return {
        ...state,
        pokeSelected: stateFiltered,
      };
    }

    case FILTER_BY_TYPE: {
      const stateFiltered =
        action.payload === "all" || action.payload === "- - -"
          ? state.pokemons
          : filter(action.payload, [...state.pokeSelected]);

      return {
        ...state,
        pokeSelected: stateFiltered,
      };
    }

    case SORT_BY_NAME: {
      return {
        ...state,
        pokeSelected: sorter(action.payload, [...state.pokeSelected]),
      };
    }

    case SORT_BY_ATTACK: {
      return {
        ...state,
        pokeSelected: sorter(action.payload, [...state.pokeSelected]),
      };
    }

    case CREATE_POKEMON: {
      return { ...state, message: action.payload };
    }

    case DELETE_POKEMON: {
      return { ...state, message: action.payload };
    }

    case UPDATE_POKEMON: {
      return { ...state, message: action.payload };
    }

    case CLEAR_DETAIL: {
      return { ...state, pokemonDetail: [] };
    }

    case CLEAR_MESSAGE: {
      return { ...state, message: [] };
    }

    default:
      return state;
  }
}
