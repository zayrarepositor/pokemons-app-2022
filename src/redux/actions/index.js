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
} from "./types";

import axios from "axios";

//BEFORE DEPLOY=> const url = "http://localhost:3001/pokemons";
const url = "https://pokemons-2022.herokuapp.com/pokemons";

//THUNK FUNCTION
export function getApiPokemons(number) {
  return async function (dispatch) {
    try {
      const pokemons = await axios.get(url + `?fill=${number}`);
      return dispatch({
        type: GET_API_POKEMONS,
        payload: pokemons.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//THUNK FUNCTION
export function getPokemons() {
  return async function (dispatch) {
    try {
      const pokemons = await axios.get(url);
      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//THUNK FUNCTION
const typesurl = "https://pokemons-2022.herokuapp.com/types";

export function getTypes() {
  return async function (dispatch) {
    try {
      const types = await axios.get(typesurl);
      return dispatch({
        type: GET_TYPES,
        payload: types.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//THUNK FUNCTION
export function getPokeByName(name) {
  return async function (dispatch) {
    try {
      const pokemon = await axios.get(url + `?name=${name}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: pokemon.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByCreator(payload) {
  return {
    type: FILTER_BY_CREATOR,
    payload,
  };
}

export function filterByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}

export function sortByName(payload) {
  return {
    type: SORT_BY_NAME,
    payload,
  };
}

export function sortByAttack(payload) {
  return {
    type: SORT_BY_ATTACK,
    payload,
  };
}

//THUNK FUNCTION
export function createPokemon(data) {
  return async function (dispatch) {
    try {
      const pokemon = await axios.post(url, data);
      return dispatch({
        type: CREATE_POKEMON,
        payload: pokemon.data,
      });
    } catch (error) {
      return error;
    }
  };
}

//THUNK FUNCTION
export function deletePokemon(id) {
  return async function (dispatch) {
    try {
      const pokemon = await axios.delete(url + `/${id}`);
      return dispatch({
        type: DELETE_POKEMON,
        payload: pokemon.data,
      });
    } catch (error) {
      return error;
    }
  };
}

//THUNK FUNCTION
export function updatePokemon(id, data) {
  return async function (dispatch) {
    try {
      const pokemon = await axios.put(url + `/${id}`, data);
      return dispatch({
        type: UPDATE_POKEMON,
        payload: pokemon.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function clearDetail(payload) {
  return {
    type: CLEAR_DETAIL,
    payload,
  };
}

export function clearMessage(payload) {
  return {
    type: CLEAR_MESSAGE,
    payload,
  };
}
