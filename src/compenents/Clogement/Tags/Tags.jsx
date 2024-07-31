import React from "react";
import "./Tags.css";

const Tags = ({ tags }) => (
  <div className="all-tags">
    <ul className="list-tags">
      {tags.map((tag, index) => (
        <li className="item-tags" key={index}>{tag}</li>
      ))}
    </ul>
  </div>
);

export default Tags;
