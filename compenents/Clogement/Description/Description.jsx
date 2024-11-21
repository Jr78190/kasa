import React, { useState } from 'react';
import './Description.css';

const Description = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="description-all">
      <div className="description-label">
        <h4>Description</h4>
        <span className={`select-icon ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>∧</span>
      </div>
      {isOpen && <div className="description-text">{description}</div>}
    </div>
  );
};

export default Description;

