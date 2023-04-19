import {Link} from "react-router-dom";

import "./Card.css";

function Card({ pokemon }) {
  const { id, name, img, attack, types, createdInDb } = pokemon;

  return (
    <div className="card-container">
	<Link to={`home/${id}`}>
      <h1 className="btn-card">X</h1>
      <img src={img} alt="imagenpoke" />
      <h2>Name:{name}</h2>
      <h2>Types:{types?.map(t=>{
        return t.name
      }).join(", ")}</h2>
	  </Link>
    </div>
  );
}

export default Card;
