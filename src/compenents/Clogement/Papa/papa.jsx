// ParentComponent.js

import React from "react";
import Rating from "../Rating/Rating"
import Host from "../Host/Host"
import "./papa.css";

const ParentComponent = ({ logement }) => (
  <div className="logement-host">
    <Host host={logement.host} />
    <Rating rating={logement.rating} />
  </div>
);

export default ParentComponent;
