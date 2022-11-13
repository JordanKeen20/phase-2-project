import React, { useEffect, useState }from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import CreateList from "./NewChores";
import ExampleList from "./ExampleList";
import AboutProject from "./AboutProject";
import SpecialAid from "./SpecialAid";



function App() {

  const [page, setPage] = useState('/');
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/chores')
      .then(response => response.json())
      .then(data => list(data))
  }, [])
  

  function addChore(newChore){
    const updatedChores = [...list, newChore]
    setList(updatedChores)
  }

  function deleteChores(id){
    const updatedChores = list.filter(list => list.id !== id)
    setList(updatedChores)
  }

  function updatedChores(id, completed) {
    const updatedChores = list.map(list =>{
      if(list.id === id){
        return {...list, completed }
      } else {
        return list
      }
    })
  }

  return (
    <>
      <NavBar setPageChange = {setPage}/>
        <Switch>
          <Route exact path = "/home">
            <SpecialAid />
          </Route>
          <Route exact path= "/createlist">
            <CreateList addChore = {addChore} />
          </Route>
          <Route exact path = "/examplelist">
            <ExampleList list = {list} deleteChores ={deleteChores} updatedChores = {updatedChores}/>
          </Route>
          <Route exact path = "/AboutProject">
            <AboutProject />
          </Route>
        </Switch>
    </>
  );
}

export default App;
