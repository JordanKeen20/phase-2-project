import React from "react";
import { Link } from "react-router-dom";


function ExampleItem({ name, image, time }) {

 return(
  <div className="chore-items">
    <h1>{name}</h1>
    <img src={image} alt= "chore picture"/>
    <p>{time}</p>
  </div>
 )
}

export default ExampleItem;