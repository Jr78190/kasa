import React, { useState } from 'react';
import './Equipements.css';

const Equipements = ({ equipements }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="equipement-all">
       <div className="equipement-label">
          <h4>Équipements</h4>
          <span className={`select-icon ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>∧</span>
        </div>
        {isOpen && (
        <ul className="equipement-text">
          {equipements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Equipements;

