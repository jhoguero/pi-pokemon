import {
  GET_BY_NAME,
  GET_POKEMONS,
  GET_DETAILS,
  CLEAN_DETAILS,
  GET_TYPES,
  TYPE_FILTER,
} from "../actions";

let initialState = { allPokemons: [], pokemonCopy: [], posts: [], details: {}, types: [], filter: 'all'}; //objetos

//funcion para ejecutar dependiendo de la accion solicitada
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload, // devuelve una araid con todos los pokemon
        pokemonCopy: action.payload, // la copia del filtrado y no alterar el original
      };

    case GET_BY_NAME:
      return {
        ...state,
        allPokemons: action.payload, // devuelve una araid con el pokemon llamado por el nombre
      };

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAN_DETAILS:
      return { ...state, details: {} };

    case GET_TYPES:
      return { ...state, types: action.payload };

    case TYPE_FILTER:
      if (action.payload === "all") {
        return {
          ...state,
          allPokemons: state.pokemonCopy,
          filter: action.payload,
        };
      } else {
        return {
          ...state,
          filter: action.payload,
          allPokemons: state.pokemonCopy.filter((p) => {
            return p.types.filter((t) => t.name === action.payload).length;
          }),
        };
      }

    default:
      return state;
  }
}

export default rootReducer;
