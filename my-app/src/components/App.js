import React, { useState }from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import CreateList from "./NewChores";
import ExampleList from "./ExampleList";
import IdkList from "./idklist";
import SpecialAid from "./SpecialAid";



function App() {

  const [page, setPage] = useState('/');
  const [list, setList] = useState([]);
  

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
          <Route exact path = "/idklist">
            <IdkList />
          </Route>
        </Switch>
    </>
  );
}

export default App;
