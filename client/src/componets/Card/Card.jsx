import { Link } from "react-router-dom";

import "./Card.css";

function Card({ pokemon }) {
  const { id, name, img, attack, types } = pokemon;

  return (
    <div className="card-container">
      <Link to={`details/${id}`}>
        <div className="image">
          <img src={img} alt="imagenpoke" />
        </div>
        <div className="info">
          <h2>{name.toUpperCase()}</h2>
          <h2>
            {types
              ?.map((t) => {
                return t.name;
              })
              .join(", ")}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
