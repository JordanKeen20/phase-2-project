




import React, { useEffect, useState } from "react";
import ExampleItem from "./ExampleItem";

function ExampleList() {
    const [chores, setChores] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/chores")
            .then(r => r.json())
            .then(data => 
                setChores(data))
    }, [])
    
    const exampleItem = chores.map((chore) => (
        <ExampleItem
            key={chore.id}
            id={chore.id}
            name={chore.name}
            img={chore.image}
            time={chore.time}
        />
    ));
    
    return (
        <>
        <section id="chores">
            <h2>Chores</h2>
            <div id="chore-list">{exampleItem}</div>
        </section>
        </>
    );
}

export default ExampleList;
