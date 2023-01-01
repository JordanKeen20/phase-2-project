import React, { useEffect, useState } from "react";
import ExampleItem from "./ExampleItem";


function ExampleItems(){
    const[items, setItems] = useState ('');

    useEffect(() => {
        fetch("http://localhost:4000/chores")
            .then(response => response.json())
            .then( data =>setItems(data))
    }, [])

    const exampleList = items.map((item) => (
        <ExampleItem
        key={item.id}
        name= {item.name}
        image={item.image}
        time={item.time}
        />
    ));

    return(
        <section id="list">
            <h2> Chore List </h2>
            <div id="chore-list">{exampleList}</div>
        </section>
    )
}

export default ExampleItems;