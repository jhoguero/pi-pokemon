import { GET_BY_NAME, GET_POKEMONS } from "../actions";



let initialState = {allPokemons:[], pokemonCopy:[], posts:[]} //objetos

//funcion para ejecutar dependiendo de la accion solicitada 
function rootReducer(state = initialState,action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload, // devuelve una araid con todos los pokemon
                pokemonCopy: action.payload, // la copia del filtrado y no alterar el original
            };

        case GET_BY_NAME:
            return{
                ...state,
                allPokemons: action.payload, // devuelve una araid con el pokemon llamado por el nombre
            }
        
        default:
            return state;
    }
}

export default rootReducer;