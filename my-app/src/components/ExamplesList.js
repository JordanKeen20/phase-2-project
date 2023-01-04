import React, { useEffect, useState } from "react";
import ExampleItem from "./ExampleItem";


function ExampleList(){
    const[choresLists, setchoresLists] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:4000/chores")
            .then(response => response.json())
            .then(data => setchoresLists(data.chores))
    }, [])

    const exampleItems = choresLists.map((choresList) => (
        <ExampleItem
        key={choresList.id}
        name={choresList.name}
        choreImages = {choresList.images}
        time={choresList.time}
        state of completion = {choresList.completed}
        />
    ));

    return(
        <section id="list">
            <h2> Chore List </h2>
            <div id="chore-list">{exampleItems}</div>
        </section>
    )
}

export default ExampleList;