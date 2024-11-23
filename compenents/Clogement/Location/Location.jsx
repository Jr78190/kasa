import React from "react";
import "./Location.css";

const Location = ({ location }) => {
  return (
    <div className="location">
      <p>{location}</p>
    </div>
  );
};

export default Location;
