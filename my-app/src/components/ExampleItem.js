import React from "react";

function ProjectItem({ name, img, time }) {

  return (
    <div className="chore-item">
      <h3>{name}</h3>
      <img className="sizing" src={img} alt= "chore"></img>
      <div className="timing">{time}</div>
    </div>
  );
}

export default ProjectItem;