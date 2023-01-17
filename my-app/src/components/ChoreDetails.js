import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ChoreDetails(){

    const [chore, setChore] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/chores/${id}`)
        .then(response => response.json())
        .then(data => setChore(data))
    }, [id])

    if (!chore) return <h2> wait one moment please...</h2>

    const { name, image, time } = chore

    const timeListings = time.map((times) => (
        <span key={times}>{times}</span>
    ));

    return(
        <section>
            <div className="chore-items">
                <h1>{name}</h1>
                <img className="sizing" src= {image} alt="some chore"/>
                <div className="timing">{timeListings}</div>
            </div>
        </section>
    );
}


export default ChoreDetails;