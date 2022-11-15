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
        <label htmlFor="name"><h2> Chore Name: </h2></label>
        <input type= 'text' id= 'name' value={name} onChange={e => setname(e.target.value)}/>

        <label htmlFor="image"><h2> Picture URL: </h2></label>
        <input id="image" value={image} onChange={e => setimage(e.target.value)}/>

        <label htmlFor="time"><h2> Time completed: </h2></label>
        <input id="time" value={time} onChange={e => settime(e.target.value)}/>

        <button type="submit"> Create </button>
      </form>
    </section>
  )
}

export default CreateChore;