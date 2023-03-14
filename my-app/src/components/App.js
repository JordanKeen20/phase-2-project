import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import SpecialAid from "./SpecialAid";
import AboutProject from "./AboutHelp";
import ExamplesList from "./ExamplesList";
import ChoreDetails from "./ChoreDetails";
import NewChores from "./NewChores";








function App() {
  const [chores, setChores] = useState([]);
   
  useEffect(() => {
    fetch("http://localhost:4000/chores")
        .then(r => r.json())
        .then(data => 
            setChores(data))
}, [])

  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path = "/HelpfulInformation">
            <AboutProject />
          </Route>
          <Route exact path = "/ExamplesList">
            <ExamplesList chores ={chores} />
          </Route>
          <Route exact path= "/CreateChore"> 
            <NewChores setChores ={setChores} />
          </Route>
          <Route exact path= "/ChoreDetails/:id">
            <ChoreDetails />
          </Route>
          <Route exact path = "/home">
            <SpecialAid />
          </Route>       
        </Switch>
    </>
  );
}

export default App;
