import React from "react";
import "./Card.css"; 
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <div className="card-all">
      <Link to={`/logement/${id}`} className="card">
        <div className="card-cover-container">
          <img src={cover} alt={title} className="card-cover" />
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
        </div>
      </Link>
    </div>  
  );
}

export default Card;
