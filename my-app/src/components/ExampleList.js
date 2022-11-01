import React, { useEffect, useState } from "react";


function ExampleList({list}) {
 

  useEffect(() => {
    fetch(`http://localhost:4000/chores`)
      .then((r) => r.json())
      .then(data => setList(data.chores) )
  }, [])

  if (!list) return <h2> Wait one moment please! </h2>


  return (
    <section>
      <div className="card">
        <h1>{name}</h1>
        <p>{time}</p>
        <img src={image} alt ="chore"/>
      </div>
    </section>
  );
}

export default ExampleList;