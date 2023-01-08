




import React, { useEffect, useState } from "react";
import ExampleItem from "./ExampleItem";

function ExampleList() {
    const [chore, setChore] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/chores")
            .then(r => r.json())
            .then(chores => 
                setChore(chores))
    }, [])
    
    const exampleItem = chore.map((chores) => (
        <ExampleItem
            key={chores.id}
            id={chores.id}
            name={chores.name}
            img={chores.image}
            time={chores.time}
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
