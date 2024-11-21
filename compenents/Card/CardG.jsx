import React from "react";
import Card from "./Card";
import "./CardG.css";
import logementsData from "../../assets/logements.json"; 

const CardGrid = () => {
  return (
    <div className="card-grid">
      {logementsData.map(logement => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
};

export default CardGrid;

