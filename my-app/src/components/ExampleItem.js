import React from "react";



function ExampleItem({ name, choreImages, time }) {
  const timeList = time.map((times) => (
    <span key={times}>{times}</span>
  ));

 return(
  <div className="chore-items">
    <h1>{name}</h1>
    <img src={choreImages} alt= "chore"/>
    <p>{time}</p>
    <div className="timings">{timeList}</div>
  </div>
 )
}

export default ExampleItem;