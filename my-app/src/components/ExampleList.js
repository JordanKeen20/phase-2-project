import React, { useEffect, useState } from "react";

const URL = "http://localhost:4000/chores"

function ExampleList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/chores`)
      .then(r => r.json())
      .then(data => setList(data.chores) )
  }, [])

  if (!list) return <h2> Wait one moment please! </h2>

  const { name, image, time} = list

  return (
    <section>
      <div className="card">
        <h1>{name}</h1>
        <p>{time}</p>
        <img src={image} alt ="chore picture"/>
      </div>
    </section>
  );
}

export default ExampleList;