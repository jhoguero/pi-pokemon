import "./Navbar.css";

import logo from "../../assets/Pokemon-Logo.png";

//los handel son traidas del componente home para el render en busqueda y filtrado
function Navbar({ handleChange, handleSubmit }) {
  return (
    <div>
      <div className="nav-bar">
        <img src={logo} alt="Pokémon" className="logo" />
        <form onChange={handleChange}>
          <div>
            <input placeholder="Busqueda" type="search" />
            <button type="submit" onClick={handleSubmit}>
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
