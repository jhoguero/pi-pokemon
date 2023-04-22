import { Link } from "react-router-dom";
import TypesFilter from "../TypesFilter/TypesFilter";

import "./Navbar.css";
import logo from "../../assets/Pokemon-Logo.png";

//los handel son traidas del componente home para el render en busqueda y filtrado
function Navbar({ handleChange, handleSubmit, setPage }) {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Pokémon" className="logo" />
      <form onChange={handleChange}>
          <input placeholder="Busqueda" type="search" className="input-search" />
          <button type="submit" onClick={handleSubmit} className="button">
            BUSCAR
          </button>
      </form>
      <div className="types">
        <TypesFilter setPage={setPage} />
      </div>
    </div>
  );
}

export default Navbar;
