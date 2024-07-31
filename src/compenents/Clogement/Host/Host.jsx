import React from "react";
import "./Host.css";

const Host = ({ host }) => (
  <div className="contained-host">
    <p className="name-host">{host.name}</p>
    <img className="img-host" src={host.picture} alt={host.name} />
  </div>
);

export default Host;
