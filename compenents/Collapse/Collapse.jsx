import React, { useState } from 'react';
import './Collapse.css'


const ViewAccount = ({ label, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-all">
      <div className="collapse-label" onClick={toggleOpen}>
        {label}
        <span className={`select-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '∧' : '∨'}
        </span>
      </div>
      {isOpen && <div className="collapse-text ">{description}</div>}
    </div>
  );
};

export default ViewAccount;

