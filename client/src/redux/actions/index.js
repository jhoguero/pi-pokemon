import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const GET_TYPES = 'GET_TYPES';
export const TYPE_FILTER = 'TYPE_FILTER';

export function getPokemons() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/pokemons"); //respuesta del llamado a la api todos los pokemon
    return dispatch({
      type: "GET_POKEMONS", // el tipo varia segun el tipo (get,post)
      payload: response.data, //repuesta del llamado todo los POKEMON
    });
  };
}

export function getByname(name) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/pokemons?name=${name}`); //respuesta del llamado a la api por nombre
    return dispatch({
      type: "GET_BY_NAME", // el tipo GET
      payload: response.data, //repuesta del llamado todo los POKEMON
    });
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/pokemons/${id}`);
    return dispatch({
      type: "GET_DETAILS",
      payload: response.data,
    });
  };
}

export const cleanDetails = () => {
  return { type: CLEAN_DETAILS };
};


export function getTypes(types) {
  return async function(dispatch){
  const response = await axios ('http://localhost:3001/types')
    return dispatch({
      type: "GET_TYPES",
      payload: response.data,
    })
  } 
};

export const typeFilter = (filter) => {
  return { type: TYPE_FILTER, payload: filter };
};
