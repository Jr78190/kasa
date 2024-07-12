import React from "react";
import "./Card.css"; 
import { Link } from "react-router-dom";

function Card({ title }) {
  return (
  <div className="card-all">
    <Link to="/logement" className="card">
      <div className="card-content">
        <p className="card-title">{title}</p>
      </div>
    </Link>
  </div>  
  );
}

export default Card;
