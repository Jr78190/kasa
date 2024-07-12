import React from "react";
import Card from "./Card";
import "./CardG.css";

const CardGrid = () => {
  const cards = [
    { title: "Titre de la location " },
    { title: "Titre de la location " },
    { title: "Titre de la location " },
    { title: "Titre de la location " },
    { title: "Titre de la location " },
    { title: "Titre de la location " },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} />
      ))}
    </div>
  );
};

export default CardGrid;
