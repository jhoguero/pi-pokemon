import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByname, getPokemons } from "../../redux/actions";

import "./Home.css";
import Navbar from "../../componets/Navbar/Navbar";
import Cards from "../../componets/Cards/Cards";

const HomePage = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons); //estara pendiente a cualquier cambio de estado(global)
  const [searchString, setSearchString] = useState("");
 // filtro Back

 function handleChange(e) {
  setSearchString(e.target.value); // setea el target value de la busqueda
}

function handleSubmit(e){
  e.preventDefault() // para que refresque la pagina al momento de la busqueda
  dispatch(getByname(searchString)) // va buscar por el string que dispara el evento
  setSearchString("")
}
 
 
  /* const [filtered, setFileted] = useState(allPokemons); //  copiado del filtrado para no alterar el original
  const [searchString, setSearchString] = useState(""); //

  function handleChange(e) {
    e.preventDefault(); // para que refresque la pagina al momento de la busqueda
    setSearchString(e.target.value); // setea el target value de la busqueda
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.tolowerCase().includes(searchString)
    ); // filtrado dentro de pokemons y devuelve con el nombre que se busca
    setFileted(filtered);
  } */

  useEffect(() => {
    dispatch(getPokemons());
    /* return (()=>{
      clearDetail() // sirve para en caso de salir del detale del pokemon: limpia el estado al salir de la pagina
    }) */
  }, []); //array de dependencia

  return (
    <section className="Home-wrapper">
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allPokemons={allPokemons} />
    </section>
  );
};

export default HomePage;
