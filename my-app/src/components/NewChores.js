import React, { useState } from "react";

function CreateChore({addChore}) {
  const [information, setinformation] = useState("")
  const [time, settime] = useState("")
  const [image, setimage] = useState("")


  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>New Chore</h2>
      <label> Chore </label>
      <div>
      <input
        type= 'text'
        id = 'information'
        value = {information}
        onChange = {(e) => setinformation(e.target.value)}
        />
      </div>
      <label> image </label>
      <div>
        <input
        type= 'text'
        id = 'image-information'
        value = {image}
        onChange = {(e) => setimage(e.target.value)}
        />
      </div>
      <label> Time </label>
      <div>
        <input
        type= 'text'
        id = 'time-information'
        value = {time}
        onChange = {(e) => settime(e.target.value)}
        />
      </div>
        <button type="submit"> Add Chore </button>
    </form>
  );
}

export default CreateChore;