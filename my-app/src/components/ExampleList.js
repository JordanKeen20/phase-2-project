import React, { useEffect, useState } from "react";
import CreateList from "./NewChores";


function ExampleList({list, deleteChores, updatedChores}) {

  const [chores, setChores] = useState ('')
 

  useEffect(() => {
    fetch(`http://localhost:4000/chores`)
      .then((r) => r.json())
      .then(data => setChores(data) )
  }, [])

  if (!list) return <h2> Wait one moment please! </h2>


  return (
    <div>
      <h2> Chore List </h2>
      <ul>
        {list.map((list) => (
          <CreateList 
          key = {list.id} 
          list ={list} 
          deleteChores = {deleteChores} 
          updatedChores ={updatedChores}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExampleList;