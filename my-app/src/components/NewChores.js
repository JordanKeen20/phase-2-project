import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function CreateChore() {
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [time, settime] = useState("")
  

  const history = useHistory();

  function handleSubmittion(e) {
    e.preventDefault()
    const infoData = {
      chore: { name, image, time }
    }
    fetch("http://localhost:4000/chores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(infoData)
    })
      .then(response => response.json())
      .then(data =>{
        history.push(`http://localhost:4000/chores/${data.chores.id}`)
      })
  }

  return (
    <section id='form'>
      <h3> Add new Chore to list </h3>
      <form onSubmit={handleSubmittion}>
        <label htmlFor="name">Chore Name: </label>
        <input type= 'text' id= 'name' value={name} onChange={e => setname(e.target.value)}/>

        <label htmlFor="image"> Picture: </label>
        <input id="image" value={image} onChange={e => setimage(e.target.value)}/>

        <label htmlFor="time"> Time completed: </label>
        <input id="time" value={time} onChange={e => settime(e.target.value)}/>
      </form>
    </section>
  )
}

export default CreateChore;