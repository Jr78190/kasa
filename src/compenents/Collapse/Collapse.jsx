import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ label, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-all">
      <div className="collapse-label">
        {label}
        <span className={`select-icon ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>∧</span>
      </div>
      {isOpen && <div className="collapse-text">{description}</div>}
    </div>
  );
};

export default Collapse;

