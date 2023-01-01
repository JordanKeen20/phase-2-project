import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ChoreDetails(){

    const [choreList, setChoreList] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/chores/${id}`)
        .then(response => response.json())
        .then(chores => console(chores))
    }, [id])

    if (!choreList) return <h2> wait one moment please...</h2>

    const { name, image, time } = choreList



    return(
        <section>
            <div className="chore-items">
                <h1>{name}</h1>
                <img src= {image} alt="chore picture"/>
                <div className="time">{time}</div>
            </div>
        </section>
    )
}


export default ChoreDetails;