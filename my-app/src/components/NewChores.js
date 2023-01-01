import React, { useState } from "react";
import { useHistory } from "react-router-dom";

 
const timesOffered = ["7:00 am","8:00 am","9:00 am","10:00 am","11:00 am","12:00 pm","1:00pm", "2:00pm","3:00 pm","4:00 pm","5:00 pm","6:00 pm","7:00 pm",]

function CreateChore() {
  const [name, setName] = useState("")
  const [image, setimage] = useState('')
  const [time, setTime] = useState([])
  

  const history = useHistory();

  function handleSubmittion(e) {
    e.preventDefault()
    const infoData = {
        list:{name, image, time }
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
        history.push(`/chores/${data.id}`)
      })
  }

    const checkedboxes = timesOffered.map(times => {
      const label = times.toLowerCase()
      const checked = time.includes(times)
      function handleChanges(e){
        if (e.target.checked){
          setTime(time =>[...time, times])
        } else {
          setTime( time => time.filter (t => t !== times))
        }
      }
      return(
        <div key = {times}>
          <input
             type="checkbox" 
             name={label} 
             id={label} 
             checked={checked} 
             onChange={handleChanges} 
         />
         <label htmlFor={label}>{times}</label>
        </div>
      );
    })

  return (
    <section id='form'>
      <h3> Add new Chore to list </h3>
      <form onSubmit={handleSubmittion}>
        <label htmlFor="name"><h2> Chore Name: </h2></label>
        <input type= 'text' id= 'name' value={name} onChange={e => setName(e.target.value)}/>

        <label htmlFor="image"><h2> Picture URL: </h2></label>
        <input id="image" value={image} onChange={e => setimage(e.target.value)}/>

        <fieldset>
                    <legend> Times needed to be completed</legend>
                    {checkedboxes}
                                     
                </fieldset>

        <button type="submit"> Create </button>
      </form>
    </section>
  )
}

export default CreateChore;