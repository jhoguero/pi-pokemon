import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByname, getPokemons } from "../../redux/actions";
import Pagination from "../../componets/Paginado/Pagination";

import "./Home.css";
import Navbar from "../../componets/Navbar/Navbar";
import Cards from "../../componets/Cards/Cards";

const HomePage = () => {
  const dispatch = useDispatch();
  const PER_PAGE = 12;
  const [page, setPage] = useState(0);
  const allPokemons = useSelector((state) =>
    state.allPokemons.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)
  );
  // formula para paginar el cual hace el calculo dependiendo cuantos pomekemones se tenga

  const [searchString, setSearchString] = useState(""); //seteo de la busqeda de pokemon

  function handleChange(e) {
    setSearchString(e.target.value); // setea el target value de la busqueda
  }

  function handleSubmit(e) {
    e.preventDefault(); // para que refresque la pagina al momento de la busqueda
    dispatch(getByname(searchString)); // va buscar por el string que dispara el evento
    setSearchString("");
  }
  function handlePage(pag) {
    setPage(pag);
  }


  useEffect(() => {
    dispatch(getPokemons());
  }, []); //array de dependencia

  return (
    <section className="Home-wrapper">
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} setPage={setPage}/>
      <section className="home-container">
        <Cards allPokemons={allPokemons} />
        <Pagination page={page} perpage={PER_PAGE} handlePage={handlePage} />
      </section>
    </section>
  );
};

export default HomePage;
