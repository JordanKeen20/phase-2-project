




import React from "react";
import ExampleItem from "./ExampleItem";

function ExampleList({chores, setChores }) {
    
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
